"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer full-service digital marketing — from website development, branding, and SEO to video production and creative strategy.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the Book a Call form on our website. We’ll schedule a free 30-minute consultation to understand your needs.",
  },
  {
    question: "How much does a website or video cost?",
    answer:
      "Pricing depends on the scope and complexity. Check our Pricing page or contact us for a personalized quote.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes! Every business is unique. We’ll work with you to tailor a solution that fits your goals and budget.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "It depends on the size of the project. Websites typically take 1–3 weeks. Videos can range from 3 days to 2 weeks depending on requirements.",
  },
  {
    question: "Can I see samples of your work?",
    answer:
      "Absolutely. Visit our Portfolio section to explore websites, short-form videos, and commercial shoots we've done.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer website maintenance, marketing retainer plans, and on-demand updates as needed.",
  },
  {
    question: "What’s the difference between ContentCrft and freelancers?",
    answer:
      "We’re a full creative studio with a team of specialists. That means higher quality, faster delivery, and end-to-end support.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto mt-20 text-white px-4">
      <h2 className="text-3xl font-semibold text-purple-300 text-center mb-8">
        🔍 Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-zinc-700 rounded-xl p-4 bg-[#1a1a1d] transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="font-medium text-base md:text-lg">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-purple-300" />
              ) : (
                <ChevronDown className="text-purple-300" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm text-zinc-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
