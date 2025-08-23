import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/Hero";
import Events from "../components/EventsSlide";
import ContactUs from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setShowCursor(window.innerWidth > 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [showCursor]);

  return (
    <div
      className={`relative min-h-screen ${
        showCursor ? "cursor-none" : ""
      } bg-gradient-to-b from-black via-sky-950 to-black`}
    >
      {/* Floating Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroVideo />

      {/* Events Section */}
      <div id="events">
        <Events />
      </div>

      {/* Contact Us Section */}
      <div id="contact-us">
        <ContactUs />
      </div>

      <Footer />

      {/* Wand Cursor + Flamy Blue Aura */}
      {showCursor && (
        <>
          {/* Wand */}
          <img
            src="/cursor.png"
            alt="wand cursor"
            className="pointer-events-none fixed w-12 h-12 z-[100]"
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-30%, -30%)",
            }}
          />

          
        </>
      )}

      {/* Keyframes for flame effect */}
      <style jsx>{`
        @keyframes flamePulse {
          0% {
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.6),
              0 0 25px rgba(59, 130, 246, 0.4),
              0 0 45px rgba(96, 165, 250, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.9),
              0 0 40px rgba(59, 130, 246, 0.7),
              0 0 70px rgba(147, 197, 253, 0.6);
          }
          100% {
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.6),
              0 0 25px rgba(59, 130, 246, 0.4),
              0 0 45px rgba(96, 165, 250, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
