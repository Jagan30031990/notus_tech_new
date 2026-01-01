import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definitions for quote form data
interface QuoteFormData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

// Format budget value for display
function formatBudget(budget: string): string {
  const budgetMap: { [key: string]: string } = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-50k': '$15,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    'over-100k': 'Over $100,000',
  };
  return budgetMap[budget] || budget;
}

// Format timeline value for display
function formatTimeline(timeline: string): string {
  const timelineMap: { [key: string]: string } = {
    'asap': 'ASAP (Rush Project)',
    '1-month': 'Within 1 Month',
    '2-3-months': '2-3 Months',
    '3-6-months': '3-6 Months',
    '6-months-plus': '6+ Months',
    'flexible': 'Flexible Timeline',
  };
  return timelineMap[timeline] || timeline;
}

// Format project type for display
function formatProjectType(projectType: string): string {
  const typeMap: { [key: string]: string } = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App Development',
    'ui-ux-design': 'UI/UX Design',
    'ecommerce': 'E-commerce Solutions',
    'api-development': 'API Development',
    'cloud-solutions': 'Cloud Solutions',
    'ai-analytics': 'AI & Analytics',
    'digital-marketing': 'Digital Marketing',
    'branding': 'Branding Services',
    'creative-services': 'Creative Services',
    'other': 'Other',
  };
  return typeMap[projectType] || projectType;
}

// Validate form data
function validateFormData(data: Partial<QuoteFormData>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  if (!data.projectType) {
    errors.push('Please select a project type');
  }

  if (!data.budget) {
    errors.push('Please select a budget range');
  }

  if (!data.timeline) {
    errors.push('Please select a timeline');
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.push('Project description must be at least 10 characters long');
  }

  if (data.description && data.description.length > 500) {
    errors.push('Project description must not exceed 500 characters');
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
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    }),
    fromEmail: smtpFromEmail,
    recipientEmail,
  };
}

// POST handler for quote form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const formData: QuoteFormData = {
      fullName: body.fullName || '',
      email: body.email || '',
      company: body.company || '',
      phone: body.phone || '',
      projectType: body.projectType || '',
      budget: body.budget || '',
      timeline: body.timeline || '',
      description: body.description || '',
    };

    // Validate form data
    const validation = validateFormData(formData);
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
    const sanitizedData: QuoteFormData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      company: formData.company ? sanitizeInput(formData.company) : '',
      phone: formData.phone ? sanitizeInput(formData.phone) : '',
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      description: sanitizeInput(formData.description),
    };

    // Create email transporter
    const { transporter, fromEmail, recipientEmail } = createTransporter();

    // Prepare email content
    const emailSubject = `New Quote Request from ${sanitizedData.fullName} - ${formatProjectType(sanitizedData.projectType)}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 25px; border-radius: 0 0 8px 8px; }
            .section { background: white; padding: 20px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 8px; display: block; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { color: #333; font-size: 16px; margin-bottom: 15px; }
            .highlight { background: #f0f4ff; padding: 15px; border-radius: 6px; margin: 15px 0; }
            .footer { margin-top: 25px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #666; text-align: center; }
            .badge { display: inline-block; background: #667eea; color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-right: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; font-size: 24px;">New Quote Request</h2>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Project Quote Inquiry</p>
            </div>
            <div class="content">
              <div class="section">
                <span class="label">Contact Information</span>
                <div class="value">
                  <strong>Name:</strong> ${sanitizedData.fullName}<br>
                  <strong>Email:</strong> ${sanitizedData.email}<br>
                  ${sanitizedData.company ? `<strong>Company:</strong> ${sanitizedData.company}<br>` : ''}
                  ${sanitizedData.phone ? `<strong>Phone:</strong> ${sanitizedData.phone}` : ''}
                </div>
              </div>

              <div class="section">
                <span class="label">Project Details</span>
                <div class="highlight">
                  <div class="value">
                    <strong>Project Type:</strong> <span class="badge">${formatProjectType(sanitizedData.projectType)}</span><br><br>
                    <strong>Budget Range:</strong> ${formatBudget(sanitizedData.budget)}<br><br>
                    <strong>Timeline:</strong> ${formatTimeline(sanitizedData.timeline)}
                  </div>
                </div>
              </div>

              <div class="section">
                <span class="label">Project Description</span>
                <div class="value" style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${sanitizedData.description}</div>
              </div>
              
              <div class="footer">
                <p><strong>This quote request was submitted from your website.</strong></p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${sanitizedData.email}" style="color: #667eea; text-decoration: none;">Reply to ${sanitizedData.email}</a>
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Quote Request

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${sanitizedData.fullName}
Email: ${sanitizedData.email}
${sanitizedData.company ? `Company: ${sanitizedData.company}` : ''}
${sanitizedData.phone ? `Phone: ${sanitizedData.phone}` : ''}

PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Type: ${formatProjectType(sanitizedData.projectType)}
Budget Range: ${formatBudget(sanitizedData.budget)}
Timeline: ${formatTimeline(sanitizedData.timeline)}

PROJECT DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${sanitizedData.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted at: ${new Date().toLocaleString()}
Reply to: ${sanitizedData.email}
    `.trim();

    // Send email
    const mailOptions = {
      from: `"Website Quote Form" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: sanitizedData.email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your quote request has been submitted successfully. We will respond within 24 hours!',
      },
      { status: 200 }
    );
  } catch (error) {
    // Log detailed error for debugging (only in production, console.error is kept)
    console.error('Error sending quote request email:', error);
    
    // Log specific error details for troubleshooting
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Check for SMTP configuration issues
      if (error.message.includes('SMTP credentials') || error.message.includes('SMTP_USER') || error.message.includes('SMTP_PASSWORD')) {
        console.error('SMTP Configuration Error: Missing SMTP credentials in environment variables');
      }
    }

    // Return user-friendly error message
    let errorMessage = 'An error occurred while submitting your quote request. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('SMTP credentials') || error.message.includes('SMTP_USER') || error.message.includes('SMTP_PASSWORD')) {
        errorMessage = 'Email service is not configured. Please contact the administrator.';
      } else if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Connection timeout. Please try again later.';
      } else if (error.message.includes('authentication') || error.message.includes('Invalid login') || error.message.includes('535')) {
        errorMessage = 'Email authentication failed. Please contact the administrator.';
      } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ENOTFOUND')) {
        errorMessage = 'Unable to connect to email server. Please try again later.';
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

