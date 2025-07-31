"use client";
import React, { useState } from "react";
// Dummy data for carousel and testimonials
const carouselImages = [
  "/images/exp1.jpg",
  "/images/exp2.jpg",
  "/images/exp3.jpg",
];

const ExperienceSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  // Carousel auto-advance
  React.useEffect(() => {
    const timer = setInterval(() => setCarouselIdx((i) => (i + 1) % carouselImages.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto my-16 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 md:p-14 border border-gray-100 dark:border-gray-800">
        {/* Left: Heading, description, stats */}
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <div className="mb-2 text-sm text-blue-700 font-semibold uppercase tracking-wide">About Us</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100 leading-tight">Empowering Communication for Everyone</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">Sri Sai Telecom is committed to delivering innovative intercom and security solutions for homes, businesses, and communities. Our experienced team ensures reliable support and customer satisfaction at every step.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col items-start">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">15+</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">Years in Business</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">1200+</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">Happy Customers</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">50+</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">Corporate Clients</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">24/7</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">Support</span>
            </div>
          </div>
        </div>
        {/* Right: Carousel */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md aspect-[4/3] bg-blue-100 dark:bg-blue-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-md relative">
            {carouselImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Experience ${idx + 1}`}
                className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-700 ${carouselIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ pointerEvents: carouselIdx === idx ? 'auto' : 'none' }}
              />
            ))}
            {/* Optional: Manual navigation arrows */}
            {/*
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full p-1 shadow hover:bg-white/90 dark:hover:bg-gray-700/90"
              onClick={() => setCarouselIdx((carouselIdx - 1 + carouselImages.length) % carouselImages.length)}
              aria-label="Previous"
            >
              <span className="text-xl">&#8592;</span>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full p-1 shadow hover:bg-white/90 dark:hover:bg-gray-700/90"
              onClick={() => setCarouselIdx((carouselIdx + 1) % carouselImages.length)}
              aria-label="Next"
            >
              <span className="text-xl">&#8594;</span>
            </button>
            */}
            {/* Dots navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full border border-blue-400 dark:border-blue-300 transition-all duration-300 ${carouselIdx === idx ? 'bg-blue-600 dark:bg-blue-300 scale-110' : 'bg-white dark:bg-gray-700'}`}
                  onClick={() => setCarouselIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{ outline: 'none' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// No changes needed, but future Button imports should use @/components/ui/button
export default ExperienceSection;
