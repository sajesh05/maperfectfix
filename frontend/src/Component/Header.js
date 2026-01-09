import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logomaa.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contacts" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-b from-[#0a1f44] to-[#0a2f44] shadow-md">
      
      {/* ================= HEADER CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] sm:h-[100px] flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20 w-auto" />
          <div className=" sm:flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-serif text-blue-200">
              MA PERFECT FIX
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-200 border-b-2 border-blue-900 pb-1"
                  : "text-blue-200 hover:text-blue-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-blue-200 text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1f44] shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-200 border-b-2 border-blue-400 pb-1"
                    : "text-blue-100 hover:text-blue-300 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
