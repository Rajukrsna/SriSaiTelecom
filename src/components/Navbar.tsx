"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail as MailIcon, Home, Info, Wrench, PhoneCall } from "lucide-react"; // example icons

// Define your nav items here
const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Wrench },
  { name: "Contact", href: "#contact", icon: PhoneCall },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#157bb0] text-white text-xs sm:text-sm font-medium py-2 px-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-16 fixed top-0 left-0 z-40">
        {/* Sales Enquiry */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
          <span className="font-semibold">Sales Enquiry</span>
          <span className="flex items-center gap-1">
            <Phone size={15} className="inline-block" />
            : +91 - 9790117352
            <Image src="/images/whatsapp.jpg" alt="WhatsApp" width={17} height={17} className="inline-block ml-1" />
          </span>
          <span className="flex items-center gap-1">
            <MailIcon size={15} className="inline-block" />
            : srisaitelecomm@gmail.com
          </span>
        </div>
        {/* Service Enquiry */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
          <span className="font-semibold">Service Enquiry</span>
          <span className="flex items-center gap-1">
            <Phone size={15} className="inline-block" />
            : +91 - 9791540353
            <Image src="/images/whatsapp.jpg" alt="WhatsApp" width={17} height={17} className="inline-block ml-1" />
          </span>
          <span className="flex items-center gap-1">
            <MailIcon size={15} className="inline-block" />
            : srisaitelecomm@gmail.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full fixed top-0 left-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800" style={{ marginTop: '40px' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Sri Sai Telecom Logo"
              width={40}
              height={40}
              className="rounded-full shadow"
              priority
            />
            <span className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300 tracking-tight drop-shadow">
              Sri Sai Telecom
            </span>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 shadow ml-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-5 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-blue-700 dark:bg-blue-300 mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-blue-700 dark:bg-blue-300 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-4 sm:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 px-2 py-1 rounded-lg hover:bg-blue-50/60 dark:hover:bg-blue-900/30"
                >
                  <Icon size={18} className="mb-0.5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800 animate-fade-in z-40">
            <div className="flex flex-col gap-2 py-3 px-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150 px-2 py-2 rounded-lg hover:bg-blue-50/60 dark:hover:bg-blue-900/30"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
