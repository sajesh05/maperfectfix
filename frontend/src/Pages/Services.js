import React, { useEffect, useState } from "react";
import img from "../image/electricl.png";
import img1 from "../image/HAVS.png";
import img2 from "../image/smart homen.jpg";
import img3 from "../image/general maintanance.png";
import img4 from "../image/kitchenn.jpg";
import img5 from "../image/ANNUAL MAINTANACEn.jpg";
import img6 from "../image/EMERGENCY.png";
import img8 from "../image/SAFTY INSPEC.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Background Images */
import bg2 from "../image/dubai-6331310_1280.jpg";
import bg3 from "../image/Facade-Cleaning-service1.jpg";

/* Slideshow images array */
const bgImages = [bg2, bg3];

const servicesData = [
  { title: "Mechanical, Electrical, and Plumbing (MEP)", description: "Comprehensive MEP services ensuring the seamless operation of mechanical, electrical, and plumbing systems.", image: img },
  { title: "Heating, Ventilation, and Air Conditioning (HVAC)", description: "Expert HVAC solutions that maintain optimal indoor climate control.", image: img1 },
  { title: "Smart Home and Automation", description: "Advanced smart home integrations and automation systems.", image: img2 },
  { title: "Luxury Interiors and Finishes Care", description: "Dedicated care for luxury interiors and finishes.", image: img3 },
  { title: "Kitchen, Appliances, and Utilities", description: "Maintenance and servicing of kitchen appliances and utilities.", image: img4 },
  { title: "Annual Maintenance Contracts (AMC)", description: "Tailored AMC plans offering consistent, reliable maintenance support.", image: img5 },
  { title: "Energy, Sustainability, and Efficiency", description: "Sustainable energy solutions aimed at reducing environmental impact.", image: img6 },
  // { title: "Elite Client Experience", description: "Premium, personalized service focused on delivering an elite client experience.", image: img7 },
  { title: "Exterior, Structural, and Civil Works", description: "Robust exterior, structural, and civil maintenance for your property.", image: img8 },
  // { title: "Swimming Pools, Water Features, and Landscaping", description: "Expert care and maintenance of swimming pools, water features, and landscaping.", image: img9 },
];

const ServicesPage = () => {
  const [currentBg, setCurrentBg] = useState(0);

  /* Background slideshow */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  const selectService = (serviceTitle) => {
    const selectEl = document.querySelector("select[name='service']");
    if (selectEl) selectEl.value = serviceTitle;
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/service/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      toast.success(result.message);
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16">

      {/* ================= HERO SLIDESHOW ================= */}
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden mb-12">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-100 mb-3">
            We Don’t Just Offer Services — We Solve 
             <span className="block text-yellow-300 mt-2">
             Problems
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-orange-50 max-w-xl text-base sm:text-lg md:text-xl">
            Quality maintenance solutions tailored to your luxury property needs.
          </p>
        </div>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => selectService(service.title)}
              className="cursor-pointer bg-[#0a1f44] rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full sm:w-48 h-48 sm:h-auto object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-100 mb-2">{service.title}</h2>
                <p className="text-blue-50 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REQUEST SERVICE FORM ================= */}
      <div data-aos="fade-up" data-aos-delay="300" className="max-w-3xl mx-auto bg-[#0a1f44] p-8 sm:p-10 rounded-3xl shadow-xl border border-white ">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-100 mb-8 text-center">Request a Service</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input type="tel" name="phone" placeholder="Your Phone" required className="w-full border border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <select name="service" required className="w-full border border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              <option value="" disabled>Select Service</option>
              {servicesData.map((service, index) => (
                <option key={index} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="px-10 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-yellow-500 hover:scale-105 transition-transform duration-300 mt-2">
            Submit Request
          </button>
        </form>
      </div>

      {/* ================= TOAST NOTIFICATIONS ================= */}
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

export default ServicesPage;
