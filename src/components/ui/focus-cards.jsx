"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

// 🎥 Reel-Style Card Component
export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(index);
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 2;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-md bg-neutral-900 aspect-[9/16] transition-all duration-300 ease-out",
        "hover:scale-105",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <video
        ref={videoRef}
        src={card.src}
        poster={card.src
          .replace("/upload/", "/upload/so_50p/")
          .replace(".mp4", ".jpg")}
        loop
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className={cn(
          "absolute inset-0 flex items-end px-4 py-3 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-white text-base font-semibold">{card.title}</h2>
      </div>
    </div>
  );
});

Card.displayName = "Card";

// 🧩 FocusCards Reel Layout
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-black w-full min-h-screen py-12 px-4">
     
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full mx-auto">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
