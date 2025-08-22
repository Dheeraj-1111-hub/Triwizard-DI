import React from "react";
import { Wand2 } from "lucide-react"; // Magical wand icon

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-green-950 to-black text-green-300 py-8 text-center border-t border-green-600 overflow-hidden">
      {/* Animated magical gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.15),transparent)] animate-pulse"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex items-center justify-center gap-2 text-lg tracking-widest font-harry hover:scale-105 transition duration-500">
        <Wand2 className="w-5 h-5 text-green-400 animate-spin-slow" />
        <p className="hover:text-green-200 transition duration-300">
          © {new Date().getFullYear()} Triwizard | Mischief Managed
        </p>
      </div>

      {/* Glowing bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 animate-glow"></div>
    </footer>
  );
};

export default Footer;
