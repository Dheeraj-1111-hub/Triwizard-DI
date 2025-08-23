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

// --- Countdown Hook ---
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    ended: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance > 0) {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance / (1000 * 60)) % 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor((distance / 1000) % 60)).padStart(
          2,
          "0"
        );

        setTimeLeft({ days, hours, minutes, seconds, ended: false });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          ended: true,
        });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const ContactUs = () => {
  const timeLeft = useCountdown("2025-09-10T00:00:00");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("@srm.edu");
    alert("Email copied to clipboard!");
  };

  return (
    <section
      id="contact-us"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Floating Blue Flame Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.9)]"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-[Cinzel] mb-10 text-center tracking-[0.15em] 
                     text-blue-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.9)] animate-flameBlue"
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-gray-400 text-base sm:text-lg md:text-xl mb-16 sm:mb-24 max-w-3xl mx-auto leading-relaxed px-2">
          Send us your enchanted parchments, summon us by Floo Network, or
          simply send an Owl. The Wizarding World is waiting to hear from you.
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-black/60 border border-blue-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 
                       shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_70px_rgba(59,130,246,1)] 
                       transition-all overflow-hidden text-center group animate-flameBlue"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <motion.img
                src="/srmlogo.png"
                alt="SRM Logo"
                whileHover={{ scale: 1.1 }}
                className="w-20 sm:w-28 h-12 rounded-xl border border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:shadow-[0_0_45px_rgba(59,130,246,1)] transition-all"
              />
              <motion.img
                src="/dilogo.jpeg"
                alt="DI Logo"
                whileHover={{ scale: 1.1 }}
                className="w-20 sm:w-28 h-22 rounded-xl border-2 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:shadow-[0_0_45px_rgba(59,130,246,1)] transition-all"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Step into the Great Hall of innovation — where Muggles, Witches,
              and Wizards unite to conjure the future.
            </p>
            <div className="flex justify-center mt-6 text-blue-300 font-semibold text-sm sm:text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
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
            className="relative bg-gradient-to-b from-blue-950/70 to-black/80 rounded-full 
                       w-64 h-64 sm:w-80 sm:h-80 mx-auto flex flex-col items-center justify-center 
                       text-center border border-blue-500/40 shadow-[0_0_70px_rgba(59,130,246,0.7)] 
                       hover:scale-105 transition-transform overflow-hidden px-6 animate-flameBlue"
          >
            <h3 className="text-xl sm:text-2xl font-[Cinzel] text-blue-300 mb-3">
              WIZARDING COORDINATES
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
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
            className="relative bg-black/60 border border-blue-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 
                       shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_70px_rgba(59,130,246,1)] 
                       transition-all overflow-hidden animate-flameBlue"
          >
            <h3 className="text-xl sm:text-2xl font-[Cinzel] text-blue-300 mb-6 text-center sm:text-left">
              Reach Us
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <div>
                <p className="text-blue-400 font-semibold">Head Prefects</p>
                <p className="flex items-center gap-2">
                  <User className="w-5 h-5" /> Sahithyaa Krishnakumar
                </p>
                <p className="flex items-center gap-2">
                  <User className="w-5 h-5" /> Dev Mehta
                </p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">Floo Network</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Sahithyaa Krishnakumar: +91
                  7305871144
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Dev Mehta: +91 9080111855
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
                onClick={handleCopyEmail}
              >
                <Mail className="w-5 h-5" /> sk5346@srmist.edu.in{" "}
                <Copy className="w-4 h-4" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/diclub.srmvdp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-400/10 border border-blue-400 flex items-center justify-center hover:scale-110 hover:bg-blue-400/20 transition-all"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/diclub-srmvdp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-400/10 border border-blue-400 flex items-center justify-center hover:scale-110 hover:bg-blue-400/20 transition-all"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
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
          className="mt-16 sm:mt-20 max-w-4xl mx-auto text-center bg-black/70 border border-blue-500/40 
             rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-[0_0_30px_rgba(59,130,246,0.6)] 
             hover:shadow-[0_0_60px_rgba(59,130,246,1)] transition-all relative animate-flameBlue"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl text-blue-300 font-[Cinzel] mb-3 leading-snug">
            The Sorting Hat awaits you on{" "}
            <span className="text-blue-400">10th & 11th September</span>
          </h4>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            Don’t miss the Triwizard-inspired celebration of magic & technology!
          </p>

          {/* Countdown Display */}
          {timeLeft.ended ? (
            <p className="mt-6 text-base sm:text-lg md:text-2xl font-bold text-red-400 animate-pulse">
              🎉 Event Started! 🎉
            </p>
          ) : (
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-blue-300 font-mono">
              {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                <motion.div
                  key={unit}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="bg-black/80 border border-blue-500/50 rounded-lg sm:rounded-xl 
                       px-3 py-2 sm:px-5 sm:py-3 shadow-[0_0_12px_rgba(59,130,246,0.8)] 
                       text-lg sm:text-2xl md:text-4xl font-bold min-w-[55px] sm:min-w-[75px] md:min-w-[90px] text-center animate-flameBlue"
                  >
                    {timeLeft[unit]}
                  </div>
                  <span className="mt-1 sm:mt-2 uppercase text-xs sm:text-sm tracking-wide text-gray-400">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
