import React from "react";
import { Ser } from "@/components/services/Ser";
import Link from "next/link";

function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-black px-4 py-20 flex flex-col justify-between items-center text-center">
      {/* Header Section */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold 0 text-purple-400 mb-4">
          Our Creative Portfolio
        </h1>
        <p className=" text-gray-300 text-sm md:text-base">
          Explore our recent works — websites, video shoots, and short-form
          edits crafted for real impact.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className=" w-full max-w-6xl">
        <Ser />
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-sm  text-gray-400">
        Want to work with us?{" "}
        <Link
          href="/bookacall"
          className=" text-purple-400 font-semibold"
        >
          Book a free consultation
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
