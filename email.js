const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending function
const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      ...mailOptions
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error);
  }
};

module.exports = { sendEmail };