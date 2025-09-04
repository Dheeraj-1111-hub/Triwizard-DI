import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

// Event data
const eventDetails = [
  {
    id: 2,
    title: "Python Showdown",
    poster: "/eventimages/Python Showdown.jpg",
    description:
      "Test your coding speed and smarts in this two-round contest—kick off with a rapid-fire Python quiz, then race to crack coding puzzles under the given time.",
    guidelines: [
      "Participation: Solo and Duo event; each participant/team uses one laptop",
      {
        title: "Rounds:",
        subpoints: [
          "Round 1: Rapid-fire Python quiz",
          "Round 2: Coding challenges under time limit",
        ],
      },
      "Allowed: Local Python installation and official documentation",
      "Not Allowed: AI tools, external code repositories, or plagiarism",
      "Submission: Late submissions will not be accepted",
      "Fair Play: Judges’ decision is final",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
    venue: "CSE Lab 2",
    studentcoordinators: ["Sura reddy - 8332831328", "Kamalesh - 9444411410"],
    queries: "Need to be added",
    participants: "1 or 2 per registration",
    participationFee: "₹80 for Solo and ₹140 for Duo",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdNeo1V0QMknTxFzaUwNlmB8GhfgqADKUzDwEoWpxJbkow1DA/viewform?usp=header",
  },
  {
    id: 3,
    title: "Creature Canvas",
    poster: "/eventimages/Creature Canvas.jpg",
    description:
      "Unleash your imagination by redesigning a creature, fusing beings from the Harry Potter universe, or inventing your own! Showcase its look, habitat, and magical powers with a short caption—judged on creativity and detail.",
    guidelines: [
      "Participation: Solo event",
      "Task: Design an original or reimagined magical creature with its traits and lore",
      "Only original work during event time",
      "No AI-generated images or pre-made artworks",
      "Use provided template size (A4 or 1920×1080)",
      "Submission: Must be within the given time; late entries will not be accepted",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
    venue: "BW 107",
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
    poster: "/eventimages/Curse.jpg",
    description:
      "A fast-paced coding face-off where teams of 2 race to spot, identify and fix intentional errors in code snippets across multiple languages.",
    guidelines: [
      "Team Size: 2 players per team",
      "Format: 3 rounds of debugging challenges in C, C++ and Python",
      {
        title: "Round Structure:",
        subpoints: [
          "Round 1: Syntax errors",
          "Round 2: Logical errors",
          "Round 3: Mixed difficulty bugs",
        ],
      },
      "Scoring: Full fix = 10 points; partial fix = 5 points; no negative marks",
      "Restrictions: Internet limited to official documentation; no use of AI tools",
      "Fair Play: No plagiarism, no copying between teams",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
    venue: "CSE Lab 2",
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
    poster: "/eventimages/Hunt.jpg",
    description:
      "Teams of 4 are chained together, racing through mini-games while dodging rival teams and a sudden Petrificus Totalus which freezes the teams! Collect Horcruxes, survive setbacks, and cross the finish line fastest to win.",
    guidelines: [
      "Team Size: 4 players per team",
      "Format: Complete 8 mini-games while tethered together; collect at least 7 Horcrux tokens and assemble the final sigil",
      "Special Rule: Respond to “Petrificus Totalus” freeze commands instantly; failure leads to penalties",
      "Restrictions: No interference with other teams; no outside assistance",
      "Fair Play: Respect opponents and follow instructions; repeated violations lead to disqualification",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
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
    poster: "/eventimages/Trivia.jpg",
    description:
      "A fast-paced Kahoot-style trivia challenge on all things Harry Potter—finish the quotes, guess what comes next, and prove your wizarding wisdom!",
    guidelines: [
      "Participation: Solo event",
      "Format: Online quiz hosted in Kahoot-style; participants need a phone or laptop with internet access",
      "Content: Questions from Harry Potter books and movies, spells, creatures, quotes, and lore",
      "Scoring: Faster correct answers earn higher points; tie-breaker round if needed",
      "Fair Play: No external help or use of reference material",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
    venue: "Auditorium",
    studentcoordinators: [" Rohit S - 9080345650 ", " Sandhya - 9500698899"],
    queries: "Need to be added",
    participants: "1 per registration / Team of 2",
    participationFee: "₹60 per head",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSekV7zRYx21SYzmBhsdIcX1UKWWATkNwNGQ9rU4qUrmP_uiyg/viewform?usp=header",
  },
  {
    id: 7,
    title: "Secure the Castle",
    poster: "/eventimages/Secure.jpg",
    description:
      "Three teams battle it out by building, defending, and attacking castles—strategy meets speed, and the team with the most cups standing claims victory.",
    guidelines: [
      "Team Size: 3 players per team",
      "Setup: Build a castle using provided materials within 5 minutes",
      "Gameplay: After building, teams defend their castle and attack others using soft projectiles",
      "Restrictions: No body shielding, no tampering before the game begins",
      "Scoring: Team with the most structure left after the time ends wins; tie-breaker with sudden attack round",
    ],
    time: "September 10, 2025, 9:00 AM - 3:00 PM",
    venue: "BW 108",
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
    poster: "/eventimages/2.jpg",
    description:
      "Participate in our upcoming FIFA Tournament, a competitive showcase of skill, strategy, and sportsmanship. Experience an engaging event that blends fair play with high-stakes excitement on the virtual pitch.",
    guidelines: [
      "Team Size: 2 players per team",
      "Equipment: Consoles and controllers provided",
      "Match Format: 8 minutes (4 minutes per half), Kick-Off mode, standard settings",
      "Knockout Rules: Golden goal and penalties if required",
      "Team Selection: Any official club or national team of the men's league; no changes after match starts",
      "Pausing: Only when the ball is out of play; misuse leads to penalty",
      "Fair Play: No glitches, no tampering, no unsporting behaviour",
      "Progression: Single-elimination; winners advance to next stage",
    ],
    time: "September 11, 2025, 9:00 AM - 3:00 PM",
    venue: "BW 102",
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
    poster: "/eventimages/3.jpg",
    description:
      "Join our BGMI Tournament for a professional, high-intensity competition showcasing strategic gameplay and fair sportsmanship.",
    guidelines: [
      "Team Size: 2 or 4 players per team",
      "Devices: Players must bring their own smartphones and internet connection; earphones allowed; no controllers or triggers",
      "Game Version: Latest official BGMI version only; hacks lead to disqualification",
      {
        title: "Format:",
        subpoints: [
          "Round 1: Battle Royale on Erangel; scoring based on kills and placement; top 10 teams advance",
          "Round 2: Knockout Player versus Player matches in custom rooms; single elimination",
        ],
      },
      "Match Rules: No teaming with outside squads, no stream sniping, no cheating",
      "Fair Play: Respect referees and opponents; no offensive names or abusive language",
      "Progression: Winners advance through knockouts until the final",
    ],
    time: "September 11, 2025, 9:00 AM - 3:00 PM",
    venue: "CSE Lab 1",
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
    poster: "/eventimages/1.jpg",
    description:
      "Get ready for laughs and lip-reading in the Whisper Challenge! Test your team's communication skills in this hilarious game of misheard phrases.",
    guidelines: [
      "Team Size: 3 players per team",
      "Setup: One player wears headphones with music, others pass the phrase by whispering",
      "Communication: Only one whisper per phrase; no hand signals or repetitions",
      "Scoring: One point per correct phrase; In case of a tie, tie-breaker will decide the winner.",
      "Fair Play: Keep it fun; no shouting, no disrespect to other teams",
    ],
    time: "September 11, 2025, 9:00 AM - 3:00 PM",
    venue: "BW 107",
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
  const location = useLocation();

  const numericId = Number.parseInt(id, 10);
  const currentIndex = eventDetails.findIndex((e) => e.id === numericId);
  const total = eventDetails.length;

  // Redirect if ID not found
  const event = eventDetails[currentIndex];
  useEffect(() => {
    if (currentIndex === -1 && total > 0) {
      navigate(`/events/${eventDetails[0].id}`, { replace: true });
    }
  }, [currentIndex, navigate]);

  // Direction state for animation
  const dirFromState =
    location.state && typeof location.state.dir === "number"
      ? location.state.dir
      : 0;

  // Wrap-around navigation
  const prevEventId = eventDetails[(currentIndex - 1 + total) % total]?.id;
  const nextEventId = eventDetails[(currentIndex + 1) % total]?.id;

  const variants = {
    enter: (direction) => ({
      x: direction === 0 ? 0 : direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === 0 ? 0 : direction > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  if (!event) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-sky-950 to-black font-sans">
      <Navbar />
      {/* Back Button */}
      <div className="absolute top-24 left-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")} // <-- Change this to your EventSlider route
          className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-sky-400 rounded-full border border-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.5)] backdrop-blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </motion.button>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-sky-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.25 + Math.random() * 0.5,
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
        <AnimatePresence mode="wait" custom={dirFromState}>
          <motion.div
            key={numericId}
            custom={dirFromState}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.35 }}
            className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-sky-400/40 backdrop-blur-2xl"
          >
            {/* Poster Section */}
            <motion.div
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="lg:w-1/2 w-full relative"
            >
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-96 lg:h-full object-cover select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <h2 className="absolute bottom-6 left-6 text-4xl sm:text-5xl font-[Cinzel] text-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                {event.title}
              </h2>

              {/* SVG Arrows */}
              {/* Previous Button */}
              <motion.button
                aria-label="Previous event"
                onClick={() =>
                  navigate(`/events/${prevEventId}`, { state: { dir: -1 } })
                }
                whileHover={{ scale: 1.15, rotateY: -10 }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-sky-400"
                style={{
                  textShadow:
                    "0 0 15px rgba(56,189,248,0.8), 0 0 30px rgba(56,189,248,0.6)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              {/* Next Button */}
              <motion.button
                aria-label="Next event"
                onClick={() =>
                  navigate(`/events/${nextEventId}`, { state: { dir: 1 } })
                }
                whileHover={{ scale: 1.15, rotateY: 10 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-sky-400"
                style={{
                  textShadow:
                    "0 0 15px rgba(56,189,248,0.8), 0 0 30px rgba(56,189,248,0.6)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Details Section */}
            <div className="lg:w-1/2 w-full p-8 sm:p-10 space-y-6 bg-black/70 backdrop-blur-xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-gray-300 text-lg leading-relaxed font-light"
              >
                {event.description}
              </motion.p>

              {/* Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="p-5 bg-gradient-to-br from-sky-500/10 to-sky-700/20 rounded-2xl border border-sky-400/30 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-sky-300 mb-3">
                  GUIDELINES
                </h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  {event.guidelines.map((g, i) => (
                    <li key={i}>{typeof g === "string" ? g : g.title}</li>
                  ))}
                </ul>
              </motion.div>
              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
                {/* Time */}
                <div className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md">
                  <span className="font-semibold text-sky-300">Time:</span>{" "}
                  {event.time}
                </div>

                {/* Venue + Fee */}
                <div className="p-4 bg-black/40 rounded-xl border border-sky-400/30 backdrop-blur-md">
                  <span className="font-semibold text-sky-300">Venue:</span>{" "}
                  {event.venue}
                  <br />
                  <span className="font-semibold text-sky-300">
                    Participation Fee:
                  </span>{" "}
                  {event.participationFee}
                </div>

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
              <div className="mt-8 text-center">
                <motion.button
                  onClick={() => {
                    if (event.formLink && event.formLink !== "#") {
                      window.open(event.formLink, "_blank");
                    } else {
                      alert("Google Form link will be updated soon!");
                    }
                  }}
                  className="px-6 py-3 bg-transparent text-sky-400 font-harry text-lg rounded-xl border border-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300 hover:text-sky-300 hover:shadow-[0_0_35px_rgba(56,189,248,1)] hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 220 }}
                >
                  Register Now
                </motion.button>
                <p className="mt-3 text-gray-400 text-sm italic">
                  Click to open the Google Form in a new tab
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventPage;
