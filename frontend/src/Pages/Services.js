import React from "react";
import img from "../image/mep.jpeg";
import img1 from "../image/hvac.avif";
import img2 from "../image/sha.webp";
import img3 from "../image/lifc.jpg";
import img4 from "../image/kau.jpg";
import img5 from "../image/ese.png";
import img6 from "../image/amc.webp";
import img7 from "../image/ece.webp";
import img8 from "../image/escw.webp";
import img9 from "../image/spwfl.jpg";

const servicesData = [
  {
    title: "Mechanical, Electrical, and Plumbing (MEP)",
    description:
      "Comprehensive MEP services ensuring the seamless operation of mechanical, electrical, and plumbing systems for your property’s comfort and safety.",
    image: img,
  },
  {
    title: "Heating, Ventilation, and Air Conditioning (HVAC)",
    description:
      "Expert HVAC solutions that maintain optimal indoor climate control, enhancing energy efficiency and occupant comfort.",
    image: img1,
  },
  {
    title: "Smart Home and Automation",
    description:
      "Advanced smart home integrations and automation systems designed to simplify your life with convenience and security.",
    image: img2,
  },
  {
    title: "Luxury Interiors and Finishes Care",
    description:
      "Dedicated care for luxury interiors and finishes to maintain elegance and pristine condition over time.",
    image: img3,
  },
  {
    title: "Kitchen, Appliances, and Utilities",
    description:
      "Maintenance and servicing of kitchen appliances and utilities ensuring efficient and trouble-free operation.",
    image: img4,
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Tailored AMC plans offering consistent, reliable maintenance support for peace of mind throughout the year.",
    image: img5,
  },
  {
    title: "Energy, Sustainability, and Efficiency",
    description:
      "Sustainable energy solutions aimed at reducing environmental impact and lowering operational costs.",
    image: img6,
  },
  {
    title: "Elite Client Experience",
    description:
      "Premium, personalized service focused on delivering an elite client experience with attention to detail and responsiveness.",
    image: img7,
  },
  {
    title: "Exterior, Structural, and Civil Works",
    description:
      "Robust exterior, structural, and civil maintenance ensuring the longevity and safety of your property’s physical infrastructure.",
    image: img8,
  },
  {
    title: "Swimming Pools, Water Features, and Landscaping",
    description:
      "Expert care and maintenance of swimming pools, decorative water features, and landscaping to keep your outdoor spaces stunning and functional.",
    image: img9,
  },
];

const ServicesPage = () => {
  return (
    <section className="w-full bg-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10 text-blue-900 mb-12 text-center">
          Our Services
        </h1>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map(({ title, description, image }) => (
            <div
              key={title}
              className="bg-orange-50 rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={title}
                className="w-full sm:w-48 h-48 sm:h-auto object-cover"
              />

              <div className="p-6 flex flex-col justify-center text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3">
                  {title}
                </h2>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* QUALITY, TRUST & COMPLIANCE */}
        <div className="mt-20 bg-gradient-to-b from-orange-300 to-orange-400 rounded-xl p-8 sm:p-10 text-center text-white max-w-3xl mx-auto shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            QUALITY, TRUST & COMPLIANCE
          </h2>

          <p className="uppercase font-semibold bg-yellow-400 inline-block px-4 py-1 mb-4 text-blue-900 rounded">
            MA PERFECT FIX TECHNICAL
          </p>

          <p className="italic text-base sm:text-lg mb-6">
            Where Details Matter
          </p>

          <div className="text-base sm:text-lg space-y-1">
            <p>📞 +971 55 789 3945</p>
            <p>📧 ashokbekalfort@yahoo.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;
