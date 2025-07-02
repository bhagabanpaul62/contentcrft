"use client";

import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";

// 🔁 Reusable component
export function ServicesCard({ title, steps = [], description }) {
  return (
    <CardSpotlight className="h-full w-full max-w-md bg-[#232229] border border-[#27272a] p-6 rounded-2xl shadow relative">
      <h3 className="text-2xl font-bold text-white relative z-20">{title}</h3>

      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none space-y-2">
          {steps.map((step, index) => (
            <Step key={index} title={step} />
          ))}
        </ul>
      </div>

      {description && (
        <p className="text-neutral-400 mt-4 relative z-20 text-sm">
          {description}
        </p>
      )}

      <div className="mt-6 relative z-20">
        <Link
          href="/bookacall"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#a78bfa] rounded hover:bg-white hover:text-black transition"
        >
          Book Now
        </Link>
      </div>
    </CardSpotlight>
  );
}

// ✔️ One step with check icon
const Step = ({ title }) => (
  <li className="flex gap-2 items-start">
    <CheckIcon />
    <p className="text-white">{title}</p>
  </li>
);

// ✔️ Check icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-[#a78bfa] mt-1 shrink-0"
  >
    <path
      d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318-.001.324c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017.642.005.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616.005-.642-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017-.318-.004-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.292 3.293-3.292z"
      strokeWidth="0"
    />
  </svg>
);
