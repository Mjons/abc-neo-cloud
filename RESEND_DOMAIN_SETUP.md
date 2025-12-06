# Resend Domain Verification Setup Guide

## 🚨 CRITICAL: Why You MUST Verify a Domain

### Current Limitation

Your code currently uses:
```javascript
from: 'EXORAX IQ <onboarding@resend.dev>'
```

**This will ONLY work for:**
- ✅ Sending to YOUR OWN email address (the one you used to sign up for Resend)
- ✅ Testing during development

**This will FAIL for:**
- ❌ Sending to customer/user email addresses
- ❌ Production use
- ❌ Anyone else's email except your Resend account email

### Official Resend Team Statement

From Resend GitHub issue #454:
> "for development you can send emails from `onboarding@resend.dev` but **to your own email only**, if you try sending from `resend.dev` to other emails you'll get an error"

---

## Step-by-Step Domain Verification

### Step 1: Access Resend Dashboard

1. Go to [resend.com](https://resend.com) and log in
2. Navigate to **Domains** in the left sidebar
3. Click **Add Domain**

### Step 2: Add Your Domain

**Option A: Use Main Domain**
- Enter: `exorax.ai`
- This allows sending from: `noreply@exorax.ai`, `support@exorax.ai`, etc.

**Option B: Use Subdomain (Recommended)**
- Enter: `mail.exorax.ai` or `email.exorax.ai`
- Isolates email reputation from main website
- Best practice for production systems

**What I recommend for you:** Use `mail.exorax.ai`

### Step 3: Get DNS Records

After adding the domain, Resend will show you 3 DNS records to add:

1. **SPF Record** (TXT record)
   ```
   Type: TXT
   Name: @ (or mail if using subdomain)
   Value: v=spf1 include:amazonses.com ~all
   ```

2. **DKIM Record** (TXT record)
   ```
   Type: TXT
   Name: resend._domainkey (or resend._domainkey.mail)
   Value: [long string provided by Resend]
   ```

3. **DMARC Record** (TXT record) - Optional but recommended
   ```
   Type: TXT
   Name: _dmarc (or _dmarc.mail)
   Value: v=DMARC1; p=none; rua=mailto:dmarc@exorax.ai
   ```

### Step 4: Add DNS Records

**If using Cloudflare:**
1. Log in to Cloudflare dashboard
2. Select your domain: `exorax.ai`
3. Go to **DNS** → **Records**
4. Click **Add record**
5. For each record:
   - Select type: **TXT**
   - Enter **Name** (from Resend)
   - Paste **Content** (from Resend)
   - **Proxy status**: DNS only (grey cloud)
   - Click **Save**

**If using GoDaddy:**
1. Log in to GoDaddy account
2. Click **username** (top right) → **"My Products"**
3. Find `exorax.ai` → Click **three dots (...)** → **"Manage DNS"**
4. In the **Records** section, click **"Add"** button
5. For each record:
   - **SPF Record:**
     - Type: **TXT**
     - Name: **`@`** (root domain)
     - Value: `v=spf1 include:amazonses.com ~all`
     - TTL: **1 Hour** (default)
   - **DKIM Record:**
     - Type: **TXT**
     - Name: **`resend._domainkey`**
     - Value: (copy LONG string from Resend dashboard)
     - TTL: **1 Hour**
   - **DMARC Record:**
     - Type: **TXT**
     - Name: **`_dmarc`**
     - Value: `v=DMARC1; p=none; rua=mailto:dmarc@exorax.ai`
     - TTL: **1 Hour**
6. Click **"Save"** after each record

**Important for GoDaddy:**
- Make sure to copy the FULL DKIM value (200+ characters)
- No extra spaces before or after values
- DNS propagation can take 10-15 minutes

**If using Namecheap or other DNS provider:**
- Look for "DNS Management" or "Advanced DNS"
- Add TXT records as shown by Resend
- Similar process to GoDaddy

### Step 5: Verify Domain

1. Back in Resend dashboard
2. Click **Verify Domain** button
3. Wait 5-10 minutes for DNS propagation
4. Resend will automatically check DNS records
5. Status will change to "Verified" with green checkmark ✅

**Troubleshooting if verification fails:**
- Wait longer (DNS can take up to 24 hours, but usually 5-10 minutes)
- Check DNS records are entered correctly (no extra spaces)
- Use [DNS Checker](https://dnschecker.org) to verify propagation globally
- Make sure TXT records don't have quotes around the value (some DNS providers add them automatically - this is OK)

---

## Step 6: Update Your Code

Once domain is verified, update `api/send-assessment.js`:

**Change line 47 from:**
```javascript
from: 'EXORAX IQ <onboarding@resend.dev>',
```

**To:**
```javascript
from: 'EXORAX IQ <noreply@mail.exorax.ai>',
```

Or if you verified the main domain:
```javascript
from: 'EXORAX IQ <noreply@exorax.ai>',
```

**Important:** The email address doesn't need to actually exist - you don't need to create a mailbox for `noreply@mail.exorax.ai`. As long as the domain is verified, Resend can send from any address at that domain.

---

## Step 7: Deploy and Test

1. Commit the code change:
   ```bash
   git add api/send-assessment.js
   git commit -m "Update email sender to verified domain"
   git push
   ```

2. Wait for Vercel deployment to complete

3. Test by completing an assessment on production

4. Verify:
   - ✅ Email arrives in inbox
   - ✅ Shows sender as "EXORAX IQ <noreply@mail.exorax.ai>"
   - ✅ Not marked as spam
   - ✅ PDF attachment is included

---

## Understanding the DNS Records

### SPF (Sender Policy Framework)
- Tells email servers that Resend/Amazon SES is authorized to send email from your domain
- Prevents email spoofing
- Value: `v=spf1 include:amazonses.com ~all`

### DKIM (DomainKeys Identified Mail)
- Adds a digital signature to your emails
- Proves the email wasn't tampered with in transit
- Unique cryptographic key provided by Resend

### DMARC (Domain-based Message Authentication)
- Tells email servers what to do if SPF/DKIM checks fail
- `p=none` means "monitor but don't block" (good for starting)
- `rua=mailto:...` sends reports about email authentication

**All three together = Much better deliverability (emails won't go to spam)**

---

## Verification Checklist

Before deploying to production, ensure:

- [ ] Domain added to Resend dashboard
- [ ] SPF TXT record added to DNS
- [ ] DKIM TXT record added to DNS
- [ ] DMARC TXT record added to DNS (optional but recommended)
- [ ] Domain shows "Verified" status in Resend dashboard (green checkmark)
- [ ] Updated `from` address in `api/send-assessment.js` to use verified domain
- [ ] Code changes committed and pushed to GitHub
- [ ] Vercel deployment completed successfully
- [ ] Test email sent to a real customer email (not your own)
- [ ] Email received successfully with correct sender
- [ ] PDF attachment works
- [ ] Email not in spam folder

---

## Common Issues and Solutions

### Issue: "Domain not verified" error
**Solution:** Wait 10-15 minutes after adding DNS records. DNS propagation takes time.

### Issue: DKIM record too long
**Solution:** Some DNS providers require splitting long TXT records. Check provider documentation.

### Issue: Verification button stays "Pending"
**Solution:**
- Check for typos in DNS records
- Ensure no extra spaces in TXT record values
- Try verifying again after 1 hour
- Use `dig` or `nslookup` to check if records are live:
  ```bash
  dig TXT resend._domainkey.mail.exorax.ai
  ```

### Issue: Emails going to spam
**Solution:**
- Make sure all 3 records (SPF, DKIM, DMARC) are verified
- Wait 24-48 hours for email reputation to build
- Ask recipients to mark as "Not Spam"
- Consider warming up the domain (send small batches first)

### Issue: "from address does not match verified domain"
**Solution:** Make sure the email domain in `from` exactly matches the verified domain in Resend.

---

## Quick Reference: What Email Address to Use

| Verified Domain | Can Send From | Cannot Send From |
|----------------|---------------|------------------|
| `exorax.ai` | `noreply@exorax.ai`<br>`support@exorax.ai`<br>`hello@exorax.ai`<br>Any address `@exorax.ai` | `noreply@mail.exorax.ai` (subdomain not verified)<br>`test@gmail.com` (different domain) |
| `mail.exorax.ai` | `noreply@mail.exorax.ai`<br>`no-reply@mail.exorax.ai`<br>Any address `@mail.exorax.ai` | `noreply@exorax.ai` (parent domain not separately verified)<br>`info@email.exorax.ai` (different subdomain) |

**Best Practice:** Use `noreply@` for automated emails that don't need replies.

---

## Alternative: Verify Both Main and Subdomain

You can verify multiple domains:
1. `exorax.ai` - for marketing emails
2. `mail.exorax.ai` - for transactional emails (like assessments)

This gives flexibility and separates different types of email sending.

---

## Cost and Limits

**Resend Free Tier:**
- 3,000 emails per month
- 100 emails per day
- All features included
- Multiple domains allowed

**If you exceed limits:**
- Upgrade to Pro plan: $20/month for 50,000 emails
- Or Business plan for higher volume

For ExoRax IQ assessments, free tier should be sufficient unless you get 100+ assessments per day.

---

## Next Steps After Verification

1. Monitor email deliverability in Resend dashboard
2. Check bounce rates and spam reports
3. Consider implementing:
   - Email open tracking (Resend supports this)
   - Click tracking for links in emails
   - Webhook for delivery notifications
4. Review emails in spam folder to improve copy
5. Test emails across different providers (Gmail, Outlook, Yahoo)

---

**Created**: 2025-12-07
**Status**: ✅ Required for production use
**Estimated Time**: 15-20 minutes
**Priority**: CRITICAL - Email will not work without this
