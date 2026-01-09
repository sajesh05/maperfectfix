import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      toast.success(result.message);
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="w-full bg-white pt-16 sm:pt-20 md:pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mb-8 mt-8 sm:mb-8">
              Get in Touch
            </h2>

            <p className="text-blue-700 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
              Have a question or want to work together? Fill out the form and our
              team will get back to you as soon as possible.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-500">
                <FaPhoneAlt className="text-blue-800" />
                <span>+971 55 789 3945</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-500">
                <FaEnvelope className="text-blue-800" />
                <span>contact@maperfectfix.com</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-blue-500">
                <FaGlobe className="text-blue-800" />
                <span>www.maperfectfix.com</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-semibold text-blue-800 text-lg sm:text-xl mb-2 sm:mb-3">
                FOLLOW US
              </h3>
              <div className="flex justify-center md:justify-start gap-4 sm:gap-5 text-xl sm:text-2xl">
                <div className="text-blue-800"><FaFacebookF /></div>
                <div className="text-blue-800"><FaInstagram /></div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0a1f44] border border-white shadow-lg rounded-xl mt-8 p-4 sm:p-6 md:p-8">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white sm:gap-4">
                <FloatingInput label="First Name *" name="firstName" required />
                <FloatingInput label="Last Name" name="lastName" />
              </div>

              {/* EMAIL & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 text-white gap-3 text-whitesm:gap-4">
                <FloatingInput
                  label="Email Address *"
                  name="email"
                  type="email"
                  required
                />
                <FloatingInput label="Phone (optional)" name="phone" />
              </div>

              {/* MESSAGE */}
              <div className="text-white">
                <FloatingTextarea label="Your Message *" name="message" required />
              </div>

              {/* SUBMIT */}
              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="px-10 sm:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium text-white
                             bg-gradient-to-r from-blue-500 to-yellow-500
                             hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
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
                 focus:border-orange-500 outline-none py-2 sm:py-3 text-sm sm:text-base"
    />
    <label
      htmlFor={name}
      className="absolute left-0 -top-3 text-white text-sm
                 peer-placeholder-shown:top-2
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
      className="peer w-full border-b border-white bg-transparent
                 focus:border-orange-500 outline-none py-2 sm:py-3 text-sm sm:text-base resize-none"
    />
    <label
      htmlFor={name}
      className="absolute left-0 -top-3 text-white text-sm
                 peer-placeholder-shown:top-2
                 peer-focus:-top-3 peer-focus:text-xs
                 transition-all"
    >
      {label}
    </label>
  </div>
);

export default ContactForm;
