import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-sky-950 to-black text-sky-300 py-8 text-center border-t border-sky-700 overflow-hidden">
      {/* Subtle background shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent)] animate-pulse" />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base tracking-wide font-[Cinzel]">
        <p className="hover:text-sky-200 transition-colors duration-300">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent font-semibold">
            Triwizard
          </span>{" "}
          • All Rights Reserved
        </p>
      </div>

      {/* Elegant glowing border (emerald + blue flame) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 animate-glow" />

      {/* Custom Animations */}
      <style jsx>{`
        .animate-glow {
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            box-shadow: 0 0 8px rgba(56, 189, 248, 0.4),
                        0 0 12px rgba(16, 185, 129, 0.4);
          }
          to {
            box-shadow: 0 0 16px rgba(56, 189, 248, 0.9),
                        0 0 20px rgba(16, 185, 129, 0.9);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
