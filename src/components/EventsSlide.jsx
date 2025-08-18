import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const eventsData = [
  {
    id: 1,
    title: "Annual Quidditch Tournament",
    date: "May 15, 2023",
    description:
      "Join us for the most anticipated sporting event of the year. All four houses will compete for the Quidditch Cup in a display of flying prowess and team strategy.",
    image: "https://i.imgur.com/cZuNgGf.jpg",
    alt: "Quidditch Tournament",
    reverse: false,
  },
  {
    id: 2,
    title: "The Yule Ball",
    date: "December 25, 2023",
    description:
      "A night of elegant dancing and festive celebration. The Great Hall will be transformed into a winter wonderland for this formal event during the Triwizard Tournament.",
    image: "https://i.imgur.com/jnPzJF5.jpg",
    alt: "Yule Ball",
    reverse: true,
    glitch: true,
  },
  {
    id: 3,
    title: "Advanced Potions Workshop",
    date: "October 31, 2023",
    description:
      "An exclusive workshop with Professor Slughorn. Learn the art of brewing complex potions including Felix Felicis. Limited spots available for 6th and 7th year students.",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
    reverse: false,
    glitch: true,
  },
];

const Events = () => {
  const [scrollDir, setScrollDir] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate(); // <-- initialize navigate

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) setScrollDir("down");
      else setScrollDir("up");
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section
      id="events"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-[Cinzel] mb-4 text-center text-emerald-400 tracking-widest relative">
          <span className="relative inline-block animate-pulse drop-shadow-[0_0_30px_rgba(16,185,129,0.9)]">
            Magical Events
          </span>
        </h2>

        <p className="text-center text-gray-400 text-lg md:text-xl mb-16 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          Discover a world of technical challenges and innovative competitions
        </p>

        <div className="flex flex-col items-center gap-16">
          {eventsData.map((event, index) => {
            const controls = useAnimation();
            const offset =
              scrollDir === "down"
                ? index % 2 === 0
                  ? -150
                  : 150
                : index % 2 === 0
                ? 150
                : -150;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: offset }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center bg-black/70 border border-emerald-500/30 
                  rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.3)] 
                  transition-transform duration-500 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(16,185,129,0.8)]
                  max-w-4xl w-full`}
              >
                <div
                  className={`w-full md:w-2/5 relative overflow-hidden group ${
                    event.reverse ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="w-full md:w-3/5 p-8">
                  <div className="bg-emerald-500/20 inline-block px-3 py-1 rounded-full text-emerald-300 text-sm mb-4 shadow-sm">
                    {event.date}
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-[Cinzel] mb-4 text-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] ${
                      event.glitch
                        ? "relative before:content-['" +
                          event.title.replace(/ /g, "_") +
                          "'] before:absolute before:text-emerald-500 before:opacity-30 before:left-[2px] before:top-[2px] after:content-['" +
                          event.title.replace(/ /g, "_") +
                          "'] after:absolute after:text-gray-500 after:opacity-30 after:left-[-2px] after:top-[-2px] animate-[glitch_2.5s_infinite]"
                        : ""
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>
                  {/* <-- Updated button with navigation */}
                  <button
                    onClick={() => navigate("/events")}
                    className="px-6 py-2 border border-emerald-400 text-emerald-300 rounded-lg font-semibold tracking-wide hover:bg-emerald-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)]"
                  >
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-400 hover:to-emerald-500 text-black font-[Cinzel] text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.9)]">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
