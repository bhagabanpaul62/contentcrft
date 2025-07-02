"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function ComVideo() {
  return (
    <div className="h-screen py-20 w-full">
    
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      
    </div>
  );
};




const cards = [
  {
    id: 1,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Live the Sound, Feel the Stage
        </p>
        <p className="font-normal text-base text-white">
          Where energy meets emotion
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Experience the magic of live concerts through stunning visuals and
          cinematic storytelling. We capture the crowd, the lights, and the
          passion — turning every moment into a masterpiece.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dctuopwpn/video/upload/v1751371963/uwptt7thagyseof3bc0o.mp4",
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751373921/sywhnb9czgr7g70vzweo.jpg",
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751373920/e05ectteb6tjbmzsx5be.jpg",
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dctuopwpn/image/upload/v1751373920/wegu5633xwgnra8izoh8.jpg",
  },
];
