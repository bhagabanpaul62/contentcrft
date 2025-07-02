"use client";

import { useState } from "react";

export default function BookaCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    service: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    // Handle form submission here
  };

  return (
    <section className="min-h-screen bg-[#0e0d0f] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-[#1a191d] p-8 rounded-lg shadow-md border border-[#27272a]">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Book a Free Call
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          

          {/* Service */}
          <div>
            <label htmlFor="service" className="block mb-1 text-sm font-medium">
              Service Needed
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => handleChange("service", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="">Select a service</option>
              <option value="Web Development">Web Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Short Form Video Editing">
                Short Form Video Editing
              </option>
              <option value="Commercial Video Shooting">
                Commercial Video Shooting
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            Book a Call
          </button>
        </form>
      </div>
    </section>
  );
}
