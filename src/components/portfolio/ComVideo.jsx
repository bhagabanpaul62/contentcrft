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
  
];
