import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, Check, Smartphone, Bell, Eye, Clock, ListFilter, Users, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SurakshithNet App - Parental Control Solution - Defencreation",
  description: "Advanced parental control app with real-time content filtering, app management, and comprehensive monitoring dashboard. 100% free for all Indian families.",
};

export default function SurakshithNetPage() {
  const features = [
    {
      icon: "🔍",
      title: "Real-Time Content Filtering",
      desc: "Advanced AI-powered filtering blocks inappropriate content across all browsers and apps in real-time, ensuring safe browsing for your children.",
    },
    {
      icon: "📱",
      title: "App Blocking & Management",
      desc: "Control which apps your child can access, set time limits, and block age-inappropriate applications with a single tap.",
    },
    {
      icon: "🔒",
      title: "Safe Search Enforcement",
      desc: "Automatically enables safe search across Google, YouTube, and other platforms to filter explicit content from search results.",
    },
    {
      icon: "📊",
      title: "Comprehensive Dashboard",
      desc: "Monitor your child's online activity, screen time, and blocked threats through an intuitive parent dashboard accessible from any device.",
    },
    {
      icon: "⏰",
      title: "Screen Time Management",
      desc: "Set daily limits, schedule device-free times, and encourage healthy digital habits with flexible screen time controls.",
    },
    {
      icon: "🌐",
      title: "Website Whitelisting",
      desc: "Create custom lists of approved websites for educational purposes while blocking access to all other sites.",
    },
    {
      icon: "🚨",
      title: "Instant Alerts",
      desc: "Receive real-time notifications when your child attempts to access blocked content or encounters potential threats.",
    },
    {
      icon: "👥",
      title: "Multiple Child Profiles",
      desc: "Manage protection settings for multiple children with age-appropriate filters and individual monitoring dashboards.",
    },
    {
      icon: "🔐",
      title: "Location Tracking",
      desc: "Know where your children are with GPS location tracking and geofencing alerts for added peace of mind.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-semibold uppercase tracking-wider">
              Parental Control
            </div>
            <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
              SurakshithNet
            </h1>
            <p className="text-lg sm:text-2xl text-[#00F0FF] font-medium">
              Complete protection for your child&apos;s digital journey
            </p>
            <p className="text-slate-300 light:text-slate-600 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed">
              Advanced parental control app with real-time content filtering, app management, and comprehensive
              monitoring dashboard. 100% free for all Indian families.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all text-center"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-[#00F0FF] text-white light:text-slate-900 bg-white/5 hover:bg-white/10 transition-all text-center"
              >
                View Features
              </a>
            </div>
          </div>

          {/* Interactive UI Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 rounded-[40px] border-4 border-white/20 bg-[#020408] p-4 shadow-2xl shadow-[#00F0FF]/20 relative">
              <div className="w-24 h-4 bg-white/20 rounded-full mx-auto mb-4" />
              <div className="rounded-3xl bg-[#050A14] p-5 space-y-4 border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🛡️</span>
                    <h4 className="font-orbitron font-bold text-sm text-white">Dashboard</h4>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card rounded-2xl p-3 text-center border-l-2 border-l-[#FF0055]">
                    <span className="font-orbitron font-bold text-2xl text-[#FF0055]">24</span>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">
                      Threats Blocked
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-3 text-center border-l-2 border-l-[#00F0FF]">
                    <span className="font-orbitron font-bold text-2xl text-[#00F0FF]">5h</span>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">
                      Screen Time
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Content Filter</span>
                    <span className="text-[#00FF9D] font-mono">ACTIVE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Safe Search</span>
                    <span className="text-[#00FF9D] font-mono">ENFORCED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Powerful Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#00F0FF]/50 transition-all"
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

      {/* Why Completely Free Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden border-t-2 border-t-[#00FF9D]">
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white light:text-slate-900">
            Why Completely Free?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Digital safety is a fundamental right, not a luxury. Every Indian family deserves access
            to world-class protection tools regardless of their economic status.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              "No subscription fees, ever",
              "No hidden charges or premium tiers",
              "All features included for everyone",
              "Unlimited devices and children",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="w-5 h-5 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <span className="text-sm text-slate-200 light:text-slate-800">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-[#00F0FF] text-sm sm:text-base font-semibold pt-4">
            Our commitment to India: Building a safer digital future for every child, in every home, across every state.
          </p>
        </div>
      </section>

      {/* UI Mockups Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            App Interface
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Parent Dashboard */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col justify-between">
              <div className="h-8 rounded-lg bg-[#00F0FF]/30 w-full" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 rounded-xl bg-[#00FF9D]/25" />
                <div className="h-20 rounded-xl bg-[#FF0055]/25" />
              </div>
              <div className="space-y-2">
                <div className="h-3 rounded bg-white/20 w-3/4 mx-auto" />
                <div className="h-3 rounded bg-white/10 w-1/2 mx-auto" />
              </div>
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              Parent Dashboard
            </p>
          </div>

          {/* Card 2: Activity Monitor */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col items-center justify-between">
              <div className="w-28 h-28 rounded-full border-4 border-[#00F0FF]/40 border-t-[#BF00FF] my-auto flex items-center justify-center">
                <span className="font-orbitron text-xs text-[#00F0FF]">LIVE</span>
              </div>
              <div className="space-y-2 w-full">
                <div className="h-6 rounded-lg bg-[#00FF9D]/25 w-full" />
                <div className="h-6 rounded-lg bg-[#00FF9D]/25 w-full" />
              </div>
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              Activity Monitor
            </p>
          </div>

          {/* Card 3: App Management */}
          <div className="glass-card rounded-2xl p-6 text-center space-y-4">
            <div className="w-full aspect-[9/14] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-5 flex flex-col justify-between">
              <div className="h-12 rounded-xl bg-[#FF0055]/25 w-full" />
              <div className="h-12 rounded-xl bg-[#00FF9D]/25 w-full" />
              <div className="h-12 rounded-xl bg-[#00F0FF]/25 w-full" />
            </div>
            <p className="font-orbitron text-sm font-semibold text-white light:text-slate-900 uppercase tracking-wider">
              App Management
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
          Ready to Protect Your Family?
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Join thousands of Indian parents who trust SurakshithNet
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-orbitron font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
