import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logoma.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contacts" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-b from-orange-300 to-orange-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col leading-4">
            <span className="text-lg font-serif text-blue-600">
              MA PERFECT FIX
            </span>
            <span className="text-lg font-serif text-blue-600">
              TECHNICAL
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                  : "text-blue-700 hover:text-blue-900 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-blue-800 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-orange-200 shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                    : "text-blue-700 hover:text-blue-900 transition"
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
