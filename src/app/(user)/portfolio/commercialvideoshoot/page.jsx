import { ComVideo } from "@/components/portfolio/ComVideo";
import React from "react";

function Commercialvideoshoot() {
  return (
    <div className="w-full min-h-screen bg-black  px-4 py-20 flex flex-col justify-between items-center text-center">
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-400 mb-4">
          Commercial Video Shoots
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          High-quality product, ad, and business videos that tell your story
          with clarity and impact.
        </p>
      </div>

      {/* Video Component */}
      <div className=" w-full max-w-6xl">
        <ComVideo />
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-sm text-gray-400">
        Have a product or brand to promote?{" "}
        <span className="text-purple-400 font-semibold">
          Let us bring it to life!
        </span>
      </div>
    </div>
  );
}

export default Commercialvideoshoot;
