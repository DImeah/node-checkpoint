import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "imeahdornu@gmail.com", // Your email address
    pass: "password", // Your email password or an app-specific password
  },
});

// Email content
const mailOptions = {
  from: "sender_email@gmail.com",
  to: "imeahdornu@gmail.com", // Send the email to yourself
  subject: "Test Email",
  text: "This is a test email from Node.js using nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
