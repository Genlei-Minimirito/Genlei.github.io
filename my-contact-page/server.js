require('dotenv').config(); // Load environment variables at the very top

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Request Body:', req.body);

  // Verify environment variables
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS is defined:', process.env.EMAIL_PASS ? 'Yes' : 'No');

  // Email configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Secure TLS port
    secure: false, // STARTTLS will upgrade the connection
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    requireTLS: true, // Enforce TLS
  });
  
  // Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP connection error:', error);
      return res.status(500).send('Server error: Unable to send email.');
    } else {
      console.log('SMTP server is ready to send emails');

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Message from ${name}`,
        text: message,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send('Error sending message.');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent successfully!');
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
