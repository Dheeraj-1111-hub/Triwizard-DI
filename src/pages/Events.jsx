import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

const eventDetails = [
  {
    id: 1,
    title: "Wizarding Webcraft",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "Join us for Teams of 2 - 3 participants, Participants create a landing page and can cast “spells” (interactive code effects) on competing teams pages. Creativity and functionality will be scored. (landing page design) most anticipated sporting event of the year. All four houses will compete for the Quidditch Cup in a display of flying prowess and team strategy.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 2,
    title: "Python Showdown",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "Single registration, Round 1 – Fast-paced Kahoot-style Python quiz on basics like variables, loops, and data types.Round 2 – Teams race to solve short Python coding challenges (algorithms, pattern printing) in 60–90 seconds. Quickest and most accurate teams advance. (Python quiz + programming) Great Hall will be transformed into a winter wonderland for this formal event during the Triwizard Tournament.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 3,
    title: "Creature Canvas",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "Single registration, participants will redesign a magical creature or combine two or more existing creatures from the Harry Potter universe or create a new imaginary one. The design should show the creature’s appearance, habitat, magical powers and a 2-3 line caption on name, magical powers used and purpose. Judged based on creativity, detail (Canva/ Photoshop digital art).",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 4,
    title: "Curse-Breaker",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "Curse-Breakers is an exciting knowledge-based challenge designed to test your wit, speed, and problem-solving skills! The event consists of 3 thrilling rounds, each packed with mind-bending questions that will push you to break the “curse” of confusion. Participants must tackle as many questions as possible to climb the leaderboard. The one who conquers the most questions and scores the highest will be crowned the ultimate Curse-Breaker and walk away with exciting rewards!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 5,
    title: "Hunt for Horcrux",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "4 per team, 4 participants will be chained together and need to solve minigames which land on their path to finish lines while being cautious as well of the other competing team. If the gamemaster announces petricus totalus on any team or person , he/she should be freezed and if not , will be forced to the starting line and lose all the horcrux. Collection of 7/4 and finishing",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 6,
    title: "Harry Potter Trivia",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "single registration, General kahoot/menti quiz on trivia from the world of harry potter like completing the dialogues , what comes next etc (quiz)",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 7,
    title: "Secure the castle",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "3-4 per team, Participants need to strategize and securely build their castles while the other defends and attacks the other team's castle. Three teams battle it out proactively till the round lasts and the winner is decided based on the number of cups standing. (attacking/ defending + castle building)",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 8,
    title: "The Invisibility Challenge",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "2 per team. Players will be accommodated in class rooms and will be given roles like wizard , witch , order of the phoenix , death eaters and the game will lay out like a traditional mafia.werewolf game. After each round surviving students get points and in the last players with highest points wins (or till all death eaters are out) (obstacle survival)",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 9,
    title: "FIFA",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "2 per team, A competitive gaming event where players face off in knockout rounds of FIFA to crown the ultimate virtual football champion. (FIFA gaming tournament)",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 10,
    title: "BGMI",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "4 per team, A high-intensity esports event where squads battle it out in BGMI, testing teamwork, strategy, and survival skills to emerge as champions. (BGMI esports tournament)",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 11,
    title: "IPL-Auction",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "2-3 per team , an interactive cricket-themed event where participants bid, strategize, and build their dream IPL squad in a thrilling auction showdown.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
  {
    id: 12,
    title: "Whisper Challenge",
    poster: "https://i.imgur.com/cZuNgGf.jpg",
    description:
      "A fun-filled communication game where teammates try to guess phrases through lip-reading, leading to hilarious misinterpretations",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow all safety protocols.",
      "Respect referees and fellow participants.",
      "Bring your own broomsticks and gear.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "need to be added",
    coordinators: ["need to be added", "need to be added"],
    queries: "need to be added",
  },
];

const EventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventDetails.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center text-red-500 mt-10">Event not found!</h2>;
  }

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black via-gray-950 to-black min-h-screen overflow-hidden font-sans">
      <Navbar />

      {/* Magical Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#10B981" : i % 3 === 1 ? "#3B82F6" : "#FBBF24",
              opacity: 0.3 + Math.random() * 0.7,
              filter: "blur(2px)",
            }}
            animate={{
              y: ["0%", `${Math.random() * 60 - 30}%`, "0%"],
              x: ["0%", `${Math.random() * 60 - 30}%`, "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{
            scale: 1.1,
            rotate: [0, -6, 6, 0],
            textShadow: "0 0 12px #10B981, 0 0 24px #10B981",
            boxShadow: "0 0 20px #10B981, 0 0 40px #10B981",
          }}
          whileTap={{ scale: 0.92 }}
          className="mb-8 flex items-center px-5 py-3 rounded-full border border-emerald-400 text-emerald-400 font-semibold transition-all text-base relative overflow-hidden bg-black/40 backdrop-blur-md"
        >
          <span className="mr-2 text-xl animate-pulse">←</span>
          Back
          <span className="absolute inset-0 bg-emerald-400 opacity-10 rounded-full animate-ping"></span>
        </motion.button>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col lg:flex-row bg-black/40 backdrop-blur-xl border border-emerald-400/40 rounded-3xl overflow-hidden relative max-w-6xl mx-auto shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:shadow-[0_0_120px_rgba(16,185,129,0.8)] transition-all duration-700 group"
        >
          {/* Left Content */}
          <div className="w-full lg:w-2/3 p-6 sm:p-10 space-y-6 relative z-10">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-[Cinzel] bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent animate-shimmer tracking-wide"
            >
              {event.title}
            </motion.h2>
            <div className="h-1 w-28 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="bg-gradient-to-br from-emerald-500/10 to-emerald-700/10 p-6 rounded-2xl border border-emerald-400/30 shadow-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-emerald-200 mb-4">
                Common Guidelines
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
                {event.guidelines.map((g, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="hover:text-emerald-300 transition transform hover:scale-105"
                  >
                    {g}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed italic"
            >
              {event.description}
            </motion.p>

            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-300"
            >
              {[
                { label: "Time", value: event.time },
                { label: "Venue", value: event.venue },
                { label: "Coordinators", value: event.coordinators.join(", ") },
                { label: "For Queries", value: event.queries },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 25px #10B981",
                  }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="p-5 bg-black/50 rounded-xl border border-emerald-400/30 shadow-lg backdrop-blur-md"
                >
                  <span className="font-semibold text-emerald-300">
                    {item.label}:{" "}
                  </span>
                  {item.value}
                </motion.div>
              ))}
            </motion.div>

            {/* QR Code Registration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 text-center"
            >
              <h3 className="text-2xl font-semibold text-emerald-300 mb-4">
                Register Now
              </h3>
              <div className="relative inline-block group">
                <motion.img
                  src={`/${event.id}.png`}
                  alt={`Register QR for ${event.title}`}
                  className="w-48 h-48 mx-auto rounded-2xl border-2 border-emerald-400 shadow-lg group-hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] transition-all"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 120 }}
                />
                <span className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </div>
              <p className="mt-4 text-gray-400 italic text-sm">
                Scan the QR code to register via Google Form
              </p>
            </motion.div>
          </div>

          {/* Right Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/3 relative overflow-hidden group"
          >
            <motion.img
              src={event.poster}
              alt={event.title}
              whileHover={{
                rotateY: 12,
                rotateX: -10,
                scale: 1.08,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="w-full h-72 sm:h-96 lg:h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl shadow-[0_0_50px_rgba(16,185,129,0.7)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      <style>
        {`
          .animate-shimmer {
            background-size: 250% 250%;
            animation: shimmer 4s linear infinite;
          }
          @keyframes shimmer {
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