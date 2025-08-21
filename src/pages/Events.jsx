import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

const eventDetails = [
  {
    id: 2,
    title: "Python Showdown",
    poster: "/PythonShowdown.jpg",
    description:
      "Round 1 – A fast-paced Kahoot-style Python quiz covering basics like variables, loops, and data types. Round 2 – A coding sprint where participants solve Python challenges under pressure. Only the quickest and sharpest advance!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow instructions carefully.",
      "Maintain fairness and discipline.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "1 per registration",
    price: "₹80",
  },
  {
    id: 3,
    title: "Creature Canvas",
    poster: "/CreatureCanvas.jpg",
    description:
      "Unleash your creativity! Design a magical creature (new or hybrid) with detailed appearance, powers, and backstory. Use Canva/Photoshop to bring your imagination to life. Judged on creativity and originality.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Original work only.",
      "Digital submissions must be in PNG/JPEG format.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "1 per registration",
    price: "₹80",
  },
  {
    id: 4,
    title: "Curse-Breaker",
    poster: "/CurseBreakers.jpg",
    description:
      "A thrilling knowledge-based challenge testing wit, speed, and problem-solving. Break through three rounds of mind-bending questions to climb the leaderboard. Only the ultimate Curse-Breaker claims the crown!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Respect the time limits strictly.",
      "No external assistance allowed.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "2 per team",
    price: "₹150",
  },
  {
    id: 5,
    title: "Hunt for the Horcrux",
    poster: "/Hunt.jpg",
    description:
      "A thrilling adventure where 4 participants are chained together to solve mini-games on their path to victory. Beware—one wrong step and you could lose all your Horcruxes!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow gamemaster's instructions strictly.",
      "Play fair and respect competitors.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "4 per team",
    price: "₹240",
  },
  {
    id: 6,
    title: "Harry Potter Trivia",
    poster: "/Trivia.jpg",
    description:
      "Dive into the magical world of Harry Potter with this trivia showdown! From completing iconic dialogues to guessing spells and magical objects—only true Potterheads will survive.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "No external devices allowed.",
      "Decisions of quizmasters are final.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "1 per registration",
    price: "₹60",
  },
  {
    id: 7,
    title: "Secure the Castle",
    poster: "/SecureTheCastle.jpg",
    description:
      "Build, defend, and conquer! Teams must design secure castles while simultaneously launching attacks on opponents. Strategy, creativity, and teamwork decide who secures the crown!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Team spirit is a must.",
      "Respect opponent’s strategy.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "3 per team",
    price: "₹180",
  },
  {
    id: 9,
    title: "FIFA",
    poster: "/Fifa.jpg",
    description:
      "Step into the virtual stadium and showcase your football skills. Compete head-to-head in knockout FIFA matches until the ultimate champion is crowned.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Own controllers allowed (optional).",
      "Fair play required at all times.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "2 per team",
    price: "₹100",
  },
  {
    id: 10,
    title: "BGMI",
    poster: "/BGMI.jpg",
    description:
      "A high-stakes BGMI tournament! Squads strategize, survive, and dominate the battleground. Only the sharpest team emerges victorious!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Play on your own devices.",
      "Stable internet connection required.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "2 or 4 per team",
    price: "₹100 (2 players) / ₹200 (4 players)",
  },
  {
    id: 12,
    title: "Whisper Challenge",
    poster: "/Whisper.jpg",
    description:
      "A hilarious test of communication! Teammates lip-read phrases while wearing noise-cancelling headphones, leading to chaotic and funny interpretations.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Respect time limits.",
      "Keep the energy fun and lighthearted.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    coordinators: ["Need to be added"],
    queries: "Need to be added",
    participants: "3 per team",
    price: "₹150",
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
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black font-sans">
      <Navbar />

      {/* Magical Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: ["#10B981", "#3B82F6", "#FBBF24"][i % 3],
              opacity: 0.4 + Math.random() * 0.5,
              filter: "blur(3px)",
            }}
            animate={{
              y: ["0%", `${Math.random() * 80 - 40}%`, "0%"],
              x: ["0%", `${Math.random() * 80 - 40}%`, "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-10 py-12 mt-10">
        

        {/* Event Layout */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.7)] border border-emerald-400/40 backdrop-blur-2xl">
          {/* Poster Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/2 w-full relative"
          >
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <h2 className="absolute bottom-6 left-6 text-4xl sm:text-5xl font-[Cinzel] text-emerald-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)]">
              {event.title}
            </h2>
          </motion.div>

          {/* Details Section */}
          <div className="lg:w-1/2 w-full p-8 sm:p-10 space-y-6 bg-black/70 backdrop-blur-xl">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-gray-300 text-lg leading-relaxed font-light"
            >
              {event.description}
            </motion.p>

            {/* Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="p-5 bg-gradient-to-br from-emerald-500/10 to-emerald-700/20 rounded-2xl border border-emerald-400/30 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-300 mb-3">
                Guidelines
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {event.guidelines.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </motion.div>

            {/* Info Grid */}
            {/* Info Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
  {/* Time */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px #10B981" }}
    className="p-4 bg-black/40 rounded-xl border border-emerald-400/30 backdrop-blur-md"
  >
    <span className="font-semibold text-emerald-300">Time:</span>{" "}
    {event.time}
  </motion.div>

  {/* Venue + Price in same box */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px #10B981" }}
    className="p-4 bg-black/40 rounded-xl border border-emerald-400/30 backdrop-blur-md"
  >
    <span className="font-semibold text-emerald-300">Venue:</span>{" "}
    {event.venue}
    <br />
    <span className="font-semibold text-emerald-300">Price:</span>{" "}
    {event.price}
  </motion.div>

  {/* Participants */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px #10B981" }}
    className="p-4 bg-black/40 rounded-xl border border-emerald-400/30 backdrop-blur-md"
  >
    <span className="font-semibold text-emerald-300">Participants:</span>{" "}
    {event.participants}
  </motion.div>

  {/* Coordinators */}
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px #10B981" }}
    className="p-4 bg-black/40 rounded-xl border border-emerald-400/30 backdrop-blur-md"
  >
    <span className="font-semibold text-emerald-300">Coordinators:</span>{" "}
    {event.coordinators.join(", ")}
  </motion.div>
</div>


            {/* QR + CTA */}
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold text-emerald-300 mb-4">
                Register Now
              </h3>
              <motion.img
  src={`/${event.id}.png`}
  alt={`Register QR for ${event.title}`}
  className="w-44 h-44 mx-auto rounded-2xl border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.8)]"
  whileHover={{ scale: 1.08 }}   // Just zoom in a bit
  transition={{ type: "spring", stiffness: 150 }}
/>

              
              <p className="mt-3 text-gray-400 text-sm italic">
                Scan the QR code to register by Google Form
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;