# EXORAX IQ Assessment - Setup & Testing Guide

## Overview

The EXORAX IQ Assessment is a comprehensive multi-step facility readiness assessment tool that evaluates data centers for AI workload deployment. This guide covers the complete setup and testing process.

---

## 1. Install Dependencies

Run these commands in the project root directory:

```bash
# Install PDF generation library
pnpm add jspdf

# Install email service (Resend)
pnpm add resend
```

---

## 2. Database Setup

### Create the Supabase Table

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor** → **New Query**
3. Copy and paste the entire contents of `EXORAXIQ_DATABASE_SETUP.sql`
4. Click **Run** to execute

This will create:
- `exoraxiq_assessments` table with email as PRIMARY KEY (enables UPSERT)
- RLS policies allowing INSERT and UPDATE for anonymous users
- Indexes for performance optimization
- Auto-update trigger for `updated_at` timestamp

### Verify Database Setup

Run these queries in the SQL Editor to verify:

```sql
-- Check table exists
SELECT * FROM information_schema.tables WHERE table_name = 'exoraxiq_assessments';

-- Check RLS is enabled
SELECT relname, relrowsecurity FROM pg_class WHERE relname = 'exoraxiq_assessments';

-- View RLS policies
SELECT * FROM pg_policies WHERE tablename = 'exoraxiq_assessments';
```

Expected: You should see 2 policies (`allow_anonymous_insert_exoraxiq` and `allow_anonymous_update_exoraxiq`)

---

## 3. Email Service Setup (Resend)

### Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the generated API key (starts with `re_`)

### Configure Email Domain

✅ **Already configured!** The code is set to use Resend's test domain in `api/send-assessment.js` line 47:

```javascript
from: 'EXORAX IQ <onboarding@resend.dev>',
```

This works immediately for testing - no domain verification needed!

**For Production Later**:
- Verify your custom domain at https://resend.com/domains
- Then uncomment line 49 in `api/send-assessment.js` to use your domain:
```javascript
from: 'EXORAX IQ <noreply@exorax.com>',
```

---

## 4. Environment Variables

Add these to your `.env.local` file (create if it doesn't exist):

```env
# Supabase (already configured for contact form)
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend Email Service (NEW)
RESEND_API_KEY=re_your_resend_api_key_here
```

**Security Notes**:
- `.env.local` is already in `.gitignore` - never commit this file
- `RESEND_API_KEY` is server-side only (used in Vercel serverless function)
- Client-side code cannot access server-side environment variables

---

## 5. Project Architecture

### Files Created/Modified

**New Files**:
- `client/src/components/ExoRaxIQAssessment.jsx` - Main assessment component (612 lines)
- `client/src/hooks/useExoRaxIQAssessment.js` - Supabase submission hook with UPSERT
- `client/src/lib/generateAssessmentPDF.js` - PDF generation utility using jsPDF
- `api/send-assessment.js` - Vercel serverless function for sending emails
- `EXORAXIQ_DATABASE_SETUP.sql` - Complete database schema and RLS setup
- `EXORAXIQ_SETUP_GUIDE.md` - This guide

**Modified Files**:
- `client/src/pages/Home.jsx` - Replaced ContactForm with ExoRaxIQAssessment
- `client/src/App.tsx` - Added QueryClientProvider wrapper (already done for contact form)

### How It Works

1. **Step 1 (Intro)**: User enters facility info + email
2. **Step 2 (Assessment)**: User rates 9 categories (94 criteria total)
3. **On "View Results"**:
   - Submits data to Supabase with UPSERT (allows retakes)
   - Shows "Saving..." while submitting
   - Displays results screen
4. **On "Email My Results"**:
   - Generates PDF client-side using jsPDF
   - Converts PDF to base64
   - Calls `/api/send-assessment` endpoint
   - Serverless function sends email via Resend with PDF attachment
   - Shows success/error message

---

## 6. Testing the Complete Flow

### Local Development Testing

1. **Start the development server**:
   ```bash
   pnpm dev
   ```

2. **Navigate to the assessment** (home page)

3. **Complete Step 1 - Intro**:
   - Enter facility name (required)
   - Enter contact name (required)
   - Enter email (required) - use a real email you can access
   - Optional: location, target MW, company
   - Click "Start Assessment →"

4. **Complete Step 2 - Assessment**:
   - Rate all 9 categories (Unknown, Poor, Fair, Good, Excellent)
   - Use the category quick nav at bottom to navigate
   - Click "View Results →" on last category

5. **Verify Database Submission**:
   - Open Supabase Dashboard → Table Editor → `exoraxiq_assessments`
   - Confirm your entry appears with:
     - Correct email, facility name, contact info
     - Ratings stored as JSONB
     - Calculated scores (overall, readiness, scalability, operational)
     - Quadrant classification

6. **Test Results Screen**:
   - Verify quadrant plot shows correct position
   - Check overall score matches
   - Review category breakdown shows all ratings

7. **Test Email Functionality**:
   - Click "Email My Results" button
   - Button should show "Sending..." (disabled state)
   - Wait for success message: "✓ Results sent to [email]"
   - Check your email inbox for:
     - Email from EXORAX IQ
     - Professional HTML email template
     - PDF attachment named `EXORAX_IQ_Assessment_[FacilityName].pdf`

8. **Test PDF Quality**:
   - Open PDF attachment
   - Verify it contains:
     - Header with EXORAX branding (emerald green)
     - Facility information section
     - Overall score and quadrant
     - Recommended action
     - Score breakdown with progress bars
     - Category ratings with dot indicators
     - Footer with generation date

9. **Test Retakes (UPSERT)**:
   - Click "Start new assessment" at bottom
   - Enter **same email** as before
   - Complete assessment with different ratings
   - Check Supabase - should be 1 row (updated), not 2 rows
   - Verify `updated_at` timestamp changed

### Production Deployment Testing

After deploying to Vercel:

1. **Verify Environment Variables**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Ensure `RESEND_API_KEY` is set for Production
   - Redeploy if you added the variable after deployment

2. **Test Email with Production Domain**:
   - Complete assessment on production URL
   - Verify emails arrive (check spam folder if not in inbox)
   - Confirm PDF attachment is not corrupted

3. **Check Vercel Logs**:
   - Vercel Dashboard → Your Project → Logs → Functions
   - Filter for `/api/send-assessment`
   - Verify no errors in serverless function execution

---

## 7. Troubleshooting

### Issue: "Email service is not configured"

**Cause**: `RESEND_API_KEY` environment variable not set

**Fix**:
- Local: Add to `.env.local` and restart dev server
- Vercel: Add in Dashboard → Settings → Environment Variables → Redeploy

### Issue: "Failed to send email" with status 403

**Cause**: Invalid or unauthorized Resend API key

**Fix**:
- Verify API key is correct (starts with `re_`)
- Check Resend dashboard for API key status
- Regenerate API key if needed

### Issue: Email sends but gets blocked/spam

**Cause**: Using unverified domain or poor sender reputation

**Fix**:
- For development: Use `onboarding@resend.dev` (Resend's test domain)
- For production: Verify your domain in Resend dashboard
- Add SPF/DKIM records to your domain DNS settings

### Issue: "new row violates row-level security policy"

**Cause**: RLS policies not properly configured

**Fix**:
- Re-run `EXORAXIQ_DATABASE_SETUP.sql`
- Verify policies with: `SELECT * FROM pg_policies WHERE tablename = 'exoraxiq_assessments'`
- Ensure you see both INSERT and UPDATE policies for `anon` role

### Issue: PDF generation fails or looks broken

**Cause**: `jsPDF` not installed or import error

**Fix**:
- Verify `pnpm add jspdf` was run successfully
- Check `node_modules/jspdf` exists
- Restart dev server after installing

### Issue: Scores not calculating correctly

**Cause**: Not all categories rated

**Fix**:
- Assessment requires all 9 categories to be rated
- Check category quick nav - unrated categories show as gray dots
- Scores calculate based only on rated categories (weighted average)

---

## 8. Security Considerations

### Data Privacy

✅ **Secure**:
- Submissions stored in Supabase with RLS enabled
- No SELECT policy = assessments are write-only for public
- Only admins can view submissions via Supabase Dashboard
- Email delivery is one-time, not stored

✅ **API Key Protection**:
- `RESEND_API_KEY` is server-side only (Vercel serverless function)
- Client-side code has no access to API key
- Never commit `.env.local` to git

### UPSERT Behavior

⚠️ **Important**:
- Same email = updates existing record (allows retakes)
- Intentional design choice for facility reassessments
- `created_at` preserves original date, `updated_at` tracks latest

### Rate Limiting

⚠️ **Consideration**:
- Resend free tier: 100 emails/day, 3000/month
- No rate limiting implemented on `/api/send-assessment`
- For production: Consider adding rate limiting middleware

---

## 9. Monitoring & Analytics

### Supabase Dashboard Queries

**View all assessments**:
```sql
SELECT email, facility_name, quadrant, overall_score, created_at, updated_at
FROM exoraxiq_assessments
ORDER BY created_at DESC;
```

**Count by quadrant**:
```sql
SELECT quadrant, COUNT(*) as count
FROM exoraxiq_assessments
GROUP BY quadrant
ORDER BY count DESC;
```

**High-scoring facilities**:
```sql
SELECT facility_name, email, overall_score, quadrant
FROM exoraxiq_assessments
WHERE overall_score >= 70
ORDER BY overall_score DESC;
```

**Recent retakes** (updated within 24 hours):
```sql
SELECT facility_name, email, overall_score,
       created_at, updated_at,
       (updated_at - created_at) as time_diff
FROM exoraxiq_assessments
WHERE updated_at > created_at
  AND updated_at > NOW() - INTERVAL '24 hours'
ORDER BY updated_at DESC;
```

---

## 10. Next Steps

### Optional Enhancements

- [ ] Add rate limiting to email endpoint
- [ ] Implement email templates with React Email
- [ ] Add download PDF button (client-side only, no email)
- [ ] Create admin dashboard to view submissions
- [ ] Add Google Analytics events for assessment completion
- [ ] Implement progress saving with localStorage (currently not saved)
- [ ] Add A/B testing for different quadrant thresholds
- [ ] Create comparison feature (compare multiple assessments)

### Maintenance

- Monitor Resend usage in dashboard (free tier limits)
- Review Supabase storage regularly (clean up old assessments if needed)
- Update PDF template branding as needed in `generateAssessmentPDF.js`
- Keep dependencies updated: `pnpm update jspdf resend`

---

## Support

For issues or questions:
1. Check troubleshooting section above
2. Review Supabase RLS documentation: `SUPABASE_RLS_DOCUMENTATION.md`
3. Check Resend docs: [resend.com/docs](https://resend.com/docs)
4. Verify Vercel serverless function logs

---

**Last Updated**: 2025-12-06
**Version**: 1.0
**Status**: ✅ Complete & Ready for Testing
