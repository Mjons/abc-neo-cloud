import { Resend } from 'resend';

/**
 * Vercel Serverless Function to send ExoRaxIQ assessment results via email
 *
 * POST /api/send-assessment
 * Body: { email, pdfBase64, facilityName, score, quadrant }
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check for Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  try {
    const { email, pdfBase64, facilityName, score, quadrant } = req.body;

    // Validate required fields
    if (!email || !pdfBase64 || !facilityName || !score || !quadrant) {
      return res.status(400).json({
        error: 'Missing required fields: email, pdfBase64, facilityName, score, quadrant'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Convert base64 to buffer for attachment
    const pdfBuffer = Buffer.from(pdfBase64, 'base64');

    // Send email with PDF attachment
    const { data, error } = await resend.emails.send({
      // For testing: Use Resend's test domain (no verification needed)
      from: 'EXORAX IQ <onboarding@resend.dev>',
      // For production: Verify your domain at https://resend.com/domains first, then use:
      // from: 'EXORAX IQ <noreply@exorax.com>',
      to: [email],
      subject: `Your EXORAX IQ Assessment Results - ${facilityName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">EXORAX IQ</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 5px 0 0 0; font-size: 14px;">Data Center Readiness Assessment</p>
            </div>

            <div style="background: #f9fafb; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
              <h2 style="margin-top: 0; color: #111827;">Assessment Complete</h2>
              <p style="color: #4b5563; margin-bottom: 20px;">
                Thank you for completing the EXORAX IQ assessment for <strong>${facilityName}</strong>.
              </p>

              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                <h3 style="margin-top: 0; color: #10b981; font-size: 18px;">Your Results</h3>
                <p style="margin: 10px 0;">
                  <strong style="font-size: 32px; color: #111827;">${score}</strong>
                  <span style="color: #6b7280; font-size: 14px; margin-left: 10px;">${quadrant}</span>
                </p>
              </div>
            </div>

            <div style="background: #fff; padding: 25px; border-radius: 10px; border: 1px solid #e5e7eb; margin-bottom: 25px;">
              <h3 style="margin-top: 0; color: #111827;">What's Next?</h3>
              <ul style="color: #4b5563; padding-left: 20px;">
                <li style="margin-bottom: 10px;">Review your detailed PDF report attached to this email</li>
                <li style="margin-bottom: 10px;">Identify areas for infrastructure optimization</li>
                <li style="margin-bottom: 10px;">Contact our team to discuss deployment options</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://exorax.com" style="display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                Visit EXORAX
              </a>
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              <p>This email was sent to ${email} because you completed an EXORAX IQ assessment.</p>
              <p style="margin-top: 10px;">
                &copy; ${new Date().getFullYear()} EXORAX. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: `EXORAX_IQ_Assessment_${facilityName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }

    return res.status(200).json({
      success: true,
      message: 'Assessment results sent successfully',
      emailId: data?.id
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
}
