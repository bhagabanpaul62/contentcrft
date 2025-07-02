"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export function ShortVideo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751266132/q3dagqlkenwwrybkyfys.mp4",
    },
    {
      title: "Valley of Life",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751266131/hhvuj4c6iady1bcbmai2.mp4",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751266121/xhs5sojpxcyftub0xyh8.mp4",
    },
    {
      title: "Camping is for pros",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751266119/c1tloqv5tzd3t0rpyt52.mp4",
    },
    {
      title: "The Road Not Taken",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751266113/pxsbosxhgrq9nroexy4l.mp4",
    },
    {
      title: "The Road Not Taken",
      src: "https://res.cloudinary.com/dctuopwpn/video/upload/v1751371964/aeu16vpeg3zg4vqvhzfp.mp4",
    },
  ];

  return (
    <main className="bg-black min-h-screen pt-24 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-400 mb-4">
          Motion Graphics Portfolio
        </h1>
        <p className="text-zinc-300 text-base md:text-lg">
          Explore our dynamic motion design works — crafted for brands, promos,
          and visual storytelling that moves your audience.
        </p>
      </div>

      <FocusCards cards={cards} />
    </main>
  );
}
