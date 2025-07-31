"use client";
import React, { useState } from "react";

import Navbar from "./Navbar";
import ProductsSection from "./ProductsSection";
import ServiceSection from "./ServiceSection";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    className="w-full min-h-[420px] flex items-center justify-center relative mb-12 animate-fade-in"
    style={{
      backgroundImage: 'url(/images/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
    }}
  >
    <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/60 backdrop-blur-sm" />
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 px-4 py-12">
      {/* Left: Heading, description, CTA, stats */}
      <div className="flex-1 flex flex-col justify-center items-start md:items-start text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg leading-tight">Empowering Connectivity for Everyone</h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-4 font-medium max-w-xl">Sri Sai Telecom delivers innovative intercom and security solutions for homes, businesses, and communities. Experience reliable support and a commitment to excellence.</p>
        <div className="flex gap-4 mb-6">
          <a href="#contact" className="px-6 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors text-base">Get Started</a>
          <a href="#products" className="px-6 py-2 rounded-full border border-blue-700 text-blue-700 dark:text-blue-300 font-semibold bg-white dark:bg-gray-950 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-base">View Products</a>
        </div>
        <div className="flex flex-wrap gap-6 mt-2">
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
        </div>
      </div>
      {/* Right: Hero image */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-full max-w-md aspect-[4/3] bg-blue-100 dark:bg-blue-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-md border-4 border-white dark:border-gray-900">
          <img
            src="/images/hero-person.jpg"
            alt="Sri Sai Telecom Hero"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);


// Partner logos for the carousel
const partnerLogos = [
  { src: "/images/bpl.png", alt: "Jonex" },
  { src: "/images/beetel.jpg", alt: "ACE Gallagher" },
  { src: "/images/matrix.png", alt: "Mustadam" },
  { src: "/images/panasonic.png", alt: "ARX" },
  { src: "/images/vel.png", alt: "dolce salato" },
  { src: "/images/syntel.jpg", alt: "ZATCA" },
  
  // Add more as needed
];

const LandingSection = () => {
  const [activeTab, setActiveTab] = useState<'sales' | 'service'>('sales');
  // For auto-scrolling carousel (requestAnimationFrame for smoothness)
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const running = React.useRef(true);
  React.useEffect(() => {
    let frame: number;
    const animate = () => {
      if (scrollRef.current && running.current) {
        scrollRef.current.scrollLeft += 0.7; // Adjust speed as needed
        // Reset scroll to start for infinite effect
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full min-h-screen pt-16 sm:pt-0 flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <HeroSection />

      {/* Partner/Company Logo Carousel */}
      <div className="w-full flex flex-col items-center mb-8 px-2">
        <div className="text-center text-gray-700 dark:text-gray-200 text-base font-medium mb-2">
          Trusted by <span className="text-blue-700 font-bold">5,000+ </span>companies & partners
        </div>
        <div
          className="w-full max-w-4xl overflow-hidden relative"
          onMouseEnter={() => { running.current = false; }}
          onMouseLeave={() => { running.current = true; }}
        >
          <div
            ref={scrollRef}
            className="flex gap-10 py-3 px-2 whitespace-nowrap"
            style={{ minWidth: '100%' }}
          >
            {/* Duplicate logos for infinite effect */}
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center h-14 min-w-[120px] max-w-[140px] px-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle at the top, free-floating */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner border border-gray-200 dark:border-gray-700 transition-all">
          <Button
            variant={activeTab === 'sales' ? 'default' : 'outline'}
            className={`relative z-10 font-semibold px-8 py-2 rounded-full transition-all duration-200 ${activeTab === 'sales' ? 'shadow-md' : ''}`}
            style={{ boxShadow: activeTab === 'sales' ? '0 2px 12px 0 rgba(0,0,0,0.06)' : undefined }}
            onClick={() => setActiveTab('sales')}
          >
            Sales
          </Button>
          <Button
            variant={activeTab === 'service' ? 'default' : 'outline'}
            className={`relative z-10 font-semibold px-8 py-2 rounded-full transition-all duration-200 ${activeTab === 'service' ? 'shadow-md' : ''}`}
            style={{ boxShadow: activeTab === 'service' ? '0 2px 12px 0 rgba(0,0,0,0.06)' : undefined }}
            onClick={() => setActiveTab('service')}
          >
            Service
          </Button>
          <span
            className="absolute top-1 left-1 h-[calc(100%-8px)] w-1/2 rounded-full bg-blue-100 dark:bg-blue-900 transition-all duration-300"
            style={{
              transform: activeTab === 'sales' ? 'translateX(0)' : 'translateX(100%)',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Main content area changes completely based on tab */}
      {activeTab === 'sales' ? (
        <ProductsSection />
      ) : (
        <ServiceSection />
      )}
    </div>
  );
}

export default LandingSection;
