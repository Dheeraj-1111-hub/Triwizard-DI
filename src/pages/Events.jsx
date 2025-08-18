import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const eventDetails = {
  title: "Annual Quidditch Tournament",
  poster: "https://i.imgur.com/cZuNgGf.jpg",
  description:
    "Join us for the most anticipated sporting event of the year. All four houses will compete for the Quidditch Cup in a display of flying prowess and team strategy.",
  guidelines: [
    "Arrive at least 30 minutes before the event.",
    "Follow all safety protocols.",
    "Respect referees and fellow participants.",
    "Bring your own broomsticks and gear.",
  ],
  time: "May 15, 2023, 10:00 AM - 5:00 PM",
  venue: "Hogwarts Quidditch Pitch",
  coordinators: ["Harry Potter", "Hermione Granger"],
  queries: "quidditch@hogwarts.edu",
};

const EventPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black min-h-screen overflow-hidden font-sans">
      <Navbar />

      {/* Magical Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: ["0%", `${Math.random() * 50 - 25}%`, "0%"],
              x: ["0%", `${Math.random() * 50 - 25}%`, "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 4,
              ease: "easeInOut",
            }}
          ></motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <motion.button
  onClick={() => navigate(-1)}
  whileHover={{
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    textShadow: "0 0 12px #10B981, 0 0 24px #10B981",
    boxShadow: "0 0 20px #10B981, 0 0 40px #10B981",
  }}
  whileTap={{ scale: 0.95 }}
  className="mb-10 flex items-center px-5 py-3 rounded-full border border-emerald-400 text-emerald-400 font-semibold hover:text-teal-300 transition-all relative overflow-hidden"
>
  <span className="mr-2 text-xl animate-pulse">←</span>
  Back
  {/* Subtle animated glow behind the button */}
  <span className="absolute inset-0 bg-emerald-400 opacity-10 rounded-full animate-ping"></span>
</motion.button>


        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row bg-black/70 border border-emerald-400/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.7)] max-w-6xl mx-auto relative group hover:shadow-[0_0_100px_rgba(16,185,129,0.8)] transition-shadow duration-500"
        >
          {/* Glow border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400 opacity-20 blur-xl group-hover:opacity-60 transition duration-500"></div>

          {/* Left Content */}
          <div className="w-full md:w-2/3 p-10 space-y-6 relative z-10">
            {/* Shimmering Title */}
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-5xl font-[Cinzel] bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] animate-gradient-x relative"
            >
              {eventDetails.title}
              <span className="block mt-2 h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse rounded-full"></span>
            </motion.h2>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="bg-emerald-500/20 p-6 rounded-xl border border-emerald-400/40 shadow-lg space-y-3"
            >
              <h3 className="text-xl font-semibold text-emerald-200 mb-3 tracking-wide">
                Common Guidelines
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {eventDetails.guidelines.map((guideline, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="hover:text-emerald-300 transition transform hover:scale-105"
                  >
                    {guideline}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Event Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              {eventDetails.description}
            </motion.p>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-300"
            >
              {[
                { label: "Time", value: eventDetails.time },
                { label: "Venue", value: eventDetails.venue },
                {
                  label: "Coordinators",
                  value: eventDetails.coordinators.join(", "),
                },
                { label: "For Queries", value: eventDetails.queries },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #10B981" }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="p-5 bg-black/70 rounded-xl border border-emerald-400/30 shadow-md"
                >
                  <span className="font-semibold text-emerald-300">
                    {item.label}:{" "}
                  </span>
                  {item.value}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Poster with 3D Tilt + Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-1/3 relative overflow-hidden group perspective"
          >
            <motion.img
              src={eventDetails.poster}
              alt={eventDetails.title}
              whileHover={{ rotateY: 10, rotateX: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="w-full h-full object-cover rounded-r-3xl shadow-[0_0_50px_rgba(16,185,129,0.8)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      <style>
        {`
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default EventPage;
