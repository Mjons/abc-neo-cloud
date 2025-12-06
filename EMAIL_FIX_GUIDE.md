# Email API Fix Guide

## Problem
Getting 500 Internal Server Error when trying to send assessment results via email.

## Root Cause
The `vercel.json` rewrite rule was catching ALL requests (including `/api/*` routes) and sending them to `index.html`, preventing the serverless function from being reached.

## What Was Fixed

### vercel.json
Changed the rewrite rule from:
```json
"source": "/(.*)"
```

To:
```json
"source": "/((?!api).*)"
```

This regex uses a negative lookahead `(?!api)` to exclude any paths starting with `api/` from the rewrite rule.

**Result**: API routes now work correctly while still maintaining SPA routing for other paths.

---

## Deployment Steps

### Step 1: Verify Resend API Key in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **ExoRax** project
3. Go to **Settings** → **Environment Variables**
4. Verify you have: `RESEND_API_KEY`
5. The value should start with `re_` (example: `re_123abc...`)

**If missing or incorrect:**
1. Click **Add New** variable
2. Key: `RESEND_API_KEY`
3. Value: Your Resend API key (get it from [resend.com/api-keys](https://resend.com/api-keys))
4. Environments: Check all (Production, Preview, Development)
5. Click **Save**

### Step 2: Get Your Resend API Key (if you don't have it)

1. Go to [resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Name it "ExoRax Production"
6. Copy the key (starts with `re_`)
7. **IMPORTANT**: Save it somewhere safe - you can only see it once!

### Step 3: Deploy the Fix

Since `vercel.json` was modified, you need to redeploy:

```bash
git add vercel.json
git commit -m "Fix API routes by excluding them from SPA rewrites"
git push
```

Vercel will automatically deploy when you push to your main branch.

### Step 4: Wait for Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → Your Project
2. Click on **Deployments**
3. Wait for the latest deployment to show **Ready** (usually 1-2 minutes)
4. Note: Environment variables take effect ONLY after a new deployment

### Step 5: Test Email Sending

1. Go to https://www.exorax.ai
2. Navigate to ExoRaxIQ Assessment
3. Complete the assessment
4. Click "Email My Results"
5. Check your email inbox (including spam folder)

**Expected behavior:**
- ✅ Button shows "Sending..."
- ✅ Green success message appears
- ✅ Email arrives with PDF attachment

---

## Troubleshooting

### Still getting 500 error after deploy?

**Check Vercel Function Logs:**
1. Vercel Dashboard → Your Project → **Deployments**
2. Click on the latest deployment
3. Go to **Functions** tab
4. Click on `/api/send-assessment`
5. Check the logs for specific error messages

**Common error messages:**

| Error in Logs | Solution |
|---------------|----------|
| "RESEND_API_KEY is not configured" | Add env var in Vercel Settings → Environment Variables |
| "Invalid API key" | Check your Resend API key is correct (starts with `re_`) |
| "Domain not verified" | Change `from` address in `api/send-assessment.js` to `onboarding@resend.dev` |
| "Rate limit exceeded" | You've hit Resend's free tier limit (100 emails/day) |

### Email not arriving?

1. **Check spam folder** - First time emails often go to spam
2. **Verify sender domain**: Should be `onboarding@resend.dev` for testing
3. **Check Resend Dashboard**:
   - Go to [resend.com/emails](https://resend.com/emails)
   - See if email was sent successfully
   - Check delivery status

### Want to use custom domain for emails?

Currently using: `onboarding@resend.dev` (Resend's test domain - no verification needed)

To use your own domain (e.g., `noreply@exorax.ai`):

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Enter `exorax.ai`
4. Add the DNS records shown (SPF, DKIM, etc.) to your domain's DNS settings
5. Wait for verification (usually 5-10 minutes)
6. Update `api/send-assessment.js` line 47:
   ```javascript
   from: 'EXORAX IQ <noreply@exorax.ai>',
   ```
7. Redeploy

---

## Verification Checklist

After deploying the fix:

- [ ] vercel.json updated with negative lookahead `(?!api)`
- [ ] RESEND_API_KEY added to Vercel environment variables
- [ ] Latest deployment shows "Ready" in Vercel dashboard
- [ ] Tested assessment completion and email sending
- [ ] Received email with PDF attachment
- [ ] No 500 errors in browser console
- [ ] Vercel function logs show successful email sends

---

## How It Works Now

### Before Fix
```
User clicks "Email Results"
  ↓
Browser: POST https://exorax.ai/api/send-assessment
  ↓
Vercel: "/(.*)" rewrite rule matches
  ↓
Vercel: Serves index.html instead of running API function
  ↓
❌ 404 or 500 error (API never runs)
```

### After Fix
```
User clicks "Email Results"
  ↓
Browser: POST https://exorax.ai/api/send-assessment
  ↓
Vercel: "/((?!api).*)" rewrite rule does NOT match (path starts with 'api')
  ↓
Vercel: Runs /api/send-assessment.js serverless function
  ↓
Function: Calls Resend API with PDF attachment
  ↓
✅ Email sent successfully
```

---

## Testing in Development

If you want to test locally:

```bash
# Install Vercel CLI
npm i -g vercel

# Add env var to local .env
echo "RESEND_API_KEY=re_your_key_here" >> .env.local

# Run Vercel dev server (not pnpm dev)
vercel dev
```

This runs your API functions locally with environment variables.

---

**Created**: 2025-12-07
**Status**: ✅ Ready to deploy
**Issue**: Email API 500 error
**Fix**: Exclude API routes from SPA rewrites in vercel.json
