import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-gray-400 py-6 text-center border-t border-green-800/40">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} D.I. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
