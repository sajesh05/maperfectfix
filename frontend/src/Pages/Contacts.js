import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      alert(result.message);
      form.reset();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to submit form.");
    }
  };

  return (
    <section className="w-full bg-orange-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>

            <p className="text-blue-600 max-w-md mx-auto md:mx-0 leading-relaxed">
              Have a question or want to work together? Fill out the form and our
              team will get back to you as soon as possible.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3 text-blue-500">
                <FaPhoneAlt className="text-blue-800" />
                <span>+971 55 789 3945</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-blue-500">
                <FaEnvelope className="text-blue-800" />
                <span>ashokbekalfort@yahoo.com</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-blue-500">
                <FaGlobe className="text-blue-800" />
                <span>www.forever.com</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-10">
              <h3 className="font-semibold text-blue-800 text-lg mb-3">
                FOLLOW US
              </h3>
              <div className="flex justify-center md:justify-start gap-5 text-xl">
                <a
                  href="https://facebook.com"
                  className="text-blue-800 hover:text-blue-400 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-blue-800 hover:text-pink-600 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-orange-200 shadow-lg rounded-xl p-6 sm:p-8">
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput label="First Name *" name="firstName" required />
                <FloatingInput label="Last Name" name="lastName" />
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  required
                />
                <FloatingInput label="Phone (optional)" name="phone" />
              </div>

              {/* MESSAGE */}
              <FloatingTextarea label="Your Message *" name="message" required />

              {/* SUBMIT */}
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="px-12 py-3 rounded-full text-sm font-medium text-white
                             bg-gradient-to-r from-orange-400 to-pink-500
                             hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* FLOATING INPUT */
const FloatingInput = ({ label, name, type = "text", required }) => (
  <div className="relative">
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      placeholder=" "
      className="peer w-full border-b border-gray-300 bg-transparent
                 focus:border-orange-500 outline-none py-3 text-sm"
    />
    <label
      htmlFor={name}
      className="absolute left-0 -top-3 text-gray-500 text-sm
                 peer-placeholder-shown:top-3
                 peer-focus:-top-3 peer-focus:text-xs
                 transition-all"
    >
      {label}
    </label>
  </div>
);

/* FLOATING TEXTAREA */
const FloatingTextarea = ({ label, name, required }) => (
  <div className="relative">
    <textarea
      id={name}
      name={name}
      rows="4"
      required={required}
      placeholder=" "
      className="peer w-full border-b border-gray-300 bg-transparent
                 focus:border-orange-500 outline-none py-3 text-sm resize-none"
    />
    <label
      htmlFor={name}
      className="absolute left-0 -top-3 text-gray-500 text-sm
                 peer-placeholder-shown:top-3
                 peer-focus:-top-3 peer-focus:text-xs
                 transition-all"
    >
      {label}
    </label>
  </div>
);

export default ContactForm;
