# Supabase RLS Issue Documentation

## Problem Summary

**Symptom:** Getting `401 Unauthorized` error when trying to insert data into Supabase with RLS enabled

**Error Message:**
```
POST https://[project].supabase.co/rest/v1/contact_submissions 401 (Unauthorized)
Error: new row violates row-level security policy for table "contact_submissions"
```

## Root Cause

The issue was caused by using `.select()` after `.insert()` in the Supabase query:

```typescript
// ❌ PROBLEMATIC CODE
const { data, error } = await supabase
  .from("contact_submissions")
  .insert({ email, message })
  .select()  // ← This requires a SELECT policy!
  .single();
```

**What was happening:**
1. The INSERT operation would succeed (INSERT policy allowed it)
2. Supabase would then try to return the inserted data via `.select()`
3. There was NO SELECT policy for the `anon` role
4. Supabase denied the SELECT operation → **401 Unauthorized**

This is confusing because the error appears to be about the insert failing, but it's actually the SELECT that's being blocked.

## Solution

### Step 1: Remove `.select()` from the insert query

```typescript
// ✅ CORRECT CODE
const { error } = await supabase
  .from("contact_submissions")
  .insert({ email, message });
  // No .select() means we don't need a SELECT policy
```

### Step 2: Create proper RLS policies in Supabase

```sql
-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "allow_insert_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow all inserts" ON contact_submissions;
DROP POLICY IF EXISTS "No public reads" ON contact_submissions;

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy for anonymous users
CREATE POLICY "enable_insert_for_anon"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

## Current RLS Status

✅ **RLS IS ENABLED AND SECURE**

**What's protected:**
- ✅ Anonymous users CAN insert data (for form submissions)
- ✅ Anonymous users CANNOT read data (submissions are private)
- ✅ Anonymous users CANNOT update data
- ✅ Anonymous users CANNOT delete data

**Security Model:**
- `anon` role = unauthenticated API requests (using the public anon key)
- Only INSERT is allowed via the policy
- No SELECT policy = data is write-only for public
- Only you can view submissions via Supabase Dashboard (uses service_role)

## Duplicate Email Prevention

To prevent spam and ensure each email can only submit once, we've added a **unique constraint** on the email column.

### Implementation

**Step 1: Add unique constraint in Supabase**

```sql
-- Add unique constraint to prevent duplicate emails
ALTER TABLE contact_submissions
ADD CONSTRAINT contact_submissions_email_unique
UNIQUE (email);
```

**Step 2: Handle duplicate errors in code**

The application detects PostgreSQL error code `23505` (unique violation) and shows a user-friendly message:

```typescript
if (error) {
  // Check if it's a duplicate email error (unique constraint violation)
  if (error.code === "23505" && error.message.includes("email")) {
    throw new Error("DUPLICATE_EMAIL");
  }
  throw new Error(error.message);
}
```

**Step 3: Display user-friendly message**

When a duplicate is detected, users see:
> ⚠️ This email has already been submitted. If you need to send another message, please contact us directly at info@exorax.com

### Benefits

- ✅ **Database-level enforcement** - Cannot be bypassed by frontend tricks
- ✅ **Prevents spam** - Each email can only submit once, ever
- ✅ **User-friendly error** - Clear message explaining why submission was blocked
- ✅ **Alternative provided** - Directs users to email directly for follow-ups

### PostgreSQL Error Codes

Common constraint violation errors:
- `23505` - Unique violation (duplicate value)
- `23503` - Foreign key violation
- `23502` - Not null violation
- `23514` - Check constraint violation

### Testing Duplicate Detection

```typescript
// Test 1: First submission should work
const { error: error1 } = await supabase
  .from("contact_submissions")
  .insert({ email: "test@test.com", message: "First message" });
console.log(error1); // null - success

// Test 2: Second submission with same email should fail
const { error: error2 } = await supabase
  .from("contact_submissions")
  .insert({ email: "test@test.com", message: "Second message" });
console.log(error2.code); // "23505" - duplicate key violation
```

## Key Learnings from Supabase Docs

### 1. Each SQL operation needs its own policy

- `FOR INSERT` policy ≠ allows SELECT
- `FOR SELECT` policy ≠ allows INSERT
- You need separate policies for each operation (INSERT, SELECT, UPDATE, DELETE)

### 2. The `anon` role

From Supabase docs:
> "The anon role represents unauthenticated requests using the public/anon API key"

This is the role used when making requests from the browser without user authentication.

### 3. Using `WITH CHECK` vs `USING`

- `WITH CHECK` - applies to INSERT and UPDATE operations (validates new data)
- `USING` - applies to SELECT, UPDATE, DELETE operations (filters which rows are visible)

For insert-only policies, use `WITH CHECK (true)` to allow all inserts.

### 4. RLS Policies vs Database Grants

According to Supabase docs:
> "RLS policies are sufficient for controlling API access. You don't need separate GRANT statements for the anon role when using RLS."

Once RLS is enabled, policies control everything.

## Common Mistakes to Avoid

### ❌ Mistake 1: Using `.select()` without a SELECT policy
```typescript
// This will fail if there's no SELECT policy for anon
await supabase.from("table").insert(data).select()
```

### ❌ Mistake 2: Creating policy with wrong role
```sql
-- Using 'public' instead of 'anon'
CREATE POLICY "wrong" ON table FOR INSERT TO public WITH CHECK (true);
```
Should be: `TO anon`

### ❌ Mistake 3: Not enabling RLS
```sql
-- Table exists but RLS not enabled
-- Result: Anyone can do anything (not secure)
```
Always run: `ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`

### ❌ Mistake 4: Using `auth.uid()` for anonymous users
```sql
-- This always fails for anonymous users (auth.uid() is null)
CREATE POLICY "wrong" ON table FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);
```
For anonymous access, use `WITH CHECK (true)` or validate data fields instead.

## Testing Your RLS Setup

### Test 1: Verify INSERT works
```typescript
const { error } = await supabase
  .from("contact_submissions")
  .insert({ email: "test@test.com", message: "test" });

console.log(error); // Should be null
```

### Test 2: Verify SELECT is blocked (good!)
```typescript
const { data, error } = await supabase
  .from("contact_submissions")
  .select();

console.log(data); // Should be null or empty
console.log(error); // Should show permission denied
```

### Test 3: Check data in Supabase Dashboard
- Go to Table Editor → contact_submissions
- You should see the inserted rows
- This proves data was inserted successfully

## Production Checklist

Before deploying to production with RLS:

- [ ] RLS is enabled on all public tables
- [ ] Each operation (INSERT, SELECT, UPDATE, DELETE) has appropriate policies
- [ ] Test with actual anon key (not service key)
- [ ] Verify users can't read/modify data they shouldn't access
- [ ] Remove any `.select()` calls that aren't needed
- [ ] Test error handling when RLS blocks an operation
- [ ] Add unique constraint on email column to prevent duplicates
- [ ] Test duplicate email submission shows proper error message
- [ ] Consider rate limiting to prevent spam submissions
- [ ] Verify error messages don't expose sensitive information

## Additional Resources

- [Supabase RLS Documentation](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase Auth & RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Securing Your API](https://supabase.com/docs/guides/api/securing-your-api)

---

## Quick Reference: SQL Commands

### Enable RLS
```sql
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
```

### Disable RLS (NOT RECOMMENDED for production)
```sql
ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;
```

### Create INSERT policy for anonymous users
```sql
CREATE POLICY "policy_name"
  ON table_name
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

### Create SELECT policy for authenticated users only
```sql
CREATE POLICY "policy_name"
  ON table_name
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);
```

### Drop a policy
```sql
DROP POLICY IF EXISTS "policy_name" ON table_name;
```

### View existing policies
```sql
SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';
```

---

**Date Created:** December 6, 2025
**Project:** ExoRax Contact Form
**Issue Resolved:** Yes ✅
