import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              Cybersecurity For Next-Gen India
            </div>

            <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight leading-tight">
              Protecting Indian Teenagers in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#BF00FF]">
                Digital World
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering parents and youth with cutting-edge cybersecurity solutions for a safer digital India
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#apps"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-orbitron font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black hover:opacity-95 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Explore Apps
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-orbitron font-bold text-sm tracking-wider uppercase border border-white/20 hover:border-[#00F0FF] text-white light:text-slate-900 hover:text-[#00F0FF] bg-white/5 hover:bg-white/10 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F0FF]/20 to-[#BF00FF]/20 blur-3xl" />
              <Image
                src="/logo2.png"
                alt="Defencreation Logo 2"
                width={380}
                height={380}
                priority
                className="about-logo-anim relative z-10 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900 tracking-wider">
            Our Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* SurakshithNet Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#00F0FF]">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                🛡️
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
                SurakshithNet
              </h3>
              <p className="text-slate-300 light:text-slate-600 text-base leading-relaxed">
                Comprehensive parental control app with real-time content filtering, app blocking, and safe
                search features. Completely free for all Indian families.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/surakshithnet"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black font-orbitron font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* YuvaMitra Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#BF00FF]">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#BF00FF]/10 border border-[#BF00FF]/30 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(191,0,255,0.2)]">
                📚
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
                YuvaMitra
              </h3>
              <p className="text-slate-300 light:text-slate-600 text-base leading-relaxed">
                Youth empowerment platform offering free digital books, reading improvement tools, and personal
                development resources for India&apos;s next generation.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/yuvamitra"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#BF00FF] text-[#BF00FF] hover:bg-[#BF00FF] hover:text-white font-orbitron font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(191,0,255,0.25)]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white light:text-slate-900">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 light:text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            &ldquo;Building a national digital safety ecosystem that protects minors from online risks while empowering
            them with knowledge and tools for responsible digital citizenship.&rdquo;
          </p>
          <div>
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 rounded-xl font-orbitron font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:opacity-95 transition-all"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-3xl p-8 text-center space-y-3 border border-white/5">
            <AnimatedCounter target={100} suffix="%" />
            <p className="font-orbitron text-xs sm:text-sm tracking-wider uppercase text-slate-400 light:text-slate-600">
              Free for Indians
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center space-y-3 border border-white/5">
            <AnimatedCounter target={24} />
            <p className="font-orbitron text-xs sm:text-sm tracking-wider uppercase text-slate-400 light:text-slate-600">
              Hours Protection
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center space-y-3 border border-white/5">
            <AnimatedCounter target={2} />
            <p className="font-orbitron text-xs sm:text-sm tracking-wider uppercase text-slate-400 light:text-slate-600">
              Powerful Apps
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
