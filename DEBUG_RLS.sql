-- ============================================================================
-- DEBUG: Check RLS Configuration for exoraxiq_assessments
-- ============================================================================
-- Run these queries ONE BY ONE in Supabase SQL Editor to debug the issue
-- ============================================================================

-- QUERY 1: Check if table exists and RLS is enabled
SELECT
    schemaname,
    tablename,
    rowsecurity as "RLS Enabled"
FROM pg_tables
WHERE tablename = 'exoraxiq_assessments';

-- Expected: 1 row with rowsecurity = true

-- ============================================================================

-- QUERY 2: Check all policies on the table
SELECT
    policyname as "Policy Name",
    cmd as "Command",
    roles as "Roles",
    qual as "USING Expression",
    with_check as "WITH CHECK Expression"
FROM pg_policies
WHERE tablename = 'exoraxiq_assessments';

-- Expected: 2 rows (INSERT and UPDATE for anon role)

-- ============================================================================

-- QUERY 3: Check table grants for anon role
SELECT
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'exoraxiq_assessments'
  AND grantee = 'anon';

-- Expected: Should see INSERT, UPDATE grants for anon

-- ============================================================================

-- QUERY 4: Check if anon role exists
SELECT rolname FROM pg_roles WHERE rolname = 'anon';

-- Expected: 1 row

-- ============================================================================

-- FIX: Grant explicit permissions to anon role
-- (Run this if QUERY 3 showed no grants)

GRANT INSERT, UPDATE ON exoraxiq_assessments TO anon;

-- ============================================================================

-- QUERY 5: Test INSERT as anon role (should work after grants)
SET ROLE anon;

INSERT INTO exoraxiq_assessments (
  email, facility_name, contact_name, ratings,
  overall_score, readiness_score, scalability_score, operational_score, quadrant
) VALUES (
  'test@example.com',
  'Test Facility',
  'Test User',
  '{"utility":3}'::jsonb,
  75, 80, 70, 65,
  'Prime Candidate'
);

RESET ROLE;

-- If this INSERT fails, you'll see the exact error

-- ============================================================================

-- QUERY 6: Clean up test data
DELETE FROM exoraxiq_assessments WHERE email = 'test@example.com';

-- ============================================================================
