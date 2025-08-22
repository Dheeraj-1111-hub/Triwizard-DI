import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "events" },
    { name: "Contact Us", path: "contact-us" },
  ];

  const handleNavClick = (item) => {
    if (item.name === "Home") {
      return (
        <Link to="/" className="relative group text-gray-200">
          {renderLinkText(item.name)}
        </Link>
      );
    }

    // Smooth scroll only if we're already on the home page
    return location.pathname === "/" ? (
      <ScrollLink
        to={item.path}
        smooth={true}
        duration={600}
        offset={-80}
        className="relative group text-gray-200 cursor-pointer"
      >
        {renderLinkText(item.name)}
      </ScrollLink>
    ) : (
      <Link to={`/#${item.path}`} className="relative group text-gray-200">
        {renderLinkText(item.name)}
      </Link>
    );
  };

  const renderLinkText = (name) => (
    <>
      <span
        className="tracking-wide text-lg relative z-10 
                   group-hover:text-emerald-300 
                   group-hover:drop-shadow-[0_0_12px_#10b981]
                   transition-all duration-300"
      >
        {name}
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-emerald-400 to-teal-300 
                   transform scale-x-0 group-hover:scale-x-100 
                   transition-transform duration-300 origin-left"
      ></span>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-[Cinzel] bg-black">
      <div className="w-full px-6 py-4 flex justify-between items-center bg-transparent border-b border-emerald-500/30">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-gray-100 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]">
          TRIWIZARD
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <div key={item.name}>{handleNavClick(item)}</div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isOpen ? (
              <X className="w-8 h-8 hover:text-emerald-300" />
            ) : (
              <Menu className="w-8 h-8 hover:text-emerald-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-lg border-b border-emerald-500/30 shadow-lg">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <div key={item.name} onClick={() => setIsOpen(false)}>
                {handleNavClick(item)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
