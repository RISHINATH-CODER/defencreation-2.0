import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Defencreation",
  description: "Building a safer digital future for India's youth. Learn about our mission, vision, strategic goals, and core values.",
};

export default function AboutPage() {
  const goals = [
    {
      num: "01",
      title: "National Digital Safety Ecosystem",
      desc: "Build a comprehensive platform connecting parents, schools, NGOs, and institutions in a unified effort to protect minors online.",
    },
    {
      num: "02",
      title: "Free Access for All Indians",
      desc: "Ensure every Indian family has access to world-class parental control and youth empowerment tools at zero cost.",
    },
    {
      num: "03",
      title: "Youth Empowerment",
      desc: "Provide teenagers with educational resources, digital literacy programs, and personal development tools.",
    },
    {
      num: "04",
      title: "Institutional Partnerships",
      desc: "Collaborate with schools, colleges, banks, and startups to create safe digital environments at scale.",
    },
    {
      num: "05",
      title: "Awareness & Education",
      desc: "Launch nationwide campaigns to educate parents and youth about online safety and responsible internet usage.",
    },
    {
      num: "06",
      title: "Innovation & Research",
      desc: "Continuously develop cutting-edge solutions based on emerging threats and user feedback.",
    },
  ];

  const values = [
    {
      icon: "🔒",
      title: "Privacy First",
      desc: "User data protection is our top priority",
    },
    {
      icon: "🇮🇳",
      title: "Made for India",
      desc: "Solutions tailored for Indian families",
    },
    {
      icon: "💚",
      title: "Free Forever",
      desc: "No hidden costs, no premium tiers",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      desc: "Built with feedback from parents and educators",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
          About Defencreation
        </h1>
        <p className="text-base sm:text-xl text-[#00F0FF] max-w-2xl mx-auto font-medium">
          Building a safer digital future for India&apos;s youth
        </p>
      </section>

      {/* The Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white light:text-slate-900">
              The Problem We&apos;re Solving
            </h2>
            <p className="text-slate-300 light:text-slate-600 leading-relaxed">
              India&apos;s digital revolution has connected millions of teenagers to the internet, but with this
              connectivity comes unprecedented risks:
            </p>
            <ul className="space-y-3 text-slate-300 light:text-slate-700">
              {[
                "Exposure to inappropriate content and cyberbullying",
                "Online predators and privacy violations",
                "Addiction to social media and gaming",
                "Lack of digital literacy and safe browsing habits",
                "Limited parental awareness and control tools",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="text-[#FF0055] shrink-0 mt-1">⚠️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base italic pt-2">
              These challenges threaten the mental health, safety, and development of our youth, requiring
              immediate and comprehensive solutions.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F0FF]/15 to-[#BF00FF]/15 blur-2xl" />
              <Image
                src="/logo2.png"
                alt="Defencreation Logo 2"
                width={300}
                height={300}
                className="about-logo-anim relative z-10 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border-t-2 border-t-[#00F0FF] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-3xl">
              🎯
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-300 light:text-slate-600 leading-relaxed text-sm sm:text-base">
              To create a comprehensive digital safety ecosystem that protects Indian minors from online
              threats while empowering them with knowledge, tools, and resources for responsible digital
              citizenship.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border-t-2 border-t-[#BF00FF] space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#BF00FF]/10 border border-[#BF00FF]/30 flex items-center justify-center text-3xl">
              🔭
            </div>
            <h3 className="font-orbitron font-bold text-2xl text-white light:text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-300 light:text-slate-600 leading-relaxed text-sm sm:text-base">
              A digitally safe India where every teenager can explore, learn, and grow online without fear,
              supported by parents, educators, and institutions working together for their protection and
              empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Our Goals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {goals.map((goal) => (
            <div
              key={goal.num}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#00F0FF]/50 transition-all"
            >
              <span className="font-orbitron font-bold text-3xl sm:text-4xl text-[#00F0FF]/40">
                {goal.num}
              </span>
              <h3 className="font-orbitron font-bold text-lg text-white light:text-slate-900">
                {goal.title}
              </h3>
              <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center space-y-3 hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-2">{val.icon}</div>
              <h4 className="font-orbitron font-bold text-base text-white light:text-slate-900">
                {val.title}
              </h4>
              <p className="text-slate-400 light:text-slate-600 text-xs sm:text-sm">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
