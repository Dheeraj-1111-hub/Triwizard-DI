import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Animated emerald grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] animate-pulse pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-[Cinzel] mb-6 text-center tracking-[0.25em] relative text-emerald-400"
        >
          <span className="relative inline-block glitch" data-text="CONTACT US">
            CONTACT US
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 text-lg md:text-xl mb-20 drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]">
          Reach out to us with your questions, ideas, or feedback. The future awaits your voice.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-black/60 border border-emerald-500/40 rounded-3xl 
                       shadow-[0_0_40px_rgba(16,185,129,0.35)] p-10 
                       flex flex-col justify-center items-center text-center
                       group hover:scale-[1.05] hover:shadow-[0_0_70px_rgba(16,185,129,0.9)] 
                       transition-all overflow-hidden"
          >
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-3xl border border-emerald-400/40 blur-md opacity-40 group-hover:opacity-70 transition-all pointer-events-none"></div>

            <img
              src="https://i.imgur.com/Zs8vmlq.png"
              alt="Event Logo"
              className="w-36 mb-8 drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] pointer-events-auto"
            />
            <p className="text-gray-300 mb-6 leading-relaxed pointer-events-auto">
              Step into the future with us — where technology, innovation, and imagination collide.
            </p>
            <div className="flex items-center justify-center gap-3 text-emerald-300 font-semibold text-lg pointer-events-auto">
              <MapPin className="w-6 h-6" />
              <p>SRM Institute of Science and Technology, Vadapalani</p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-black/60 border border-emerald-500/40 rounded-3xl 
                       shadow-[0_0_40px_rgba(16,185,129,0.35)] p-10 text-center md:text-left
                       group hover:scale-[1.05] hover:shadow-[0_0_70px_rgba(16,185,129,0.9)]
                       transition-all overflow-hidden"
          >
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-3xl border border-emerald-400/40 blur-md opacity-40 group-hover:opacity-70 transition-all pointer-events-none"></div>

            <h3 className="text-2xl font-[Cinzel] text-emerald-300 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.7)] pointer-events-auto">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-6 text-gray-300 pointer-events-auto">
              <div>
                <p className="text-emerald-400 font-semibold">Coordinators</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-400" /> Name1
                  </li>
                  <li className="flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-400" /> Name2
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-emerald-400 font-semibold">For Queries Contact</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-400" /> Name1: +91 Number
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-400" /> Name2: +91 Number
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-emerald-400 font-semibold">Mail Us</p>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-400" /> (Email)
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6">
                <p className="text-emerald-400 font-semibold mb-2">Follow Us</p>
                <div className="flex gap-6 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/diclub.srmvdp/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-emerald-400 hover:text-emerald-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/diclub-srmvdp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-emerald-400 hover:text-emerald-300" />
                  </a>
                 
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Box */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto text-center bg-black/60 border border-emerald-500/40 
                     rounded-3xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.35)] 
                     hover:shadow-[0_0_70px_rgba(16,185,129,0.8)] transition-all relative overflow-hidden"
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-3xl border border-emerald-400/40 blur-md opacity-40 pointer-events-none"></div>

          <h4 className="text-2xl md:text-3xl text-emerald-300 font-[Cinzel] mb-3 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] pointer-events-auto">
            See y'all on <span className="text-emerald-400">10th September</span>
          </h4>
          <p className="text-gray-400 text-lg pointer-events-auto">
            Don’t miss out on the most futuristic tech event of the year!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
