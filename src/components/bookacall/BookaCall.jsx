"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://nbzqhzybwwmtplrficsr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ienFoenlid3dtdHBscmZpY3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNjg3OTksImV4cCI6MjA2Njg0NDc5OX0.GhDQW7oDsMlGmq94rbBvGVn5VjswTtNEmBZOuxV4sK0"
);

export default function BookaCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const { error } = await supabase.from("book_a_service").insert([
      {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_needed: formData.service,
      },
    ]);

    if (error) {
      setError("Failed to book a call. Try again later.");
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "" });
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#0e0d0f] text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-[#1a191d] p-8 rounded-lg shadow-md border border-[#27272a]">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Book a Free Call
        </h1>

        {success && (
          <p className="text-green-400 text-center mb-4">
            🎉 Your request has been submitted!
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="service" className="block mb-1 text-sm font-medium">
              Service Needed
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => handleChange("service", e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-[#232229] text-white border border-[#27272a] focus:outline-none"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            {loading ? "Booking..." : "Book a Call"}
          </button>
        </form>
      </div>
    </section>
  );
}
