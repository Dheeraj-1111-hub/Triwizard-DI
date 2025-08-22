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
    // Hide cursor for small screens (like mobiles)
    const checkScreen = () => {
      setShowCursor(window.innerWidth > 768); // Show only for tablets/desktops
    };

    checkScreen(); // run initially
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
    <div className={`relative min-h-screen ${showCursor ? "cursor-none" : ""}`}>
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

      {/* Wand Cursor (only on desktop) */}
      {showCursor && (
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
      )}
    </div>
  );
};

export default Home;
