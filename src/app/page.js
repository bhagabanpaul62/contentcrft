"use client";

import React, { useState, useEffect } from "react";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Sparkles,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabase = createClient(
  "https://lgjishgylxoltopzcoev.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnamlzaGd5bHhvbHRvcHpjb2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2OTQ3MTYsImV4cCI6MjA2NDI3MDcxNn0.uv-mJ6K4pwkh-zOO5DcvyRir34rjDr09jD8ZpATJCUo"
);

// Utility to merge CSS classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Button component (Tailwind + forwardRef)
const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Input component
const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

// Main Home component
export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Initialize background audio
    const audio = new Audio("/bgm.mp3");
    audio.volume = 0.2;
    audio.loop = true;

    // Play on first user interaction (click)
    const startAudio = () => {
      audio
        .play()
        .catch((err) =>
          console.warn("Playback prevented until user interacts:", err)
        );
      document.removeEventListener("click", startAudio);
    };
    document.addEventListener("click", startAudio);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", startAudio);
    };
  }, []);

  const handleSubscribe = async () => {
    if (email && email.includes("@")) {
      const { error } = await supabase.from("subscribers").insert([{ email }]);
      if (!error) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        console.error("Supabase insert error:", error.message);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  const FloatingShape = ({ delay = 0, duration = 3 }) => (
    <div
      className="absolute rounded-full bg-gradient-to-r from-white/10 to-gray-300/10 animate-pulse"
      style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex flex-col">
      {/* Your unchanged UI remains here */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <FloatingShape key={i} delay={i * 0.5} duration={3 + i * 0.3} />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
          {/* Logo & Title */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">CC</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                ContentCrft
              </h2>
            </div>
          </div>

          {/* Sparkles Icon */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mb-6 animate-spin-slow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Headings */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
                🚀 Our Website Is
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
                Launching Soon
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              — Stay Tuned! —
            </p>
          </div>

          {/* Social Icons */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex space-x-6">
              {[
                {
                  Icon: Instagram,
                  url: "https://www.instagram.com/contentcrft/",
                },
                {
                  Icon: Facebook,
                  url: "https://www.facebook.com/profile.php?id=61577781204949",
                },
                { Icon: MessageCircle, url: "https://wa.link/tt37l2" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-gray-600 hover:to-gray-700 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                  <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div
            className={`mb-8 w-full max-w-md transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Notified When We Launch
              </h3>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus;border-white focus:ring-white rounded-lg"
                />
                <Button
                  onClick={handleSubscribe}
                  disabled={isSubscribed}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold py-3 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                >
                  {isSubscribed ? (
                    "✓ Subscribed!"
                  ) : (
                    <>
                      Subscribe <Mail className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-gray-300 text-sm mt-2 animate-fade-in">
                 {" Thank you! We'll notify you when we launch."}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`relative z-10 text-center pb-6 transform transition-all duration-1000 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-sm">
            © 2025 ContentCrft. All rights reserved.
          </p>
        </footer>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}
