"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#3f3d56] text-gray-200 pt-10 pb-4 w-full mt-16">
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-600 pb-8 px-4 md:px-16">
      {/* Company */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-white">Sri Sai Telecom</h3>
        <p className="text-sm text-gray-400 mb-2">Empowering your connectivity with innovative intercom solutions, reliable support, and a commitment to excellence for homes, businesses, and communities.</p>
      </div>
      {/* Products */}
      <div>
        <h4 className="text-md font-semibold mb-3 text-white">Products</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">IP Intercom</a></li>
          <li><a href="#" className="hover:underline">Analog Intercom</a></li>
          <li><a href="#" className="hover:underline">Video Door Phone</a></li>
          <li><a href="#" className="hover:underline">CCTV</a></li>
          <li><a href="#" className="hover:underline">EPABX</a></li>
        </ul>
      </div>
      {/* Useful Links */}
      <div>
        <h4 className="text-md font-semibold mb-3 text-white">Useful Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Your Account</a></li>
          <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
          <li><a href="#" className="hover:underline">Shipping Rates</a></li>
          <li><a href="#" className="hover:underline">Help</a></li>
        </ul>
      </div>
      {/* Contact */}
      <div>
        <h4 className="text-md font-semibold mb-3 text-white">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} /> New York, NY 10112, US</li>
          <li className="flex items-center gap-2"><Mail size={16} /> info@saisaitelecom.com</li>
          <li className="flex items-center gap-2"><Phone size={16} /> +91 99620 06839</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-6 px-4 md:px-0">© {new Date().getFullYear()} Sri Sai Telecom. All rights reserved.</div>
  </footer>
);

export default Footer;
