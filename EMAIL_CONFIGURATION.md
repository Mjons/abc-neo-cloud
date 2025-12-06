# Email Configuration Guide

## Current Configuration (Ready to Use!)

✅ **File**: `api/send-assessment.js` (line 47)

✅ **Current Setting**:
```javascript
from: 'EXORAX IQ <onboarding@resend.dev>',
```

✅ **Status**: Ready for testing - no domain verification needed!

---

## How Email Sending Works

### Development/Testing (Current Setup)
- **Domain**: `onboarding@resend.dev` (Resend's test domain)
- **Verification**: Not required ✅
- **Limitations**: None for testing
- **Email Delivery**: Works immediately after adding `RESEND_API_KEY` to `.env.local`

### Production (When You're Ready to Launch)
- **Domain**: Your custom domain (e.g., `noreply@exorax.com`)
- **Verification**: Required in Resend Dashboard
- **Steps**:
  1. Go to https://resend.com/domains
  2. Click "Add Domain"
  3. Add your domain (e.g., `exorax.com`)
  4. Add DNS records to your domain provider
  5. Wait for verification (usually a few minutes)
  6. Update `api/send-assessment.js` line 49 (uncomment it)

---

## Where to Find the Email Sender Setting

**File Location**: `api/send-assessment.js`

**Line Numbers**: 46-50

**Code**:
```javascript
// Send email with PDF attachment
const { data, error } = await resend.emails.send({
  // For testing: Use Resend's test domain (no verification needed)
  from: 'EXORAX IQ <onboarding@resend.dev>',  // ← LINE 47 (Active)
  // For production: Verify your domain at https://resend.com/domains first, then use:
  // from: 'EXORAX IQ <noreply@exorax.com>',  // ← LINE 49 (Commented out)
  to: [email],
  subject: `Your EXORAX IQ Assessment Results - ${facilityName}`,
```

---

## How to Change for Production

When you're ready to use your own domain:

1. **Verify your domain in Resend** (https://resend.com/domains)

2. **Edit** `api/send-assessment.js` line 47-49:

   **Change from** (testing):
   ```javascript
   from: 'EXORAX IQ <onboarding@resend.dev>',
   // from: 'EXORAX IQ <noreply@exorax.com>',
   ```

   **Change to** (production):
   ```javascript
   // from: 'EXORAX IQ <onboarding@resend.dev>',
   from: 'EXORAX IQ <noreply@exorax.com>',
   ```

3. **Deploy to Vercel** - changes take effect immediately

---

## Email Template Customization

The email content is also in `api/send-assessment.js` (lines 52-120).

You can customize:
- Email subject (line 51)
- HTML content (lines 52-120)
- Attachment filename (line 123)

---

## Testing Email Delivery

### Test 1: Local Development
```bash
pnpm dev
```
Complete assessment with your real email → Check inbox

### Test 2: Production
After deploying to Vercel → Complete assessment → Check inbox

### Common Issues

**Issue**: "Failed to send email"
- **Check**: Is `RESEND_API_KEY` in `.env.local` (local) or Vercel env vars (production)?
- **Check**: Did you restart dev server after adding the key?

**Issue**: Email goes to spam
- **For testing**: Normal with `onboarding@resend.dev` - check spam folder
- **For production**: Use verified custom domain to improve deliverability

**Issue**: "Domain not verified"
- **Cause**: Trying to use custom domain without verification
- **Fix**: Either use `onboarding@resend.dev` OR verify your domain first

---

## Documentation

This setting is also documented in:
- `SETUP_CHECKLIST.md` (Step 5)
- `EXORAXIQ_SETUP_GUIDE.md` (Section 3)
- `CLAUDE.md` (Email Configuration section)

---

**Last Updated**: 2025-12-06
**Current Status**: ✅ Configured for testing with `onboarding@resend.dev`
