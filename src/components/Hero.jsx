import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // speaker icons

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Smooth scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById("events");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.play(); // ensure it plays with sound
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-black"
      >
        <source src="/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Responsive Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-25 right-5 md:right-10 z-20 bg-green-500/80 text-black p-3 md:p-4 rounded-full flex items-center justify-center hover:bg-green-400 transition shadow-lg"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-black" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-black" />
        )}
      </button>

      {/* Scroll Down Arrow */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
        onClick={scrollToNext}
      >
        <span className="material-symbols-outlined text-4xl text-green-400/80">
          keyboard_double_arrow_down
        </span>
      </div>
    </div>
  );
};

export default HeroVideo;
