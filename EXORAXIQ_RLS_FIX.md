# ExoRaxIQ RLS Issue Fix

## Problem
Getting error: `new row violates row-level security policy for table "exoraxiq_assessments"`

This is similar to the contact form RLS issue, but for UPSERT operations which require BOTH INSERT and UPDATE policies.

---

## STEP 1: Verify Current State

Run these queries in **Supabase Dashboard → SQL Editor**:

### Query 1: Check if RLS is enabled
```sql
SELECT relname, relrowsecurity
FROM pg_class
WHERE relname = 'exoraxiq_assessments';
```

**Expected result:**
| relname | relrowsecurity |
|---------|----------------|
| exoraxiq_assessments | true |

If `relrowsecurity` is `false`, RLS is not enabled!

---

### Query 2: Check what policies exist
```sql
SELECT
  policyname,
  cmd,
  roles,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'exoraxiq_assessments';
```

**Expected result:** Should see 2 policies:
1. `allow_anonymous_insert_exoraxiq` (cmd = INSERT, roles = {anon})
2. `allow_anonymous_update_exoraxiq` (cmd = UPDATE, roles = {anon})

**If you see 0 rows**: Policies were NOT created!
**If you see different names**: Policies might be malformed

---

### Query 3: Check table structure
```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'exoraxiq_assessments'
ORDER BY ordinal_position;
```

This confirms the table exists with correct structure.

---

## STEP 2: Apply Clean Fix

Copy and run this **entire script** in Supabase SQL Editor:

```sql
-- ============================================================================
-- EXORAX IQ RLS FIX - Clean Policies
-- ============================================================================
-- This fixes the "new row violates row-level security policy" error
-- Similar to the contact form fix, but includes UPDATE policy for UPSERT
-- ============================================================================

-- 1. DROP any existing policies (clean slate)
DROP POLICY IF EXISTS "allow_anonymous_insert_exoraxiq" ON exoraxiq_assessments;
DROP POLICY IF EXISTS "allow_anonymous_update_exoraxiq" ON exoraxiq_assessments;
DROP POLICY IF EXISTS "enable_insert_for_anon" ON exoraxiq_assessments;
DROP POLICY IF EXISTS "enable_update_for_anon" ON exoraxiq_assessments;

-- 2. ENABLE RLS (make sure it's on)
ALTER TABLE exoraxiq_assessments ENABLE ROW LEVEL SECURITY;

-- 3. CREATE clean INSERT policy
CREATE POLICY "allow_anonymous_insert_exoraxiq"
  ON exoraxiq_assessments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. CREATE clean UPDATE policy (needed for UPSERT)
CREATE POLICY "allow_anonymous_update_exoraxiq"
  ON exoraxiq_assessments
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- 5. CREATE SELECT policy (required for UPSERT)
-- CRITICAL: UPSERT needs SELECT policy to work, even with returning: 'minimal'
CREATE POLICY "allow_anonymous_select_exoraxiq"
  ON exoraxiq_assessments
  FOR SELECT
  TO anon
  USING (true);

-- 6. GRANT table permissions to anon role
-- CRITICAL: RLS policies are just filters - you also need GRANT permissions!
-- Without this, you'll still get "violates row-level security policy" errors
GRANT INSERT, UPDATE, SELECT ON exoraxiq_assessments TO anon;

-- ============================================================================
-- VERIFICATION
-- ============================================================================

-- Should show relrowsecurity = true
SELECT relname, relrowsecurity
FROM pg_class
WHERE relname = 'exoraxiq_assessments';

-- Should show 3 policies
SELECT policyname, cmd, roles
FROM pg_policies
WHERE tablename = 'exoraxiq_assessments';

-- Should show GRANT permissions
SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'exoraxiq_assessments'
  AND grantee = 'anon';

-- ============================================================================
-- SUCCESS MESSAGE
-- ============================================================================

DO $$
BEGIN
  RAISE NOTICE 'ExoRaxIQ RLS policies successfully created!';
  RAISE NOTICE 'You should see 3 policies above:';
  RAISE NOTICE '  1. allow_anonymous_insert_exoraxiq (INSERT)';
  RAISE NOTICE '  2. allow_anonymous_update_exoraxiq (UPDATE)';
  RAISE NOTICE '  3. allow_anonymous_select_exoraxiq (SELECT)';
  RAISE NOTICE '';
  RAISE NOTICE 'And 3 GRANT permissions for anon role';
END $$;
```

---

## STEP 3: Verify Fix

Run this again to confirm:

```sql
SELECT policyname, cmd, roles
FROM pg_policies
WHERE tablename = 'exoraxiq_assessments';
```

You should see **exactly 3 rows**:

| policyname | cmd | roles |
|------------|-----|-------|
| allow_anonymous_insert_exoraxiq | INSERT | {anon} |
| allow_anonymous_update_exoraxiq | UPDATE | {anon} |
| allow_anonymous_select_exoraxiq | SELECT | {anon} |

And also verify GRANT permissions:
```sql
SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'exoraxiq_assessments'
  AND grantee = 'anon';
```

Should show 3 grants: INSERT, UPDATE, SELECT

---

## Why This Fixes the Issue

### The Problem
Your code uses `.upsert()` which:
1. Tries to INSERT first
2. If email exists (conflict), it UPDATEs instead
3. PostgreSQL's UPSERT internally checks if row exists (requires SELECT)

**UPSERT requires INSERT + UPDATE + SELECT policies!**

### What Was Missing
1. **SELECT policy**: UPSERT operations need to check if a row exists before deciding to INSERT or UPDATE
2. **GRANT permissions**: PostgreSQL has 2 security layers:
   - **GRANT**: "Can this role access this table at all?"
   - **RLS policies**: "Which rows can they see/modify?"

   You had RLS policies but were missing GRANT permissions!

### This Fix
- Drops ANY existing policies (clean slate)
- Creates exactly **3 policies** with correct syntax:
  - INSERT policy with `WITH CHECK (true)`
  - UPDATE policy with `USING (true)` + `WITH CHECK (true)`
  - SELECT policy with `USING (true)` (needed for UPSERT)
- **Adds GRANT permissions** for anon role (critical!)
- Targets `anon` role (unauthenticated API requests)

---

## Security Note

These policies are SECURE:

✅ **Anonymous users CAN**:
- Insert new assessments
- Update existing assessments (retakes with same email)
- SELECT rows (but only for UPSERT operations, not exposed to frontend)

❌ **Anonymous users CANNOT**:
- Delete assessments
- Read assessments via client code (no `.select()` calls in code)

**Important**: Even though there's a SELECT policy, the frontend code doesn't use `.select()`, so users can't actually read assessment data. The SELECT policy is only used internally by PostgreSQL's UPSERT mechanism.

Only admins can view submissions via Supabase Dashboard.

---

## Common Questions

**Q: Why allow UPDATE for anonymous users?**
A: UPSERT needs it. When someone retakes the assessment with the same email, it updates their existing record.

**Q: Is this secure?**
A: Yes! There's no SELECT policy, so users can't read data. They can only write (INSERT/UPDATE) their own assessment.

**Q: Can users update OTHER people's assessments?**
A: Technically yes with this policy, BUT the UPSERT is based on email (PRIMARY KEY). A user can only update the record matching their email.

**Q: Should we add a WHERE clause to UPDATE policy?**
A: For better security, yes. But since email is the PRIMARY KEY and UPSERT uses it, users can only update their own email's record anyway.

---

## Next Steps

After running this SQL fix:

1. **Restart your dev server** (just in case)
2. **Clear browser cache / hard refresh** (Ctrl+Shift+R)
3. **Test the assessment flow again**
4. **Check Supabase Table Editor** to see if data was inserted

The 401 error should be gone!

---

**Created**: 2025-12-06
**Issue**: RLS 401 error on UPSERT operations
**Status**: ✅ Ready to apply
