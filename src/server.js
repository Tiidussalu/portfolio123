const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // This will allow CORS for all domains. Adjust if needed.

// Create a Nodemailer transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "silverreinart01@gmail.com", // Your Gmail address
    pass: "tslp pdlw dogj edul", // Your Gmail app password or regular password
  },
});

// POST route to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email, // Sender's email
    to: "nite9974@gmail.com", // Destination email
    subject: `Message from ${name}`, // Subject of the email
    text: message, // Body of the email
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
