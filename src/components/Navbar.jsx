import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "events" },
    { name: "Contact Us", path: "contact-us" },
    { name: "Sorter", external: true, url: "https://sorter-triwizard.vercel.app/" },
  ];

  const handleNavClick = (item) => {
    if (item.external) {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-gray-200"
        >
          {renderLinkText(item.name)}
        </a>
      );
    }

    if (item.name === "Home") {
      return (
        <Link to="/" className="relative group text-gray-200">
          {renderLinkText(item.name)}
        </Link>
      );
    }

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
                   group-hover:text-blue-400 
                   group-hover:animate-flameBlue
                   transition-all duration-300"
      >
        {name}
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] 
                   bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-400
                   transform scale-x-0 group-hover:scale-x-100 
                   transition-transform duration-500 origin-left
                   group-hover:animate-flameBlue"
      ></span>
    </>
  );

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.4 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 200 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-[Cinzel] bg-black/90 h-[80px] backdrop-blur-lg ">
      <div className="w-full px-2 h-full flex justify-between items-center border-b border-blue-400/40">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group hover:scale-105 transition-transform duration-300"
        >
          <motion.img
            src="/logo.png"
            alt="Triwizard Logo"
            className="h-[140px] w-[160px] object-contain pt-5 
             sm:h-[180px] sm:w-[210px] sm:pt-4 
             md:h-[220px] md:w-[260px] md:pt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

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
              <X className="w-8 h-8 hover:text-blue-400 transition-colors" />
            ) : (
              <Menu className="w-8 h-8 hover:text-blue-400 transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with staggered animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-blue-400/40 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            <div className="flex flex-col space-y-6 p-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setIsOpen(false)}
                  className="text-center"
                >
                  {handleNavClick(item)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
