import nodemailer from "nodemailer";
import Contact from "../Models/ServiceModels.js";

// Configure Nodemailer

// Helper function to validate email
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const submitServiceForm = async (req, res) => {
  const { name, email, phone, service } = req.body;

  // -------------------
  // VALIDATION
  // -------------------
  if (!name || !email || !phone || !service) {
    return res.status(400).json({ message: "Name, Email, Phone, and Service are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.DEV_EMAIL,
    pass: process.env.DEV_EMAIL_PASSWORD,
  },
});


    // Save to MongoDB
    const serviceRequest = new Contact({ name, email, phone, service });
    await serviceRequest.save();

    // Send email to developer
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.DEV_EMAIL}>`,
      to: process.env.DEV_EMAIL,
      subject: "New Service Request Submission",
      text: `New message from ${name} (${email}):\n\n${service}\nPhone: ${phone || "N/A"}`,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"MA Perfect Fix" <${process.env.DEV_EMAIL}>`,
      to: email,
      subject: "Thank you for informing us!",
      text: `Hi ${name},\n\nThank you for reaching out! We received your message:\n"${service}"\n\nWe will get back to you soon.\n\n- Team`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error. Please try again later." });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error. Could not fetch services." });
  }
};
