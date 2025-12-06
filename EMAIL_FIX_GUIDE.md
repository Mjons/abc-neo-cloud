# Email API Fix Guide

## 🚨 CRITICAL DISCOVERY

**The 500 error is just ONE of TWO issues blocking email delivery:**

1. ✅ **FIXED**: `vercel.json` rewrite rule was blocking API routes
2. ⚠️ **ACTION REQUIRED**: Domain verification needed for production email sending

## Problem
Getting 500 Internal Server Error when trying to send assessment results via email.

## Root Causes

### Issue #1: API Route Not Reachable (FIXED)
The `vercel.json` rewrite rule was catching ALL requests (including `/api/*` routes) and sending them to `index.html`, preventing the serverless function from being reached.

### Issue #2: Domain Verification Required (ACTION NEEDED)
Your code uses `from: 'onboarding@resend.dev'` which **only works for development testing to YOUR OWN email**. According to official Resend documentation, you CANNOT send to customer emails from `onboarding@resend.dev`.

**You MUST verify your domain before emails will work in production.**

👉 **See [RESEND_DOMAIN_SETUP.md](./RESEND_DOMAIN_SETUP.md) for complete setup instructions.**

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

### ⚠️ IMPORTANT: Custom Domain Required for Production

**Current limitation:** Using `onboarding@resend.dev` which:
- ❌ Only works for sending to YOUR OWN Resend account email
- ❌ Cannot send to customer/user emails
- ❌ Will fail in production

**Official Resend Team (GitHub #454):**
> "for development you can send emails from `onboarding@resend.dev` but **to your own email only**, if you try sending from `resend.dev` to other emails you'll get an error"

**SOLUTION: Verify your domain** (e.g., `exorax.ai` or `mail.exorax.ai`)

👉 **Follow the complete guide: [RESEND_DOMAIN_SETUP.md](./RESEND_DOMAIN_SETUP.md)**

Quick summary:
1. Go to [resend.com/domains](https://resend.com/domains)
2. Add domain: `mail.exorax.ai` (recommended) or `exorax.ai`
3. Add 3 DNS records (SPF, DKIM, DMARC) to your DNS provider
4. Wait for verification (5-10 minutes)
5. Update `api/send-assessment.js` line 47:
   ```javascript
   from: 'EXORAX IQ <noreply@mail.exorax.ai>',
   ```
6. Commit, push, and redeploy

---

## Complete Fix Checklist

### Phase 1: Fix API Route (Immediate - 5 minutes)
- [ ] vercel.json updated with negative lookahead `(?!api)`
- [ ] RESEND_API_KEY added to Vercel environment variables
- [ ] Changes committed and pushed to GitHub
- [ ] Vercel deployment completed (shows "Ready")
- [ ] No 500 errors in browser console

### Phase 2: Verify Domain (Required for Production - 15-20 minutes)
- [ ] Domain added to Resend dashboard (`mail.exorax.ai` or `exorax.ai`)
- [ ] SPF TXT record added to DNS
- [ ] DKIM TXT record added to DNS
- [ ] DMARC TXT record added to DNS (optional but recommended)
- [ ] Domain shows "Verified" in Resend dashboard
- [ ] Updated `from` address in `api/send-assessment.js` to verified domain
- [ ] Code changes committed and deployed

### Phase 3: Production Testing
- [ ] Completed assessment on production site
- [ ] Clicked "Email My Results"
- [ ] Email received successfully (check inbox AND spam folder)
- [ ] PDF attachment opens correctly
- [ ] Sender shows as "EXORAX IQ <noreply@mail.exorax.ai>" (or your domain)
- [ ] Tested with different email providers (Gmail, Outlook, etc.)
- [ ] Checked Vercel function logs for success messages
- [ ] Verified in Resend dashboard that email was sent

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
