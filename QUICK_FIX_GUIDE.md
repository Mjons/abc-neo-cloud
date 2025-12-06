# Quick Fix Guide - ExoRaxIQ Errors

## What I Fixed

✅ **RLS 401 Error** - Created clean SQL fix script with SELECT policy + GRANT permissions
✅ **API 404 Error** - Added dev/production email handling
✅ **Logo Error** - Added VITE_APP_LOGO to .env.example

### 🔑 Key Learning: UPSERT + RLS Requirements

**UPSERT operations need 3 things to work with RLS:**
1. ✅ INSERT policy
2. ✅ UPDATE policy
3. ✅ **SELECT policy** (UPSERT checks if row exists first!)

**PLUS you also need GRANT permissions:**
- PostgreSQL has 2 security layers: GRANT (table access) + RLS (row filters)
- Even with perfect RLS policies, you'll get errors without GRANT permissions
- Fix: `GRANT INSERT, UPDATE, SELECT ON table_name TO anon;`

---

## What You Need To Do Now

### Step 1: Fix RLS Policies in Supabase (3 minutes)

1. Open **Supabase Dashboard** → **SQL Editor** → **New Query**

2. Copy and paste this **entire script**:

```sql
-- ============================================================================
-- EXORAX IQ RLS FIX - Clean Policies
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

-- 5. CREATE SELECT policy (required for UPSERT to work)
CREATE POLICY "allow_anonymous_select_exoraxiq"
  ON exoraxiq_assessments
  FOR SELECT
  TO anon
  USING (true);

-- 6. GRANT table permissions (CRITICAL!)
GRANT INSERT, UPDATE, SELECT ON exoraxiq_assessments TO anon;

-- VERIFICATION
SELECT policyname, cmd, roles
FROM pg_policies
WHERE tablename = 'exoraxiq_assessments';
```

3. Click **Run**

4. You should see **3 policies** in the results:
   - `allow_anonymous_insert_exoraxiq` (INSERT)
   - `allow_anonymous_update_exoraxiq` (UPDATE)
   - `allow_anonymous_select_exoraxiq` (SELECT)

---

### Step 2: Add Logo Variable to .env.local (30 seconds)

Open your `.env.local` file and add this line:

```env
VITE_APP_LOGO=/src/logos/XTIUM_idf_EOIo7Y_1.svg
```

Your `.env.local` should now have **4 variables**:
```env
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
RESEND_API_KEY=re_...
VITE_APP_LOGO=/src/logos/XTIUM_idf_EOIo7Y_1.svg
```

---

### Step 3: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
# Then start again:
pnpm dev
```

---

### Step 4: Test Locally

1. Open http://localhost:3000
2. Complete the ExoRaxIQ Assessment
3. Click "Email My Results"

**Expected behavior**:
- ✅ Assessment saves to Supabase (no more 401 error!)
- ✅ Button shows "Sending..."
- ✅ Green success message appears: "✓ Results sent to [email]"
- ✅ In browser console, you'll see:
  ```
  📧 [DEV MODE] Email would be sent to: your@email.com
  📄 [DEV MODE] PDF generated successfully: XXXXX bytes
  ✅ [DEV MODE] Email mocked successfully. In production, this will send a real email via Resend.
  ```

**Note**: In local development, the email is **mocked** (not actually sent). This lets you test the full flow without needing Vercel CLI. The PDF is still generated to verify that works!

---

### Step 5: Deploy to Production

After local testing works:

```bash
git add .
git commit -m "Fix ExoRaxIQ RLS policies and add dev/prod email handling"
git push
```

**In production** (after Vercel deploys):
- ✅ Assessment saves to Supabase
- ✅ Real emails send via Resend with PDF attachment
- ✅ No console logs about [DEV MODE]

---

## How The Email System Works Now

### Local Development (`pnpm dev`)
- Detects `import.meta.env.DEV === true`
- Generates PDF (proves it works)
- Shows success message (tests UI)
- **Does NOT call `/api/send-assessment`** (doesn't work in Vite dev server)
- Logs to console so you can see what would happen

### Production (Vercel deployment)
- Detects `import.meta.env.DEV === false`
- Generates PDF
- Calls `/api/send-assessment` serverless function
- **Actually sends email** via Resend
- User receives PDF in their inbox

---

## What Changed

### 1. Fixed Files

| File | What Changed |
|------|--------------|
| `EXORAXIQ_RLS_FIX.md` | Created SQL script to fix RLS policies |
| `client/src/components/ExoRaxIQAssessment.jsx` | Added dev/prod email handling logic |
| `.env.example` | Added VITE_APP_LOGO variable |
| `QUICK_FIX_GUIDE.md` | This file! |

### 2. Code Changes

**ExoRaxIQAssessment.jsx** (lines 288-342):
```javascript
// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

if (isDevelopment) {
  // DEVELOPMENT MODE: Mock email sending
  console.log('📧 [DEV MODE] Email would be sent to:', facilityInfo.email);
  // ... simulate delay and show success
} else {
  // PRODUCTION MODE: Actually send email via Vercel serverless function
  const response = await fetch('/api/send-assessment', { ... });
  // ... real email sending
}
```

---

## Troubleshooting

### Still getting 401 error after running SQL?

**Check** if policies were created:
```sql
SELECT * FROM pg_policies WHERE tablename = 'exoraxiq_assessments';
```

Should see **3 rows** (INSERT, UPDATE, SELECT). If not:
1. Make sure you ran the SQL in the correct Supabase project
2. Check for error messages in SQL Editor output
3. Try running the SQL script again

**Also check** if GRANT permissions were added:
```sql
SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'exoraxiq_assessments' AND grantee = 'anon';
```

Should see **3 grants** (INSERT, UPDATE, SELECT) for anon role.

### Logo still showing %VITE_APP_LOGO%?

**Check**:
1. Did you add it to `.env.local` (not just `.env.example`)?
2. Did you restart the dev server after adding it?
3. Hard refresh browser (Ctrl+Shift+R)

### Email not actually sending in production?

**Check**:
1. Did you add `RESEND_API_KEY` to Vercel environment variables?
2. Did you redeploy after adding the env var?
3. Check Vercel → Logs → Functions for errors
4. Verify email sender is set to `onboarding@resend.dev` in `api/send-assessment.js`

---

## Success Checklist

After following Steps 1-4 above:

- [ ] RLS SQL script ran successfully in Supabase
- [ ] See 2 policies when verifying in Supabase
- [ ] Added `VITE_APP_LOGO` to `.env.local`
- [ ] Restarted dev server
- [ ] Completed assessment locally
- [ ] No 401 error (assessment saved to Supabase)
- [ ] Email button shows success message
- [ ] See [DEV MODE] logs in browser console
- [ ] Check Supabase table editor - your assessment is there
- [ ] Ready to deploy to production!

---

**Next**: After verifying local works, deploy to production and test real email delivery!

**Created**: 2025-12-06
**Status**: ✅ Ready to use
