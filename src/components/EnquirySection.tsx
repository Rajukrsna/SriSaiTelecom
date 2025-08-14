"use client";
import React, { useState } from "react";

const EnquirySection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "sales",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with backend or email service
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto my-20 animate-fade-in">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 tracking-tight">Contact our team</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300 text-center max-w-2xl mb-8">Use the form below to get in touch with our experts. We will respond as soon as possible.</p>
      </div>
      <div className="bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 px-0 py-0 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          {/* Left: Form */}
          <div className="flex-1 p-8 md:p-12">
            {submitted ? (
              <div className="text-green-700 dark:text-green-400 text-center font-semibold py-8">
                Thank you for your enquiry! We will get back to you soon.
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Enquiry Type</label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500"
                    >
                      <option value="sales">Buying a Product</option>
                      <option value="oncall">On-Call Service</option>
                      <option value="amc">AMC (Annual Maintenance Contract)</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-transparent focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-blue-700 text-white text-lg font-semibold shadow hover:bg-blue-800 transition-colors mt-2"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
          {/* Right: Contact Info Sidebar */}
          <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl p-8 flex flex-col gap-6">
            <div>
              <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Quick contacts</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">Phone: <a href="tel:+919962006839" className="text-blue-700 hover:underline">+91 99620 06839</a></div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">Email: <a href="mailto:info@saisaitelecom.com" className="text-blue-700 hover:underline">info@saisaitelecom.com</a></div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Visit us</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Sri Sai Telecom<br/>123 Main Road<br/>Chennai, India</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">Working hours</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Mon - Sat: 9:00am - 7:00pm<br/>Sunday: Closed</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
