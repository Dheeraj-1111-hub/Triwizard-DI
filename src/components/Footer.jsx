import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-emerald-950 to-black text-emerald-300 py-8 text-center border-t border-emerald-700 overflow-hidden">
      {/* Subtle background shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent)] animate-pulse" />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base tracking-wide font-[Cinzel]">
        <p className="hover:text-emerald-200 transition-colors duration-300">
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-400 font-semibold">Triwizard</span> • All Rights Reserved
        </p>
      </div>

      {/* Elegant glowing border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-700 animate-glow" />

      {/* Custom Animations */}
      <style jsx>{`
        .animate-glow {
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            box-shadow: 0 0 6px rgba(16, 185, 129, 0.3);
          }
          to {
            box-shadow: 0 0 14px rgba(16, 185, 129, 0.7);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
