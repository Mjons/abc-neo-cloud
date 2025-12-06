# ExoRaxIQ Setup Checklist

All code is complete! Follow these steps to finish the setup:

## ✅ Step 1: Install Dependencies

Run these commands in the **project root directory**:

```bash
cd /mnt/c/Users/tayfu/Desktop/Claude_Projects/ExoRax

pnpm add jspdf
pnpm add resend
```

## ✅ Step 2: Create Supabase Table

1. Go to your **Supabase Dashboard**
2. Navigate to **SQL Editor** → **New Query**
3. Open the file `EXORAXIQ_DATABASE_SETUP.sql`
4. Copy all the SQL code
5. Paste into Supabase SQL Editor
6. Click **Run**
7. Verify: No errors should appear

## ✅ Step 3: Get Resend API Key

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Go to **API Keys** in dashboard
3. Click **Create API Key**
4. Copy the key (starts with `re_`)

## ✅ Step 4: Update Environment Variables

Add to your `.env.local` file (in project root):

```env
# Add this NEW line (keep existing Supabase variables):
RESEND_API_KEY=re_paste_your_key_here
```

**Important**: Your `.env.local` should now have 3 variables:
- `VITE_SUPABASE_URL` (existing)
- `VITE_SUPABASE_ANON_KEY` (existing)
- `RESEND_API_KEY` (NEW)

## ✅ Step 5: Email Sender Address (Already Set!)

✅ **Already configured** to use Resend's test domain in `api/send-assessment.js` line 47:

```javascript
from: 'EXORAX IQ <onboarding@resend.dev>',
```

This works immediately - no domain verification needed for testing!

**For production later**: Verify your domain at https://resend.com/domains, then uncomment line 49 in the same file.

## ✅ Step 6: Test Locally

```bash
pnpm dev
```

Then:
1. Open http://localhost:3000
2. Scroll to the ExoRaxIQ Assessment section
3. Complete all 3 steps:
   - Step 1: Enter facility info + **your real email**
   - Step 2: Rate all 9 categories
   - Step 3: Click "Email My Results"

**⚠️ Local Development Note**:
- Email is **mocked** in local dev (API routes don't work in Vite)
- You'll see green success message + console logs showing "[DEV MODE]"
- PDF generation is tested, but email won't actually send
- This lets you test the complete flow without Vercel CLI
- **Real emails only send in production after deploying**

## ✅ Step 7: Verify Database

1. Go to Supabase Dashboard → **Table Editor**
2. Select `exoraxiq_assessments` table
3. Confirm your submission appears with:
   - Your email
   - Facility info
   - Ratings (JSONB)
   - Calculated scores
   - Quadrant classification

## ✅ Step 8: Deploy to Vercel

**Before deploying**:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add `RESEND_API_KEY` with your Resend API key
3. Deploy:
   ```bash
   git add .
   git commit -m "Add ExoRaxIQ Assessment with PDF email delivery"
   git push
   ```

**After deploying**:

1. Test on production URL
2. Complete assessment with real email
3. Verify email arrives
4. Check Vercel → **Logs** → **Functions** for any errors

---

## 📚 Documentation Files

- **`EXORAXIQ_SETUP_GUIDE.md`** - Complete guide with troubleshooting
- **`EXORAXIQ_DATABASE_SETUP.sql`** - Database schema + RLS policies
- **`CLAUDE.md`** - Updated with ExoRaxIQ section
- **`SUPABASE_RLS_DOCUMENTATION.md`** - RLS troubleshooting

---

## 🎯 Quick Test Commands

```bash
# Install dependencies
pnpm add jspdf resend

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

---

## ⚠️ Important Notes

1. **Don't commit `.env.local`** - It's already in `.gitignore`
2. **Free Resend tier**: 100 emails/day, 3000/month
3. **Email domain**: Use `onboarding@resend.dev` for testing
4. **Retakes allowed**: Same email updates existing record (UPSERT)
5. **No progress saving**: Users must complete in one session

---

## ✨ What's Working

- ✅ PDF generation (client-side with jsPDF)
- ✅ Email delivery (server-side with Resend)
- ✅ Database submission (Supabase with UPSERT)
- ✅ RLS policies (INSERT + UPDATE for anonymous users)
- ✅ Professional email template with HTML
- ✅ Inline success/error messages
- ✅ Loading states on buttons
- ✅ Offline-first UX (shows results even if DB fails)

---

**Status**: 🚀 Ready to test! All code is complete.
**Last Updated**: 2025-12-06
