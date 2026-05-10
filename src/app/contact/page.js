"use client";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Mailto fallback — replace with a form backend when ready
    const mailto = `mailto:mauricio@example.com?subject=${encodeURIComponent(form.subject || "Portfolio inquiry")}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-navy to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">Contact</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-300 max-w-xl text-base leading-relaxed">
            Open to mechanical design contract work in Phoenix / Tempe, and interested in robotics
            research conversations with faculty or researchers at ASU.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-navy mb-4">Contact Info</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <HiLocationMarker className="text-teal-500 flex-shrink-0" size={18} />
                  <span>Phoenix / Tempe, AZ area<br />(Relocating from Sonora, MX)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <HiMail className="text-teal-500 flex-shrink-0" size={18} />
                  <span>Available via LinkedIn or the form</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy mb-4">Connect</h2>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/mauricio-meza/?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-teal-700 transition-colors group"
                >
                  <AiFillLinkedin className="text-2xl text-blue-600 group-hover:text-blue-700" />
                  LinkedIn — Mauricio Meza
                </a>
                <a
                  href="https://github.com/cs-mmeza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-teal-700 transition-colors group"
                >
                  <AiFillGithub className="text-2xl text-gray-800 group-hover:text-black" />
                  GitHub — cs-mmeza
                </a>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg border border-teal-200 p-4">
              <p className="text-sm text-teal-800 leading-relaxed">
                <strong>Best for:</strong> Mechanical design contract work, CSWP-level SolidWorks
                projects, FEA/structural analysis, and robotics research discussions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-teal-50 rounded-lg border border-teal-200 p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold text-navy text-lg mb-2">Message opened in your email client</h3>
                <p className="text-sm text-gray-600">
                  If it didn't open automatically, reach out directly on{" "}
                  <a
                    href="https://www.linkedin.com/in/mauricio-meza/?locale=en_US"
                    className="text-teal-700 underline"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Mechanical design project, research inquiry, etc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Tell me about the project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md font-semibold text-white btn-gradient text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
