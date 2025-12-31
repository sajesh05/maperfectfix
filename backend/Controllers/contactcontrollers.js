

import nodemailer from "nodemailer";
import Contact from "../Models/contactmodels.js";




// Configure Nodemailer

// Helper function to validate email
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // -------------------
  // VALIDATION
  // -------------------
  if (!firstName || !email || !message) {
    return res.status(400).json({ message: "First Name, Email, and Message are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.DEV_EMAIL,
    pass: process.env.DEV_EMAIL_PASSWORD,
  },
});

    // Save to MongoDB
    const contact = new Contact({ firstName, lastName, email, phone, message });
    await contact.save();

    // Send email to developer
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.DEV_EMAIL}>`,
      to: process.env.DEV_EMAIL,
      subject: "New Contact Form Submission",
      text: `New message from ${firstName} ${lastName || ""} (${email}):\n\n${message}\nPhone: ${phone || "N/A"}`,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"MA Perfect Fix Technical" <${process.env.DEV_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${firstName},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nWe will get back to you soon.\n\n- Team`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error. Please try again later." });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error. Could not fetch contacts." });
  }
};
