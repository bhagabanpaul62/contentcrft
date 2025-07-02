import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const portfolio = [
  { name: "Web Development", link: "/portfolio/webdevelopment" },
  { name: "Short Form Video Editing", link: "/portfolio/shortfromvideo" },
  {
    name: "Commercial Video Shooting",
    link: "/portfolio/commercialvideoshoot",
  },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
];

function Footer() {
  return (
    <footer className="bg-[#1a191d] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ContentCrft</h2>
          <p className="text-sm text-zinc-300 max-w-xs">
            We build modern websites & creative campaigns to elevate your brand
            online.
          </p>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Portfolio</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            {portfolio.map((item, i) => (
              <li key={i}>
                <Link
                  href={`${item.link}`}
                  className="hover:text-purple-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.link}`}
                  className="hover:text-purple-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-5">
            <Link
              href="https://www.instagram.com/contentcrft/"
              target="_blank"
              className="hover:text-purple-300 transition"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61577781204949"
              target="_blank"
              className="hover:text-purple-300 transition"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-400 px-4">
        © {new Date().getFullYear()} ContentCrft. All rights reserved. <br />
        <span className="text-purple-200">contentcrft.official@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;
