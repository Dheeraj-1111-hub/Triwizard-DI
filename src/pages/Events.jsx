import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import { g } from "framer-motion/client";

const eventDetails = [
  {
    id: 2,
    title: "Python Showdown",
    poster: "/PythonShowdown.jpg",
    description:
      "Test your coding speed and smarts in this two-round contest—kick off with a rapid-fire Python quiz, then race to crack coding puzzles under the given time.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow instructions carefully.",
      "Maintain fairness and discipline.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Sura reddy - 8332831328", "Kamalesh - 9444411410"],
    queries: "Need to be added",
    participants: "1 per registration",
    participationFee: "₹80",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdNeo1V0QMknTxFzaUwNlmB8GhfgqADKUzDwEoWpxJbkow1DA/viewform?usp=header",
  },
  {
    id: 3,
    title: "Creature Canvas",
    poster: "/CreatureCanvas.jpg",
    description:
      "Unleash your imagination by redesigning a creature, fusing beings from the Harry Potter universe, or inventing your own! Showcase its look, habitat, and magical powers with a short caption—judged on creativity and detail.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Original work only.",
      "Digital submissions must be in PNG/JPEG format.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: [" Nilesh - 9043795180 ", " Kaushik - 9444265342 "],
    queries: "Need to be added",
    participants: "1 per registration",
    participationFee: "₹80",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf0A98h0gGBT2uWehPByl0zG1GoJVfr5_rvkNTe0mhOvJ6o7Q/viewform?usp=header",
  },
  {
    id: 4,
    title: "Curse-Breaker",
    poster: "/CurseBreakers.jpg",
    description:
      "A fast-paced coding face-off where teams of 2 race to spot, identify and fix intentional errors in code snippets across multiple languages.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Respect the time limits strictly.",
      "No external assistance allowed.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Yogeshwar - 8072591978", "Sreya - 7299168515"],
    queries: "Need to be added",
    participants: "2 per team",
    participationFee: "₹150",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfPKNe2z6ddvIfsfEGsVGBqniTyAoXqNmLxoV7yWPR4ek9yeQ/viewform?usp=header",
  },
  {
    id: 5,
    title: "Hunt for the Horcrux",
    poster: "/Hunt.jpg",
    description:
      "Teams of 4 are chained together, racing through mini-games while dodging rival teams and a sudden Petrificus Totalus which freezes the teams! Collect Horcruxes, survive setbacks, and cross the finish line fastest to win.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Follow gamemaster's instructions strictly.",
      "Play fair and respect competitors.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Pranav - 8331018490", "Preetham - 8778803738"],
    queries: "Need to be added",
    participants: "4 per team",
    participationFee: "₹240",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScu5F8MBbE30-pw8Azwo_aJLqfYPnBFT2ZMwuYAh6hjuqXa-w/viewform?usp=header",
  },
  {
    id: 6,
    title: "Harry Potter Trivia",
    poster: "/Trivia.jpg",
    description:
      "A fast-paced Kahoot-style trivia challenge on all things Harry Potter—finish the quotes, guess what comes next, and prove your wizarding wisdom!",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "No external devices allowed.",
      "Decisions of quizmasters are final.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: [
      " Rohit Vikrant - 9080345650 ",
      " Sandhya - 9500698899",
    ],
    queries: "Need to be added",
    participants: "1 per registration",
    participationFee: "₹60",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSekV7zRYx21SYzmBhsdIcX1UKWWATkNwNGQ9rU4qUrmP_uiyg/viewform?usp=header",
  },
  {
    id: 7,
    title: "Secure the Castle",
    poster: "/SecureTheCastle.jpg",
    description:
      "Three teams battle it out by building, defending, and attacking castles—strategy meets speed, and the team with the most cups standing claims victory.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Team spirit is a must.",
      "Respect opponent’s strategy.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Sadhana - 7904691834", "Ruthiksha - 9019377925"],
    queries: "Need to be added",
    participants: "3 per team",
    participationFee: "₹180",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScTkxUpK8EQgfyk-il4aSWouF2l3IYg9u8RWw8RsQUpQgaTzQ/viewform?usp=header",
  },
  {
    id: 9,
    title: "FIFA",
    poster: "/Fifa.jpg",
    description:
      "Participate in our upcoming FIFA Tournament, a competitive showcase of skill, strategy, and sportsmanship. Experience an engaging event that blends fair play with high-stakes excitement on the virtual pitch.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Own controllers allowed (optional).",
      "Fair play required at all times.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Mark Owen - 9499006899", "Deepak - 7200386036"],
    queries: "Mark Owen - 9499006899 ; Deepak - 7200386036",
    participants: "2 per team",
    participationFee: "₹100",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdfBhWw9UbyqEF_2H9RppxKOO-W5mI3s0-p6QdR5HXf3ckr2Q/viewform?usp=header",
  },
  {
    id: 10,
    title: "BGMI",
    poster: "/BGMI.jpg",
    description:
      "Join our BGMI Tournament for a professional, high-intensity competition showcasing strategic gameplay and fair sportsmanship.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Play on your own devices.",
      "Stable internet connection required.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Tejas - 9994077703", "Sauban - 9631981621"],
    queries: "Need to be added",
    participants: "2 or 4 per team",
    participationFee: "₹100 (2 players) / ₹200 (4 players)",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSezymkEhtsvW-OFLun6dHHqbwRrAiPcVrhR17nmn4NBfe4ypg/viewform?usp=header",
  },
  {
    id: 12,
    title: "Whisper Challenge",
    poster: "/Whisper.jpg",
    description:
      "Get ready for laughs and lip-reading in the Whisper Challenge! Test your team's communication skills in this hilarious game of misheard phrases.",
    guidelines: [
      "Arrive at least 30 minutes before the event.",
      "Respect time limits.",
      "Keep the energy fun and lighthearted.",
    ],
    time: "May 15, 2023, 10:00 AM - 5:00 PM",
    venue: "To be announced",
    studentcoordinators: ["Shanmathi - 6379479176", "Nithila - 8122992345"],
    queries: "Need to be added",
    participants: "3 per team",
    participationFee: "₹150",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScPuwo6wrt2Qz0qQGol4ofv4R6geDCPD4F8tdSLux1W1B_5RA/viewform?usp=header",
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
    <section className="relative min-h-screen bg-gradient-to-b from-black via-sky-950 to-black font-sans">
      <Navbar />

      {/* Flamy Blue Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-sky-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.6,
              filter: "blur(4px)",
            }}
            animate={{
              y: ["0%", `${Math.random() * 60 - 30}%`, "0%"],
              x: ["0%", `${Math.random() * 60 - 30}%`, "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-10 py-12 mt-10">
        {/* Event Layout */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-sky-400/40 backdrop-blur-2xl">
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
            <h2 className="absolute bottom-6 left-6 text-4xl sm:text-5xl font-[Cinzel] text-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
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
              className="p-5 bg-gradient-to-br from-sky-500/10 to-sky-700/20 rounded-2xl border border-sky-400/30 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-sky-300 mb-3">
                GUIDELINES
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {event.guidelines.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            </motion.div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
              {/* Time */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #38bdf8" }}
                className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md"
              >
                <span className="font-semibold text-sky-300">Time:</span>{" "}
                {event.time}
              </motion.div>

              {/* Venue + Price */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #38bdf8" }}
                className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md"
              >
                <span className="font-semibold text-sky-300">Venue:</span>{" "}
                {event.venue}
                <br />
                <span className="font-semibold text-sky-300">
                  Participation Fee:
                </span>{" "}
                {event.participationFee}
              </motion.div>

              {/* Participants */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #38bdf8" }}
                className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md flex flex-col items-center justify-start text-m leading-snug"
              >
                <span className="font-semibold text-sky-300 mb-2">
                  Participants:
                </span>
                <span className="text-center">{event.participants}</span>
              </motion.div>

              {/* Coordinators */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #38bdf8" }}
                className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md flex flex-col items-center justify-start text-m leading-snug"
              >
                <span className="font-semibold text-sky-300 mb-2">
                  Student Coordinators:
                </span>
                <div className="flex flex-col gap-1 text-center">
                  {event.studentcoordinators.map((coordinator, index) => (
                    <span key={index}>{coordinator}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <div>
              <div className="mt-10 text-center">
                <div className="flex justify-center mt-4">
                  <motion.button
                    onClick={() => {
                      if (event.formLink) {
                        window.open(event.formLink, "_blank");
                      } else {
                        alert("Google Form link will be updated soon!");
                      }
                    }}
                    className="px-6 py-3 bg-transparent text-sky-400 font-harry text-lg rounded-xl border border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300 hover:text-sky-300 hover:shadow-[0_0_35px_rgba(56,189,248,1)] hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Register Now
                  </motion.button>
                </div>

                <p className="mt-4 text-gray-400 text-sm italic">
                  Click to open the Google Form in a new tab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;