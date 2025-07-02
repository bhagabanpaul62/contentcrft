"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Bhagaban Paul",
    designation: "Web Developer Head",
    image:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751470055/c1cpxmt9yvssmtdpzyxy.jpg",
  },
  {
    id: 2,
    name: "Sujay Roy",
    designation: "Motion Designer & Video Editor",
    image:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751470041/yenqdnd27lwvwy7nljfs.png",
  },
  {
    id: 3,
    name: "Sanjay Roy",
    designation: "Marketing Head",
    image:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751470041/oh6nzgi7jir7hpkzsqdt.png",
  },
  {
    id: 4,
    name: "Arka Dip Roy",
    designation: "Cinematographer & Drone Pilot",
    image:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751470042/a22gjqhwt6nj2jhs10r5.png",
  },
];

export function ToolTip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
