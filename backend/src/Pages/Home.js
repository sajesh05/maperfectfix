import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* Background Images */
import bg1 from "../image/burj-khalifa-4922317_1280.jpg";
import bg2 from "../image/dubai-6331310_1280.jpg";
import bg3 from "../image/address4044183_1280.jpg";
import solution from "../image/Solutions_You_Can_Trust-removebg-preview.png";
import dubai from "../image/HH Al saud.png";

import img from "../image/electricl.png";
import img1 from "../image/HAVS.png";
import img2 from "../image/smart homen.jpg";
import img5 from "../image/ANNUAL MAINTANACEn.jpg";

/* Slideshow images array */
const bgImages = [bg1, bg2, bg3];

/* Expertise Card */
const ExpertiseCard = ({ title, text, bg }) => (
  <div data-aos="fade-up" className={`${bg} border border-blue-100 px-8 py-14 text-center`}>
    <h3 className="text-xl font-semibold text-blue-100 mb-4">{title}</h3>
    <p className="text-blue-50 text-sm leading-relaxed">{text}</p>
  </div>
);

const HomeSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  /* Background slideshow effect */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const homeServices = [
    {
      title: "Mechanical, Electrical & Plumbing",
      description: "Complete MEP solutions for luxury properties.",
      image: img,
    },
    {
      title: "HVAC Systems",
      description: "Advanced heating, ventilation & air conditioning.",
      image: img1,
    },
    {
      title: "Smart Home Automation",
      description: "Modern smart home & automation systems.",
      image: img2,
    },
    {
      title: "Annual Maintenance Contracts",
      description: "Reliable AMC plans for worry-free maintenance.",
      image: img5,
    },
  ];

  return (
    <section className="w-full h-full bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
       <div className="relative h-screen">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full opacity-25 -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full opacity-20 translate-x-20 translate-y-20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

           <h1  data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-100 leading-tight">
            Professional Maintenance Solutions
            <span className="block text-yellow-300 mt-2">
              For Luxury Properties
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-blue-50 max-w-3xl mt-6 text-sm sm:text-base md:text-lg"
          >
            Professional technical maintenance services tailored for villas,
            premium apartments, offices<br/> And commercial properties across UAE,
            delivered with reliability and expert care.
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => navigate("/services")}
            className="mt-8 px-8 py-3 rounded-full bg-yellow-400 text-blue-900 text-lg hover:bg-yellow-500 transition"
          >
            Book Service Now
          </button>
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div data-aos="fade-up">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Who We Are</h2>
          <p className="text-blue-700 text-lg leading-relaxed mb-6">
            MA Perfect Fix Technical Services LLC is a UAE-based company specializing in property maintenance and technical solutions. Our mission is to maintain the highest standards in every project we undertake.
          </p>
           <ul className="text-blue-600 space-y-2 font-medium">
            <li>✔ High-quality workmanship</li>
            <li>✔ Certified technicians</li>
            <li>✔ Preventive maintenance</li>
            <li>✔ Transparent service</li>
          </ul>
          <div className="mt-8">
            <button
              data-aos="fade-up"
              onClick={() => navigate("/about")}
              className="inline-block px-7 py-3 bg-yellow-300 border border-orange-600 rounded-full text-sm text-blue-700 hover:bg-yellow-600 hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">What We Do</h2>
          <p className="text-blue-700 text-lg leading-relaxed mb-20">
            We provide professional technical maintenance services covering MEP,
            HVAC systems, smart home automation, interior & exterior works,
            pools, safety systems, and utilities.
          </p>
        </div>
      </div>

      {/* ================= INSPIRED & DRIVEN ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-10">
          Inspired by Leadership <br /> Driven by Excellence
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
        <img
          data-aos="fade-up"
          src={dubai}
          alt="hi"
          className=" block w-48 sm:w-56 md:w-64 lg:w-72 ml-0 lg:ml-10 rounded-lg"
        />
        <div data-aos="fade-up" className="flex flex-col lg:mx-20">
          <p className="text-blue-700 text-lg leading-relaxed">
            We are inspired by visionary leadership, integrity, and excellence—values long associated with the distinguished legacy of HH Prince Turki Abdulaziz Faisal Al Saud.
          </p>
          <p className="text-blue-700 text-lg leading-relaxed mb-20">
            These principles guide our commitment to delivering premium technical services with professionalism, precision, and trust.
          </p>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {homeServices.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate("/services")}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="cursor-pointer bg-[#0a1f44] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6 bg-[#0a1f44] text-center">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">{service.title}</h3>
              <p className="text-blue-50 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-20" data-aos="fade-up">
        <button
          onClick={() => navigate("/services")}
          className="px-9 py-3 rounded-full bg-yellow-400 text-[#0a1f44] font-semibold hover:bg-yellow-500 hover:text-white transition"
        >
          View All Services
        </button>
      </div>

      {/* ================= WHY US ================= */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-blue-900 mb-4">WHY US</h2>
        <p className="text-blue-700 text-lg max-w-2xl mx-auto">
          White-glove service, end-to-end technical expertise, and preventive
          asset protection tailored for high-end properties.
        </p>
      </div>

      <div className="max-w-7xl  mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseCard
          title="WHITE GLOVE SERVICE"
          text="Discreet, clean, and minimally disruptive maintenance for luxury properties."
          bg="bg-[#0a1f44]"
        />
        <ExpertiseCard
          title="END-TO-END EXPERTISE"
          text="MEP, HVAC, smart systems, and specialist maintenance under one roof."
          bg="bg-[#0a1f44]"
        />
        <ExpertiseCard
          title="PREVENTIVE PROTECTION"
          text="Proactive inspections to reduce failures and preserve asset value."
          bg="bg-[#0a1f44]"
        />
      </div>

      {/* ================= SOLUTION IMAGE DIVIDER ================= */}
<div className="flex justify-center leading-none" data-aos="fade-up">
  <img
    src={solution}
    alt="Solutions You Can Trust"
    className="block w-46 sm:w-62 md:w-86 lg:w-[420px]"
  />
</div>


      {/* ================= CONTACT ================= */}
      <div className="bg-[#0a1f44] py-16 text-center mt-20 rounded-xl shadow-lg mb-4" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Get in Touch</h2>
          <p className="text-blue-50">
            Have a question or need professional maintenance services?
          </p>
        </div>

         <div className="flex flex-col sm:flex-row justify-center gap-6 text-blue-50">
          <div className="flex items-center gap-3 justify-center"><FaPhoneAlt /> +971 55 789 3945</div>
          <div className="flex items-center gap-3 justify-center"><FaEnvelope /> contact@maperfectfix.com</div>
          <div className="flex items-center gap-3 justify-center"><FaGlobe /> www.maperfectfix.com</div>
        </div>
      </div>

    </section>
  );
};

export default HomeSection;

