const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports.mailoptionsForMe = (req, res) => {
    return {
        from: {
            name: "Portfolio Notifier",
            address: process.env.EMAIL_USER || 'nitesh.saini.dev@gmail.com'
        },
        to: process.env.EMAIL_USER || 'nitesh.saini.dev@gmail.com',
        subject: `New Portfolio Inquiry from ${req.body.name}`,
        text: `You have received a new contact form submission from your portfolio website.

        Name: ${req.body.name}
        Email: ${req.body.email}
        Subject: ${req.body.subject}
        Message: ${req.body.message}`,

        html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #166534; margin: 0;">New Contact Form Submission</h2>
            <p style="color: #15803d; font-size: 14px; margin-top: 4px;">You have a new message from your portfolio.</p>
          </div>
          <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 100px; font-weight: 600;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${req.body.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #3b82f6;"><a href="mailto:${req.body.email}" style="color: #3b82f6; text-decoration: none;">${req.body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${req.body.subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827; white-space: pre-wrap;">${req.body.message}</td>
              </tr>
            </table>
          </div>
          <div style="text-align: center; margin-top: 24px;">
            <a href="mailto:${req.body.email}" style="background-color: #16a34a; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply to ${req.body.name}</a>
          </div>
        </div>
        `
    };
};

module.exports.mailoptionsForClient = (req, res) => {
    return {
        from: {
            name: "Nitesh Saini",
            address: process.env.EMAIL_USER || 'nitesh.saini.dev@gmail.com'
        },
        to: req.body.email,
        subject: `Thank you for reaching out, ${req.body.name}!`,
        text: `Hello ${req.body.name},
        Thank you for reaching out to me through my portfolio website! I have received your message regarding ${req.body.subject} and will get back to you as soon as possible (usually within 24 hours).
        
        Your Message:
        "${req.body.message}"
        
        Looking forward to connecting with you!
        Best regards,
        Nitesh Saini`,

        html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #111827; margin: 0;">Nitesh Saini</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 4px;">Software Developer</p>
          </div>
          <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2937; margin-top: 0; font-size: 20px;">Hello ${req.body.name},</h3>
            <p style="color: #4b5563; line-height: 1.6; font-size: 15px;">Thank you for reaching out to me through my portfolio website! I have received your message regarding <strong>${req.body.subject}</strong> and will get back to you as soon as possible (usually within 24 hours).</p>
            
            <div style="margin-top: 24px; padding: 16px; background-color: #f3f4f6; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <p style="color: #374151; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Your Message:</p>
              <p style="color: #4b5563; margin: 0; font-style: italic; font-size: 15px; white-space: pre-wrap;">"${req.body.message}"</p>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 15px; margin-top: 24px;">Looking forward to connecting with you!</p>
            <p style="color: #4b5563; line-height: 1.6; font-size: 15px; margin-bottom: 0;">Best regards,<br><strong style="color: #111827;">Nitesh Saini</strong></p>
          </div>
          <div style="text-align: center; margin-top: 24px; color: #9ca3af; font-size: 13px;">
            <p style="margin-bottom: 8px;">&copy; ${new Date().getFullYear()} Nitesh Saini. All rights reserved.</p>
            <p style="margin: 0;"><a href="https://portfolio-frontend-peach-one.vercel.app" style="color: #3b82f6; text-decoration: none;">Visit Portfolio</a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/nitesh-saini-b936b1257/" style="color: #3b82f6; text-decoration: none;">LinkedIn</a> &nbsp;|&nbsp; <a href="https://github.com/niteshsaini9568" style="color: #3b82f6; text-decoration: none;">GitHub</a></p>
          </div>
        </div>
        `
    };
};
