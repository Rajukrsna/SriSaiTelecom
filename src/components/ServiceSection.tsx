"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const amcDetails = {
  title: "Annual Maintenance Contract (AMC)",
  image: "/images/amc.jpg", // Replace with your AMC contract image
  description:
    "Our AMC ensures your intercom and telecom systems are always up and running. Enjoy priority support, regular maintenance visits, and peace of mind with a single annual contract.",
  features: [
    "Priority support & quick response",
    "Regular preventive maintenance",
    "Genuine spare parts included",
    "Transparent pricing, no hidden charges",
  ],
};

const onCallServices = [
  {
    name: "Intercom Standby Replacement",
    description: "Quick replacement of faulty intercom units to minimize downtime.",
    icon: "/images/work.jpg", // Replace with your icon
  },
  {
    name: "Landline Phone Service",
    description: "Expert repair and troubleshooting for all landline phone models.",
    icon: "/images/phone.jpg", // Replace with your icon
  },
  {
    name: "Lining & Wiring",
    description: "Professional installation and repair of telecom wiring and cabling.",
    icon: "/images/wire.jpg", // Replace with your icon
  },
];


const ServiceSection = () => (
  <section className="w-full py-16 px-2 sm:px-0 animate-fade-in">
    {/* Yellow paint stroke background */}
    <div className="relative max-w-6xl mx-auto">
      <div className="absolute inset-0 top-4 h-24 w-full bg-yellow-400 rounded-2xl z-0" style={{clipPath: 'polygon(0 30%, 100% 0, 100% 80%, 0 100%)'}} />
      <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight" style={{letterSpacing: '0.04em'}}>OUR SERVICES</h2>
    </div>
    {/* Service Cards Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 relative">
      {/* AMC Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col p-0 min-h-[320px] hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="w-full h-1/2 flex items-center justify-center bg-blue-50 dark:bg-blue-950 border-b border-blue-100 dark:border-blue-900">
          <img
            src={amcDetails.image}
            alt="AMC Contract"
            className="w-full h-48 object-cover object-center"
          />
        </div>
        <div className="flex flex-col flex-1 items-center px-6 py-6">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 text-center">{amcDetails.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center text-base leading-relaxed">{amcDetails.description}</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mb-4 text-left w-full max-w-xs mx-auto">
            {amcDetails.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <Button className="mt-auto w-full max-w-[180px] mx-auto" size="default">
            Request Service
          </Button>
        </div>
      </div>
      {/* On-Call Service Cards */}
      {onCallServices.map((service, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col p-0 min-h-[420px] hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="w-full h-1/2 flex items-center justify-center bg-blue-50 dark:bg-blue-950 border-b border-blue-100 dark:border-blue-900">
            <img
              src={service.icon}
              alt={service.name}
              className="w-full h-48 object-cover object-center"
            />
          </div>
          <div className="flex flex-col flex-1 items-center px-6 py-6">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 text-center">{service.name}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-base text-center mb-4 leading-relaxed">{service.description}</p>
            <Button className="mt-auto w-full max-w-[180px] mx-auto" size="default">
              Request Service
            </Button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceSection;
