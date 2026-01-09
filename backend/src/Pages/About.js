import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28">

      {/* ABOUT US TITLE */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 data-aos="fade-up" className="text-3xl  mt-8 sm:text-4xl md:text-5xl font-bold text-blue-800">
          ABOUT <span data-aos="fade-up" className="text-blue-700">US</span>
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mt-3 sm:mt-4"></div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <p data-aos="fade-up" className="text-blue-700 text-base sm:text-lg md:text-xl leading-relaxed text-center mb-12 sm:mb-16">
          <span data-aos="fade-up" className="font-semibold">MA Perfect Fix Technical LLC</span> is a
          Dubai-based technical services company delivering premium maintenance
          solutions for luxury residential and commercial properties. We
          specialize in exclusive villas, high-end apartments, offices, and
          commercial spaces, ensuring long-term value, reliability, and superior
          craftsmanship.
        </p>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl text-center md:text-left font-bold text-blue-800 mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-blue-700 text-base sm:text-lg leading-relaxed md:leading-7 text-center md:text-left">
              To deliver world-class technical services through expert
              engineering, preventive maintenance, and refined service
              standards—ensuring properties operate flawlessly and retain their
              value.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl text-center md:text-left font-bold text-blue-800 mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-blue-700 text-base sm:text-lg leading-relaxed md:leading-7 text-center md:text-left">
              To become a trusted leader in luxury property maintenance across
              Dubai, recognized for quality, professionalism, and long-term
              client partnerships.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800">
            WHY <span data-aos="fade-up" className="text-blue-700">CHOOSE US</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* CARD 1 */}
          <div data-aos="fade-up" className="bg-[#0a1f44] text-center p-6 sm:p-8 rounded-xl shadow-lg">
            <h4 className="font-semibold text-2xl sm:text-2xl text-blue-100 mb-3 sm:mb-4">
              Premium Quality
            </h4>
            <p className="text-blue-50 text-base sm:text-lg leading-relaxed">
              Strict quality controls and trusted materials ensure durable,
              flawless results on every project.
            </p>
          </div>

          {/* CARD 2 */}
          <div data-aos="fade-up" className="bg-[#0a1f44] text-center p-6 sm:p-8 rounded-xl shadow-lg">
            <h4 className="font-semibold text-2xl sm:text-2xl text-blue-100 mb-3 sm:mb-4">
              Expert Team
            </h4>
            <p className="text-blue-50 text-base sm:text-lg leading-relaxed">
              Skilled professionals trained to manage high-end properties with
              precision and care.
            </p>
          </div>

          {/* CARD 3 */}
          <div data-aos="fade-up" className="bg-[#0a1f44] text-center p-6 sm:p-8 rounded-xl shadow-lg">
            <h4 className="font-semibold text-2xl sm:text-2xl text-blue-100 mb-3 sm:mb-4">
              Reliable Service
            </h4>
            <p className="text-blue-50 text-base sm:text-lg leading-relaxed">
              Timely delivery, transparent communication, and customer-first
              service you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
