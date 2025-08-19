import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const eventsData = [
  {
    id: 1,
    title: "Annual Quidditch Tournament",
    date: "May 15, 2023",
    description:
      "Join us for the most anticipated sporting event of the year. All four houses will compete for the Quidditch Cup in a display of flying prowess and team strategy.",
    image: "https://i.imgur.com/cZuNgGf.jpg",
    alt: "Quidditch Tournament",
  },
  {
    id: 2,
    title: "The Yule Ball",
    date: "December 25, 2023",
    description:
      "A night of elegant dancing and festive celebration. The Great Hall will be transformed into a winter wonderland for this formal event during the Triwizard Tournament.",
    image: "https://i.imgur.com/jnPzJF5.jpg",
    alt: "Yule Ball",
  },
  {
    id: 3,
    title: "Advanced Potions Workshop",
    date: "October 31, 2023",
    description:
      "An exclusive workshop with Professor Slughorn. Learn the art of brewing complex potions including Felix Felicis. Limited spots available for 6th and 7th year students.",
    image: "https://i.imgur.com/YNvn4Gu.jpg",
    alt: "Potions Class",
  },
  {
    id: 4,
    title: "Advanced Potions Workshop",
    date: "October 31, 2023",
    description:
      "An exclusive workshop with Professor Slughorn. Learn the art of brewing complex potions including Felix Felicis. Limited spots available for 6th and 7th year students.",
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

        <div className="text-center mt-10">
          <button className="px-10 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-teal-400 hover:to-emerald-500 text-black font-[Cinzel] text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.9)]">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
