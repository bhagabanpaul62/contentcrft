"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Link from "next/link";

export function Review() {
  return (
    <div className="h-auto py-16 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4">
      <h2 className="text-3xl font-semibold text-purple-300 mb-8 text-center">
        What Our Clients Say
      </h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      {/* Buttons */}
      <div className="mt-12 flex gap-4 flex-col sm:flex-row justify-center">
        <Link
          href="/bookacall"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Book Now
        </Link>
        <Link
          href="/services"
          className="bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition py-2 px-6 rounded-full"
        >
          See Our Services
        </Link>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ContentCrft helped us launch a stunning website and brand video that instantly boosted our online credibility.",
    name: "Priya Sharma",
    title: "Founder, The Style Loft",
  },
  {
    quote:
      "We were amazed by the speed and quality. Their motion graphics literally brought our product story to life!",
    name: "Anirudh Mehta",
    title: "Product Lead, TechNest",
  },
  {
    quote:
      "From scripting to editing, their team delivered a professional ad campaign that performed 2x better than our last one.",
    name: "Ritika Verma",
    title: "Marketing Head, FreshGlow",
  },
  {
    quote:
      "Our fashion shoot was transformed into a captivating short-form video reel that went viral on Instagram!",
    name: "Aakash Gupta",
    title: "Creative Director, Urban Mode",
  },
  {
    quote:
      "Their understanding of both design and tech is unmatched. We got a fast, clean, and SEO-optimized site.",
    name: "Maya Desai",
    title: "Owner, LegalEase Co.",
  },
];
