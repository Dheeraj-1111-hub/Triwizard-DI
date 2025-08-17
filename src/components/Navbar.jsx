import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Events", "Contact Us"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-[Cinzel] bg-black">
      {/* Navbar Container */}
      <div
        className="w-full px-6 py-4 flex justify-between items-center
                   bg-transparent border-b border-emerald-500/30"
      >
        {/* Logo / Title */}
        <div className="relative">
          <h1
            className="text-3xl md:text-4xl tracking-wider 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-emerald-300 via-teal-200 to-gray-100 
                       drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            Hogwarts Legacy
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative group text-gray-200"
            >
              <span
                className="tracking-wide text-lg relative z-10 
                           group-hover:text-emerald-300 
                           group-hover:drop-shadow-[0_0_12px_#10b981]
                           transition-all duration-300"
              >
                {item}
              </span>
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] 
                           bg-gradient-to-r from-emerald-400 to-teal-300 
                           transform scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-300 origin-left"
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <X className="w-8 h-8 hover:text-emerald-300 transition-colors" />
            ) : (
              <Menu className="w-8 h-8 hover:text-emerald-300 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-transparent backdrop-blur-lg
                     border-b border-emerald-500/30 shadow-lg"
        >
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-200 tracking-wide text-lg 
                           hover:text-emerald-300 hover:drop-shadow-[0_0_12px_#10b981]
                           transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
