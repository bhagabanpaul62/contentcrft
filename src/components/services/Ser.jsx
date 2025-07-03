"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Ser() {
  return (
    <div className="py-20 px-4 w-full overflow-x-auto">
      <div className="flex flex-row gap-6 w-max h-full ml-auto mr-auto">
        {/* Web Development */}
        <Link href="/portfolio/webdevelopment" className="shrink-0 w-[300px]">
          <Card title="Web Development">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
        </Link>

        {/* Motion Graphics */}
        <Link href="/portfolio/shortfromvideo" className="shrink-0 w-[300px]">
          <Card title="Motion Graphics">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
        </Link>

        {/* Commercial Video */}
        <Link
          href="/portfolio/commercialvideoshoot"
          className="shrink-0 w-[300px]"
        >
          <Card title="Commercial Video">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[109, 40, 217]]}
            />
          </Card>
        </Link>
      </div>
    </div>
  );
}

const Card = ({ title, children }) => {
  const [hovered, setHovered] = React.useState(false);

  // Detect mobile
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      setHovered(true); // force hover always ON for mobile
    }
  }, [isMobile]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        if (!isMobile) setHovered(false);
      }}
      className="relative border border-white/10 group/canvas-card flex items-center justify-center rounded-lg p-4 h-[26rem] w-full"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-5 w-5 -top-3 -left-3 text-white" />
      <Icon className="absolute h-5 w-5 -top-3 -right-3 text-white" />
      <Icon className="absolute h-5 w-5 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-5 w-5 -bottom-3 -right-3 text-white" />

      {/* Background Animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 text-center">
        {/* Show logo on desktop only when not hovered */}
        <div
          className={`transition duration-200 ${
            hovered || isMobile ? "opacity-0 -translate-y-4" : "opacity-100"
          } flex items-center justify-center`}
        >
          {!isMobile && (
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          )}
        </div>

        {/* Show title on hover or mobile */}
        <h2
          className={`text-xl font-bold text-white mt-4 transition duration-200 ${
            hovered || isMobile
              ? "opacity-100 -translate-y-2"
              : "opacity-0 translate-y-0"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
