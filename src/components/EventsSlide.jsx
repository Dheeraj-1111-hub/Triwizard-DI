import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const eventsData = [
  {
    id: 2,
    title: "Python Showdown",
    date: "September 10, 2025",
    description:
      "Test your coding speed and smarts in this two-round contest—kick off with a rapid-fire Python quiz, then race to crack coding puzzles under the given time.",
    image: "public/TRI WIZARD EVENT POSTERS/TECH.jpg",
    alt: "Python Showdown",
  },
  {
    id: 3,
    title: "Creature Canvas",
    date: "September 10, 2025",
    description:
      "Unleash your imagination by redesigning a creature, fusing beings from the Harry Potter universe, or inventing your own! Showcase its look, habitat, and magical powers with a short caption—judged on creativity and detail.",
    image: "public/TRI WIZARD EVENT POSTERS/TECH (2).jpg",
    alt: "Creature Canvas",
  },
  {
    id: 4,
    title: "Curse-Breakers",
    date: "September 10, 2025",
    description:
      "A fast-paced coding face-off where teams of 2 race to spot , identify and fix intentional errors in code snippets across multiple languages",
    image: "public/TRI WIZARD EVENT POSTERS/Tech events (1).jpg",
    alt: "Curse Breakers",
  },
  {
    id: 5,
    title: "Hunt for Horcrux",
    date: "September 10, 2025",
    description:
      "Teams of 4 are chained together, racing through mini-games while dodging rival teams and a sudden Petrificus Totalus which freezes the teams! Collect Horcruxes, survive setbacks, and cross the finish line fastest to win",
    image: "public/TRI WIZARD EVENT POSTERS/NON TECH (3).jpg",
    alt: "Hunt for Horcrux",
  },
  {
    id: 6,
    title: "Harry Potter Trivia",
    date: "September 10, 2025",
    description:
      "A fast-paced Kahoot-style trivia challenge on all things Harry Potter—finish the quotes, guess what comes next, and prove your wizarding wisdom!",
    image: "public/TRI WIZARD EVENT POSTERS/NON TECH (2).jpg",
    alt: "Harry Potter Trivia",
  },
  {
    id: 7,
    title: "Secure the castle",
    date: "September 10, 2025",
    description:
      "Three teams battle it out by building, defending, and attacking castles—strategy meets speed, and the team with the most cups standing claims victory.",
    image: "public/TRI WIZARD EVENT POSTERS/NON TECH.jpg",
    alt: "Secure the castle",
  },
  {
    id: 9,
    title: "FIFA",
    date: "September 11, 2025",
    description:
      " Participate in our upcoming FIFA Tournament, a competitive showcase of skill, strategy, and sportsmanship. Experience an engaging event that blends fair play with high-stakes excitement on the virtual pitch.",
    image: "public/TRI WIZARD EVENT POSTERS/2.jpg",
    alt: "FIFA",
  },
  {
    id: 10,
    title: "BGMI",
    date: "September 11, 2025",
    description:
      "Join our BGMI Tournament for a professional, high-intensity competition showcasing strategic gameplay and fair sportsmanship.",
    image: "public/TRI WIZARD EVENT POSTERS/3.jpg",
    alt: "BGMI",
  },
  {
    id: 12,
    title: "Whisper Challenge",
    date: "September 11, 2025",
    description:
      "Get ready for laughs and lip-reading in the Whisper Challenge! Test your team's communication skills in this hilarious game of misheard phrases",
    image: "public/TRI WIZARD EVENT POSTERS/1.jpg",
    alt: "Whisper Challenge",
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <section
      id="events"
      className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-[Cinzel] mb-6 text-center text-emerald-400 tracking-widest relative drop-shadow-[0_0_40px_rgba(16,185,129,0.9)]">
          Magical Events
        </h2>
        <p className="text-center text-gray-400 text-lg md:text-xl mb-12">
          Discover a world of technical challenges and innovative competitions
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="group bg-black/70 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_55px_rgba(16,185,129,0.8)] transition-all duration-500 max-w-[350px] mx-auto">
                {/* Poster */}
                <div className="relative w-full h-[450px] md:h-[520px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Date & Title at Bottom */}
                  <div className="absolute bottom-4 left-0 w-full text-center px-3">
                    <div className="bg-emerald-500/20 inline-block px-3 py-1 rounded-full text-emerald-300 text-sm shadow-sm mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-[Cinzel] text-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Content on Hover */}
                <div className="p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute bottom-0 left-0 w-full bg-black/80">
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {event.description}
                  </p>
                  <button
                    onClick={() => navigate(`/events/${event.id}`)}
                    className="px-6 py-2 border border-emerald-400 text-emerald-300 rounded-lg font-semibold tracking-wide hover:bg-emerald-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)]"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
