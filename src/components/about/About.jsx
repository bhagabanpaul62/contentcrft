"use client";

import React from "react";
import { ToolTip } from "@/components/about/ToolTip";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="pt-24 px-6 md:px-16 lg:px-24 bg-[#1a191d] text-white min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white-300"
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg text-zinc-300 leading-relaxed"
          >
            ContentCrft is a full-service creative agency that helps modern
            brands grow with impactful digital strategies, stunning websites,
            and compelling video production.
          </motion.p>
        </div>

        {/* Tooltip or Interactive Component */}
        <div className="mt-12 flex justify-center">
          <ToolTip />
        </div>

        {/* Optional: Add Values or Mission Sections */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Creative First",
              desc: "We prioritize bold design and storytelling that stands out and converts.",
            },
            {
              title: "Tech Savvy",
              desc: "We use the latest tools (Next.js, Tailwind, AI) to scale results fast.",
            },
            {
              title: "Client-Centered",
              desc: "Your brand's voice, needs, and goals are at the heart of what we build.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
            
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#232229] p-6 rounded-2xl shadow-md border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
