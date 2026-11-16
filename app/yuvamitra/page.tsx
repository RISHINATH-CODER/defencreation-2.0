import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, Award, Compass, Heart, Users, PenTool, DownloadCloud, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "YuvaMitra - Youth Empowerment Platform - Defencreation",
  description: "A comprehensive platform offering free digital books, reading improvement tools, and personal development resources designed specifically for Indian teenagers.",
};

export default function YuvaMitraPage() {
  const features = [
    {
      icon: "📚",
      title: "Free Digital Library",
      desc: "Access thousands of books across genres - from classics to contemporary literature, all available for free to Indian youth.",
    },
    {
      icon: "📖",
      title: "Reading Improvement Tools",
      desc: "Built-in features to enhance reading speed, comprehension, and vocabulary with personalized learning paths.",
    },
    {
      icon: "🎯",
      title: "Personal Development",
      desc: "Curated content on life skills, career guidance, mental health, and personal growth tailored for teenagers.",
    },
    {
      icon: "🏆",
      title: "Achievement Tracking",
      desc: "Set reading goals, track progress, and earn badges as you complete books and learning milestones.",
    },
    {
      icon: "💡",
      title: "Educational Resources",
      desc: "Study materials, exam preparation guides, and educational content aligned with Indian curriculum standards.",
    },
    {
      icon: "🌟",
      title: "Skill Development",
      desc: "Learn new skills through interactive courses on coding, design, communication, and more.",
    },
    {
      icon: "👥",
      title: "Community Features",
      desc: "Connect with fellow readers, join book clubs, and participate in discussions in a safe, moderated environment.",
    },
    {
      icon: "🎨",
      title: "Creative Expression",
      desc: "Share your own stories, poems, and creative writing with the YuvaMitra community.",
    },
    {
      icon: "📱",
      title: "Offline Access",
      desc: "Download books and resources to read offline, perfect for areas with limited internet connectivity.",
    },
  ];

  const benefits = [
    {
      icon: "🆓",
      title: "Completely Free",
      desc: "No subscriptions, no hidden costs. All content and features available to every Indian teenager at zero cost.",
    },
    {
      icon: "🇮🇳",
      title: "Made for India",
      desc: "Content curated specifically for Indian youth, including regional language support and culturally relevant material.",
    },
    {
      icon: "🔒",
      title: "Safe Environment",
      desc: "Moderated platform ensuring a safe, positive space for learning and interaction without harmful content.",
    },
    {
      icon: "📈",
      title: "Track Progress",
      desc: "Monitor your learning journey with detailed analytics and personalized recommendations.",
    },
  ];

  const categories = [
    { icon: "📖", title: "Literature & Fiction" },
    { icon: "🔬", title: "Science & Technology" },
    { icon: "🎭", title: "Arts & Culture" },
    { icon: "💼", title: "Career & Skills" },
    { icon: "🧠", title: "Mental Wellness" },
    { icon: "🌍", title: "History & Geography" },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BF00FF]/15 border border-[#BF00FF]/40 text-[#BF00FF] text-xs font-semibold uppercase tracking-wider">
              Youth Empowerment
            </div>
            <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
              YuvaMitra
            </h1>
            <p className="text-lg sm:text-2xl text-[#BF00FF] font-medium">
              Your companion for learning and growth
            </p>
            <p className="text-slate-300 light:text-slate-600 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed">
              A comprehensive platform offering free digital books, reading improvement tools, and personal
              development resources designed specifically for Indian teenagers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#BF00FF] to-[#7c00a6] text-white shadow-[0_0_20px_rgba(191,0,255,0.4)] hover:opacity-95 transition-all text-center"
              >
                Join Now
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-[#BF00FF] text-white light:text-slate-900 bg-white/5 hover:bg-white/10 transition-all text-center"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Library Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 rounded-[40px] border-4 border-white/20 bg-[#020408] p-4 shadow-2xl shadow-[#BF00FF]/20 relative">
              <div className="w-24 h-4 bg-white/20 rounded-full mx-auto mb-4" />
              <div className="rounded-3xl bg-[#050A14] p-5 space-y-4 border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📚</span>
                    <h4 className="font-orbitron font-bold text-sm text-white">Library</h4>
                  </div>
                  <span className="text-xs text-[#00FF9D] font-mono">10,000+ BOOKS</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4">
                  <div className="h-28 rounded-xl bg-gradient-to-t from-[#BF00FF]/40 to-[#00F0FF]/30 border border-white/10 flex flex-col justify-end p-2">
                    <div className="w-full h-1.5 bg-white/40 rounded-full" />
                  </div>
                  <div className="h-28 rounded-xl bg-gradient-to-t from-[#00F0FF]/40 to-[#00FF9D]/30 border border-white/10 flex flex-col justify-end p-2">
                    <div className="w-full h-1.5 bg-white/40 rounded-full" />
                  </div>
                  <div className="h-28 rounded-xl bg-gradient-to-t from-[#BF00FF]/40 to-[#FF0055]/30 border border-white/10 flex flex-col justify-end p-2">
                    <div className="w-full h-1.5 bg-white/40 rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Daily Reading Goal</span>
                  <span className="text-[#BF00FF] font-mono">80% COMPLETED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Empowering Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#BF00FF] to-[#00F0FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#BF00FF]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                {feat.icon}
              </div>
              <h3 className="font-orbitron font-bold text-lg text-white light:text-slate-900">
                {feat.title}
              </h3>
              <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why YuvaMitra Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Why YuvaMitra?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#BF00FF] to-[#00F0FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 space-y-3 border-t-2 border-t-[#BF00FF]"
            >
              <div className="text-3xl mb-2">{b.icon}</div>
              <h3 className="font-orbitron font-bold text-base text-white light:text-slate-900">
                {b.title}
              </h3>
              <p className="text-slate-400 light:text-slate-600 text-xs sm:text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Our Library */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Explore Our Library
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#BF00FF] to-[#00F0FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 text-center space-y-2 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-3xl">{cat.icon}</div>
              <h4 className="font-orbitron font-semibold text-xs text-white light:text-slate-900 leading-snug">
                {cat.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            App Screenshots
          </h2>
          <p className="text-[#00F0FF] text-sm font-semibold tracking-wide">
            Coming Soon - Preview of YuvaMitra Interface
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#BF00FF] to-[#00F0FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mockup 1: Book Library */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col justify-between">
              <div className="h-8 rounded-lg bg-[#00FF9D]/30 w-full" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-24 rounded bg-[#00F0FF]/25" />
                <div className="h-24 rounded bg-[#00F0FF]/25" />
                <div className="h-24 rounded bg-[#00F0FF]/25" />
              </div>
              <div className="h-4 rounded bg-white/20 w-3/4 mx-auto" />
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              Book Library
            </p>
          </div>

          {/* Mockup 2: Reading Interface */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col justify-center space-y-4">
              <div className="h-6 rounded bg-[#00FF9D]/30 w-full" />
              <div className="h-6 rounded bg-[#00FF9D]/30 w-full" />
              <div className="h-6 rounded bg-[#00FF9D]/30 w-full" />
              <div className="h-6 rounded bg-[#00FF9D]/30 w-4/5" />
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              Reading Interface
            </p>
          </div>

          {/* Mockup 3: Progress Tracker */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col items-center justify-between">
              <div className="w-28 h-28 rounded-full border-4 border-[#BF00FF]/40 border-t-[#00F0FF] my-auto flex items-center justify-center">
                <span className="font-orbitron text-xs text-[#BF00FF]">GOALS</span>
              </div>
              <div className="space-y-2 w-full">
                <div className="h-4 rounded-full bg-[#00F0FF]/30 w-full" />
                <div className="h-4 rounded-full bg-[#00F0FF]/30 w-3/4" />
              </div>
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              Progress Tracker
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
          Start Your Learning Journey
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Join YuvaMitra and unlock your potential
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-orbitron font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#BF00FF] to-[#7c00a6] text-white shadow-[0_0_25px_rgba(191,0,255,0.4)] hover:opacity-95 transition-all"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
