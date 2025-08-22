import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Copy,
} from "lucide-react";

// Countdown Hook
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Event Started!");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const ContactUs = () => {
  const timeLeft = useCountdown("2025-09-10T00:00:00");

  // Email Copy Function
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hogwarts.events@srm.edu");
    alert("Email copied to clipboard!");
  };

  return (
    <section
      id="contact-us"
      className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]"
            initial={{ opacity: 0, y: Math.random() * 800 }}
            animate={{
              opacity: [0, 1, 0],
              y: [Math.random() * 800, -20],
              x: [Math.random() * 1200, Math.random() * 1200 + 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-[Cinzel] mb-10 text-center tracking-[0.15em] 
                     bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 
                     bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(16,185,129,0.8)]"
        >
          CONTACT US
        </motion.h2>

        <p className="text-center text-gray-400 text-lg md:text-xl mb-24 max-w-3xl mx-auto leading-relaxed">
          Send us your enchanted parchments, summon us by Floo Network, or
          simply send an Owl. The Wizarding World is waiting to hear from you.
        </p>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-black/60 border border-emerald-500/40 rounded-3xl p-10 
                       shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:shadow-[0_0_90px_rgba(16,185,129,0.9)] 
                       transition-all overflow-hidden text-center group"
          >
            <div className="flex justify-center gap-x-6 mb-6">
              <img src="/srmlogo.png" alt="SRM Logo" className="w-28" />
              <img src="/dilogo.jpeg" alt="DI Logo" className="w-28" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Step into the Great Hall of innovation — where Muggles, Witches,
              and Wizards unite to conjure the future.
            </p>
            <div className="flex justify-center mt-6 text-emerald-300 font-semibold text-lg">
              <MapPin className="w-6 h-6 mr-2" />
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400"
              >
                SRM Institute of Science and Technology, Vadapalani
              </a>
            </div>
          </motion.div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-emerald-950/70 to-black/80 rounded-full 
                       w-[350px] h-[350px] mx-auto flex flex-col items-center justify-center 
                       text-center border border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.6)] 
                       hover:scale-105 transition-transform overflow-hidden"
          >
            <h3 className="text-3xl font-[Cinzel] text-emerald-300 mb-4">
              WIZARDING COORDINATES
            </h3>
            <p className="text-gray-300 max-w-[250px]">
              Reach out to the Head Prefects and connect with us through the
              Floo Network or by Owl.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-black/60 border border-emerald-500/40 rounded-3xl p-10 
                       shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:shadow-[0_0_90px_rgba(16,185,129,0.9)] 
                       transition-all overflow-hidden"
          >
            <h3 className="text-2xl font-[Cinzel] text-emerald-300 mb-6">
              Reach Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-emerald-400 font-semibold">Head Prefects</p>
                <p className="flex items-center gap-2">
                  <User className="w-5 h-5" /> Hermione Granger
                </p>
                <p className="flex items-center gap-2">
                  <User className="w-5 h-5" /> Harry Potter
                </p>
              </div>
              <div>
                <p className="text-emerald-400 font-semibold">Floo Network</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Ron Weasley: +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Luna Lovegood: +91 91234 56789
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-emerald-400"
                onClick={handleCopyEmail}
              >
                <Mail className="w-5 h-5" /> hogwarts.events@srm.edu{" "}
                <Copy className="w-4 h-4" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6 justify-center">
              <a
                href="https://www.instagram.com/diclub.srmvdp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400 flex items-center justify-center hover:scale-110 hover:bg-emerald-400/20 transition-all"
              >
                <Instagram className="w-6 h-6 text-emerald-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/diclub-srmvdp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400 flex items-center justify-center hover:scale-110 hover:bg-emerald-400/20 transition-all"
              >
                <Linkedin className="w-6 h-6 text-emerald-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Box with Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-28 max-w-4xl mx-auto text-center bg-black/70 border border-emerald-500/40 
                     rounded-3xl p-10 shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:shadow-[0_0_90px_rgba(16,185,129,0.8)] 
                     transition-all relative"
        >
          <h4 className="text-2xl md:text-3xl text-emerald-300 font-[Cinzel] mb-3">
            The Sorting Hat awaits you on{" "}
            <span className="text-emerald-400">10th & 11th September</span>
          </h4>
          <p className="text-gray-400 text-lg">
            Don’t miss the Triwizard-inspired celebration of magic & technology!
          </p>
          <p className="mt-4 text-xl text-emerald-400">{timeLeft}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
