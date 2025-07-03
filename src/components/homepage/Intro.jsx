"use client";

import React, { useRef } from "react";
import Faq from "@/components/homepage/Faq";
import Link from "next/link";

const Motion = [
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
];

const DevProjects = [
  {
    title: "E-Commerce Platform ",
    img: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751448346/uydzds2bckaiebjngia6.png",
    link: "https://beautifyinterior.com/",
  },
  {
    title: "Modern Blogging Website (Frontend Only)",
    img: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751447960/lznn0olarcswnfam3ezd.png",
    link: "https://blog-app-nu-beryl.vercel.app/",
  },
  {
    title: "Portfolio Website",
    img: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751447955/qibwwkamwr0rcaujvd0x.png",
    link: "https://www.bhagaban.fun/",
  },
];

const images = [
  {
    src: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751444983/bg5lmwkrwlczu54fsigc.jpg",
  },
  {
    src: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751444982/wkhgazantfmveqatsjtm.jpg",
  },
  {
    src: "https://res.cloudinary.com/dctuopwpn/image/upload/v1751444981/wugjjckiynpfolqov1lt.jpg",
  },
];

function Intro() {
  const videoRefs = useRef([]);

  const handleHover = (index, play) => {
    const video = videoRefs.current[index];
    if (video) {
      if (play) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build Visual Impact.
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed">
          ContentCrft is a creative studio blending storytelling, design, and
          technology to bring your ideas to life. Whether it's short-form video,
          motion graphics, custom websites, or full-scale commercial shoots — we
          help brands create content that connects and converts.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={`Creative work ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      {/* About */}
      <div className="max-w-5xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-semibold mb-4 text-purple-300">
          More than just visuals
        </h2>
        <p className="text-zinc-400 text-md leading-loose">
          At ContentCrft, we believe every frame should tell a story. Our team
          of creatives, developers, and storytellers work hand-in-hand with
          brands, startups, and entrepreneurs to build high-quality content
          across every platform. From social reels to fully responsive websites
          — we blend creativity and strategy to deliver results.
        </p>
      </div>

      {/* Featured Video */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-center mb-4 text-purple-300">
          Our Latest Work
        </h3>
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
          <video
            src="https://res.cloudinary.com/dctuopwpn/video/upload/v1751371963/uwptt7thagyseof3bc0o.mp4"
            controls
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="text-center mt-6">
          <Link
            href="/portfolio"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-full text-white font-semibold"
          >
            See More Work
          </Link>
        </div>
      </div>

      {/* Motion Design Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold text-center mb-6 text-purple-300">
          Motion Design Showcase
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Motion.map((video, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer"
              onMouseEnter={() => handleHover(i, true)}
              onMouseLeave={() => handleHover(i, false)}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={video.src}
                poster={video.src
                  .replace("/upload/", "/upload/so_50p/")
                  .replace(".mp4", ".jpg")}
                playsInline
                
                className="w-full aspect-[9/16] object-cover"
              />
              <p className="text-center mt-2 text-zinc-200 text-sm">
                
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development Portfolio */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold text-center mb-6 text-purple-300">
          Website Development Showcase
        </h3>
        <p className="text-center text-zinc-400 mb-10 text-sm max-w-2xl mx-auto">
          From landing pages to complex websites — we craft modern, responsive,
          SEO-optimized experiences tailored to your brand’s goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DevProjects.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="block rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="bg-[#1a191d] p-4 text-center">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <Faq />
      </div>
    </section>
  );
}

export default Intro;
