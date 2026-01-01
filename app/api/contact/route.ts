import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);
const resolve4 = promisify(dns.resolve4);

// Type definitions for form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate email domain by checking DNS records
async function isValidEmailDomain(email: string): Promise<boolean> {
  try {
    const domain = email.split('@')[1];
    if (!domain) return false;

    // Check for common invalid/test domains
    const invalidDomains = ['example.com', 'test.com', 'invalid.com', 'domain.com', 'test.test', 'gggg.com'];
    if (invalidDomains.includes(domain.toLowerCase())) {
      return false;
    }

    // Validate domain format first (must have valid TLD structure)
    const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(domain)) {
      return false;
    }

    // Try to resolve MX records first (preferred for email)
    let hasValidRecords = false;
    try {
      const mxRecords = await resolveMx(domain);
      if (mxRecords && mxRecords.length > 0) {
        hasValidRecords = true;
      }
    } catch (mxError) {
      // MX lookup failed, will try A record
    }

    // If MX records found, domain is valid
    if (hasValidRecords) {
      return true;
    }

    // If no MX records, try A record as fallback
    try {
      const aRecords = await resolve4(domain);
      if (aRecords && aRecords.length > 0) {
        return true;
      }
    } catch (aError) {
      // A record lookup also failed
    }

    // Both MX and A record lookups failed - domain doesn't exist
    console.warn(`Email domain validation failed: ${domain} does not have valid DNS records`);
    return false;
  } catch (error) {
    console.error('Error validating email domain:', error);
    // If there's an unexpected error, reject the domain to be safe
    return false;
  }
}

// Validate phone number (exactly 10 digits)
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length === 10;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Validate form data
async function validateFormData(data: Partial<ContactFormData>): Promise<{ isValid: boolean; errors: string[] }> {
  const errors: string[] = [];

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters long');
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters long');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  } else {
    // Validate email domain if email format is valid
    const isDomainValid = await isValidEmailDomain(data.email);
    if (!isDomainValid) {
      errors.push('Please provide a valid email address with a valid domain');
    }
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Phone number must be exactly 10 digits');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (data.message && data.message.length > 500) {
    errors.push('Message must not exceed 500 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Create email transporter with GoDaddy SMTP settings
function createTransporter() {
  const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const smtpFromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
  const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser;

  if (!smtpUser || !smtpPassword) {
    throw new Error('SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.');
  }

  return {
    transporter: nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // Add timeout to prevent hanging requests
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    }),
    fromEmail: smtpFromEmail,
    recipientEmail,
  };
}

// POST handler for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const formData: ContactFormData = {
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      email: body.email || '',
      phone: body.phone || '',
      message: body.message || '',
    };

    // Validate form data
    const validation = await validateFormData(formData);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData: ContactFormData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      email: sanitizeInput(formData.email),
      phone: formData.phone ? sanitizeInput(formData.phone) : '',
      message: sanitizeInput(formData.message),
    };

    // Create email transporter
    const { transporter, fromEmail, recipientEmail } = createTransporter();

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #667eea; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${sanitizedData.firstName} ${sanitizedData.lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${sanitizedData.email}</div>
              </div>
              
              ${sanitizedData.phone ? `
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${sanitizedData.phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="white-space: pre-wrap;">${sanitizedData.message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from your website contact form.</p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Email: ${sanitizedData.email}
${sanitizedData.phone ? `Phone: ${sanitizedData.phone}` : ''}

Message:
${sanitizedData.message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email
    const mailOptions = {
      from: `"Website Contact Form" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: sanitizedData.email, // Allow direct reply to the sender
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Return user-friendly error message
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('SMTP credentials')) {
        errorMessage = 'Email service is not configured. Please contact the administrator.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Connection timeout. Please try again later.';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Please contact the administrator.';
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed. Please use POST.' },
    { status: 405 }
  );
}

