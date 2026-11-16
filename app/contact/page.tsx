"use client";

import React, { useState } from "react";
import FAQAccordion, { FAQItemProps } from "@/components/FAQAccordion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const faqs: FAQItemProps[] = [
    {
      question: "How do I get started with SurakshithNet?",
      answer: "Simply download the app from our website or app stores, create an account, and follow the setup wizard to protect your family.",
    },
    {
      question: "Is it really free?",
      answer: "Yes! Both SurakshithNet and YuvaMitra are completely free for all Indian users with no hidden charges or premium tiers.",
    },
    {
      question: "What devices are supported?",
      answer: "Our apps work on Android and iOS smartphones and tablets. Desktop versions are coming soon.",
    },
    {
      question: "How do I request institutional solutions?",
      answer: "Fill out the contact form above selecting 'Institutional Solutions' or email us directly at info@surakshithnet.in",
    },
    {
      question: "Do you offer training for schools?",
      answer: "Yes! We provide free training sessions and workshops for educational institutions. Contact us to schedule.",
    },
    {
      question: "How can I partner with Defencreation?",
      answer: "We welcome partnerships with NGOs, schools, and organizations. Reach out via the contact form or email us.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base sm:text-xl text-[#00F0FF] max-w-2xl mx-auto font-medium">
          We&apos;d love to hear from you
        </p>
      </section>

      {/* Contact Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
            <h2 className="font-orbitron font-bold text-2xl text-white light:text-slate-900 mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-[#00FF9D] mx-auto" />
                <h3 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
                  Thank You!
                </h3>
                <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base">
                  Your message has been received. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/15 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                      Organization/Institution
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050A14] border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="surakshithnet">SurakshithNet App</option>
                    <option value="yuvamitra">YuvaMitra App</option>
                    <option value="institutional">Institutional Solutions</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white light:text-slate-900 outline-none focus:border-[#00F0FF] transition-all text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-xl shrink-0">
                  📧
                </div>
                <div className="space-y-1">
                  <h4 className="font-orbitron font-bold text-sm text-white light:text-slate-900">
                    Email
                  </h4>
                  <p className="text-sm">
                    <a href="mailto:info@surakshithnet.in" className="text-[#00F0FF] hover:underline">
                      info@surakshithnet.in
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="mailto:support@surakshithnet.in" className="text-[#00F0FF] hover:underline">
                      support@surakshithnet.in
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-xl shrink-0">
                  📱
                </div>
                <div className="space-y-1">
                  <h4 className="font-orbitron font-bold text-sm text-white light:text-slate-900">
                    Phone
                  </h4>
                  <p className="text-sm">
                    <a href="tel:+911234567890" className="text-[#00FF9D] hover:underline">
                      +91 123 456 7890
                    </a>
                  </p>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    Mon - Fri: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF00FF]/10 border border-[#BF00FF]/30 flex items-center justify-center text-xl shrink-0">
                  🏢
                </div>
                <div className="space-y-1">
                  <h4 className="font-orbitron font-bold text-sm text-white light:text-slate-900">
                    Office
                  </h4>
                  <p className="text-sm text-slate-300 light:text-slate-700">Defencreation</p>
                  <p className="text-sm text-slate-400 light:text-slate-600">India</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-card rounded-2xl p-6 space-y-3">
                <h4 className="font-orbitron font-bold text-sm text-white light:text-slate-900">
                  Follow Us
                </h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:border-[#00F0FF] transition-all">
                    📘
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:border-[#00F0FF] transition-all">
                    🐦
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:border-[#00F0FF] transition-all">
                    💼
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:border-[#00F0FF] transition-all">
                    📸
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}
