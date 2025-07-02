"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServicesCard } from "./ServicesCard";
// src/data/services.js

// src/data/services.js

export const servicesData = [
    {
      title: "Digital Marketing",
      description: "Promote your brand online through content, SEO, ads, and social media to drive targeted traffic and conversions.",
      steps: [
        "SEO & keyword planning",
        "Social media strategy",
        "Email marketing campaigns",
        "Paid ad optimization",
      ],
    },
    {
      title: "Web Development",
      description: "From landing pages to complex web apps — built fast and scalable.",
      steps: [
        "Responsive design",
        "Modern tech stack",
        "SEO best practices",
        "Performance optimization",
      ],
    },
    {
      title: "Short Form Video Editing",
      description: "Create viral-ready short videos for YouTube Shorts, Reels, and TikTok to maximize engagement.",
      steps: [
        "Hook-driven scripting",
        "Fast-paced transitions",
        "Captions and subtitles",
        "Motion graphics",             // ✅ Added here
        "Platform-optimized formats",
      ],
    },
    {
      title: "Commercial Video Shooting",
      description: "Professional-grade promotional videos shot and edited to showcase your brand and story.",
      steps: [
        "Pre-production planning",
        "Script and shotlist creation",
        "On-location filming",
        "Post-production polish",
      ],
    },
  ];
  
  

function ServicesList() {
  return (
    <section className="bg-[#0e0d0f] w-full px-4 py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-[#d4d4d8] mb-10 max-w-xl mx-auto">
          We combine creativity with technical expertise to deliver solutions
          that move your brand forward.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              steps={service.steps}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
