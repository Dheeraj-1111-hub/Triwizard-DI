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
    id: 1,
    title: "Wizarding Webcraft",
    date: "May 15, 2023",
    description:
      "Join us for Teams of 2 - 3 participants, Participants create a landing page and can cast “spells” (interactive code effects) on competing teams pages. Creativity and functionality will be scored. (landing page design) most anticipated sporting event of the year. All four houses will compete for the Quidditch Cup in a display of flying prowess and team strategy.",
    image: "https://i.imgur.com/cZuNgGf.jpg",
    alt: "Quidditch Tournament",
  },
  {
    id: 2,
    title: "Python Showdown",
    date: "December 25, 2023",
    description:
      "Single registration, Round 1 – Fast-paced Kahoot-style Python quiz on basics like variables, loops, and data types.Round 2 – Teams race to solve short Python coding challenges (algorithms, pattern printing) in 60–90 seconds. Quickest and most accurate teams advance. (Python quiz + programming) Great Hall will be transformed into a winter wonderland for this formal event during the Triwizard Tournament.",
    image: "https://i.imgur.com/jnPzJF5.jpg",
    alt: "Yule Ball",
  },
  {
    id: 3,
    title: "Creature Canvas",
    date: "October 31, 2023",
    description:
      "single registration, participants will redesign a magical creature orcombine two or more existing creatures from the Harry Potter universe or create an new imaginary one. The design should show the creature’s appearance, habitat, magical powers and a 2-3 line caption on name, magical powers used and purpose. Judged based on creativity, detail (Canva/ Photoshop digital artAn exclusive workshop with Professor Slughorn. Learn the art of brewing complex potions including Felix Felicis. Limited spots available for 6th and 7th year students.",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 4,
    title: "Curse-Breaker",
    date: "October 31, 2023",
    description:
      "Curse-Breakers is an exciting knowledge-based challenge designed to test your wit, speed, and problem-solving skills! The event consists of 3 thrilling rounds, each packed with mind-bending questions that will push you to break the “curse” of confusion. Participants must tackle as many questions as possible to climb the leaderboard. The one who conquers the most questions and scores the highest will be crowned the ultimate Curse-Breaker and walk away with exciting rewards!",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 5,
    title: "Hunt for Horcrux",
    date: "October 31, 2023",
    description:
      " 4 per team, 4 participants will be chained together and need to solve minigames which land on their path to finish lines while being cautious as well of the other competing team. If the gamemaster announces petricus totalus on any team or person , he/she should be freezed and if not , will be forced to the starting line and lose all the horcrux. Collection of 7/4 and finishing the race in shortest time marks the winner (Relay quest)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 6,
    title: "Harry Potter Trivia",
    date: "October 31, 2023",
    description:
      "single registration, General kahoot/menti quiz on trivia from the world of harry potter like completing the dialogues , what comes next etc (quiz)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 7,
    title: "Secure the castle",
    date: "October 31, 2023",
    description:
      " 3-4 per team, Participants need to strategize and securely build their castles while the other defends and attacks the other team's castle. Three teams battle it out proactively till the round lasts and the winner is decided based on the number of cups standing. (attacking/ defending + castle building)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 8,
    title: "The Invisibility Challenge",
    date: "October 31, 2023",
    description:
      " 2 per team. Players will be accommodated in class rooms and will be given roles like wizard , witch , order of the phoenix , death eaters and the game will lay out like a traditional mafia.werewolf game. After each round surviving students get points and in the last players with highest points wins (or till all death eaters are out) (obstacle survival)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 9,
    title: "FIFA",
    date: "October 31, 2023",
    description:
      " 2 per team, A competitive gaming event where players face off in knockout rounds of FIFA to crown the ultimate virtual football champion. (FIFA gaming tournament)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 10,
    title: "BGMI",
    date: "October 31, 2023",
    description:
      "4 per team, A high-intensity esports event where squads battle it out in BGMI, testing teamwork, strategy, and survival skills to emerge as champions. (BGMI esports tournament)",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 11,
    title: "IPL-Auction",
    date: "October 31, 2023",
    description:
      "2- 3 per team , an interactive cricket-themed event where participants bid, strategize, and build their dream IPL squad in a thrilling auction showdown.",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 12,
    title: "Whisper Challenge",
    date: "October 31, 2023",
    description:
      "A fun-filled communication game where teammates try to guess phrases through lip-reading, leading to hilarious misinterpretations",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
];

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              <div className="bg-black/70 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_55px_rgba(16,185,129,0.8)] transition-all duration-500">
                <div className="relative w-full h-56 md:h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="bg-emerald-500/20 inline-block px-3 py-1 rounded-full text-emerald-300 text-sm mb-3 shadow-sm">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-[Cinzel] mb-3 text-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-5 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  <button
                    onClick={() => navigate("/events")}
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
