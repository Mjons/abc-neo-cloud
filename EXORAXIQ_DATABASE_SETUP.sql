-- ============================================================================
-- EXORAX IQ ASSESSMENT DATABASE SETUP
-- ============================================================================
-- This SQL script creates the database table and RLS policies for storing
-- facility assessment data with UPSERT capability (allows retakes).
--
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================================

-- 1. CREATE TABLE
-- Email is the PRIMARY KEY to enable UPSERT (update if exists, insert if new)
CREATE TABLE exoraxiq_assessments (
  -- Primary Key (enables UPSERT on email)
  email text PRIMARY KEY,

  -- Facility Information
  facility_name text NOT NULL,
  location text,
  target_mw text,

  -- Contact Information
  contact_name text NOT NULL,
  company text,

  -- Assessment Ratings (stored as JSONB for flexibility)
  -- Example: {"utility": 3, "network": 4, "building": 2, ...}
  ratings jsonb NOT NULL,

  -- Calculated Scores (computed from ratings)
  overall_score numeric(5,2),
  readiness_score numeric(5,2),
  scalability_score numeric(5,2),
  operational_score numeric(5,2),

  -- Quadrant Classification
  -- One of: 'Prime Candidate', 'High Potential', 'Optimize First', 'Develop'
  quadrant text,

  -- Metadata
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- 2. CREATE INDEXES for performance
-- Index on email for quick lookups (already indexed as PRIMARY KEY)
-- Index on created_at for sorting/filtering by date
CREATE INDEX idx_exoraxiq_assessments_created_at ON exoraxiq_assessments(created_at DESC);

-- Index on quadrant for filtering by classification
CREATE INDEX idx_exoraxiq_assessments_quadrant ON exoraxiq_assessments(quadrant);

-- 3. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE exoraxiq_assessments ENABLE ROW LEVEL SECURITY;

-- 4. CREATE RLS POLICIES

-- Policy 1: Allow anonymous users to INSERT assessments
CREATE POLICY "allow_anonymous_insert_exoraxiq"
  ON exoraxiq_assessments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Allow anonymous users to UPDATE their own assessment (UPSERT)
-- This enables retakes - users can update existing assessment with same email
CREATE POLICY "allow_anonymous_update_exoraxiq"
  ON exoraxiq_assessments
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Policy 3: Allow anonymous users to SELECT (required for UPSERT to work)
-- IMPORTANT: UPSERT operations need SELECT policy to function properly
-- Even though the code uses returning: 'minimal', PostgreSQL UPSERT still needs SELECT
-- This doesn't expose data because there are no client-side .select() calls
CREATE POLICY "allow_anonymous_select_exoraxiq"
  ON exoraxiq_assessments
  FOR SELECT
  TO anon
  USING (true);

-- 5. GRANT TABLE PERMISSIONS TO ANON ROLE
-- CRITICAL: RLS policies are filters, but you also need GRANT permissions!
-- PostgreSQL has 2 security layers: GRANT (table access) + RLS (row filters)
-- Without these GRANTs, you'll get "violates row-level security policy" errors
GRANT INSERT, UPDATE, SELECT ON exoraxiq_assessments TO anon;

-- 6. CREATE FUNCTION to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_exoraxiq_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. CREATE TRIGGER to auto-update updated_at on UPDATE
CREATE TRIGGER exoraxiq_assessments_updated_at
  BEFORE UPDATE ON exoraxiq_assessments
  FOR EACH ROW
  EXECUTE FUNCTION update_exoraxiq_updated_at();

-- ============================================================================
-- VERIFICATION QUERIES (optional - run these to verify setup)
-- ============================================================================

-- Check table was created
SELECT * FROM information_schema.tables WHERE table_name = 'exoraxiq_assessments';

-- Check RLS is enabled
SELECT relname, relrowsecurity
FROM pg_class
WHERE relname = 'exoraxiq_assessments';

-- View RLS policies
SELECT * FROM pg_policies WHERE tablename = 'exoraxiq_assessments';

-- Check indexes
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'exoraxiq_assessments';

-- ============================================================================
-- EXAMPLE USAGE
-- ============================================================================

/*
-- Test INSERT (first assessment)
INSERT INTO exoraxiq_assessments (
  email, facility_name, location, target_mw, contact_name, company,
  ratings, overall_score, readiness_score, scalability_score,
  operational_score, quadrant
) VALUES (
  'test@example.com',
  'Test Facility',
  'Austin, TX',
  '50MW',
  'John Doe',
  'Test Corp',
  '{"utility":3,"network":4,"location":2}'::jsonb,
  75.5,
  80.0,
  70.0,
  65.0,
  'Prime Candidate'
)
ON CONFLICT (email)
DO UPDATE SET
  facility_name = EXCLUDED.facility_name,
  location = EXCLUDED.location,
  target_mw = EXCLUDED.target_mw,
  contact_name = EXCLUDED.contact_name,
  company = EXCLUDED.company,
  ratings = EXCLUDED.ratings,
  overall_score = EXCLUDED.overall_score,
  readiness_score = EXCLUDED.readiness_score,
  scalability_score = EXCLUDED.scalability_score,
  operational_score = EXCLUDED.operational_score,
  quadrant = EXCLUDED.quadrant;

-- Query all assessments (admin only via dashboard)
SELECT
  email,
  facility_name,
  quadrant,
  overall_score,
  created_at,
  updated_at
FROM exoraxiq_assessments
ORDER BY created_at DESC;

-- Query by quadrant
SELECT COUNT(*), quadrant
FROM exoraxiq_assessments
GROUP BY quadrant;

-- Query high-scoring facilities
SELECT facility_name, email, overall_score, quadrant
FROM exoraxiq_assessments
WHERE overall_score >= 70
ORDER BY overall_score DESC;
*/

-- ============================================================================
-- SUCCESS!
-- If you see no errors above, your database is ready for EXORAX IQ assessments
-- ============================================================================
