import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Institutional Solutions - Defencreation",
  description: "Comprehensive digital safety for organizations. Empowering schools, colleges, NGOs, startups, banks, and government with institutional protection tools.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      icon: "🏫",
      title: "Schools & Educational Institutions",
      desc: "Create a safe learning environment with comprehensive content filtering, device management, and student monitoring across your entire campus network.",
      features: [
        "Campus-wide content filtering",
        "Student device management",
        "Classroom monitoring dashboard",
        "Parent-teacher communication portal",
        "Bulk deployment and management",
        "Custom policy configuration",
      ],
      btnText: "Request Demo",
    },
    {
      icon: "🎓",
      title: "Colleges & Universities",
      desc: "Protect students in hostels and on campus while respecting their growing independence with age-appropriate safety measures.",
      features: [
        "Hostel network protection",
        "Campus WiFi filtering",
        "Student wellness monitoring",
        "Anonymous reporting system",
        "Mental health resources",
        "Cyberbullying prevention",
      ],
      btnText: "Learn More",
    },
    {
      icon: "🤝",
      title: "NGOs & Social Organizations",
      desc: "Empower your mission to protect vulnerable youth with free access to our institutional tools and dedicated support.",
      features: [
        "Free institutional licenses",
        "Beneficiary protection tools",
        "Program impact tracking",
        "Community outreach resources",
        "Training and workshops",
        "Awareness campaign materials",
      ],
      btnText: "Partner With Us",
    },
    {
      icon: "🚀",
      title: "Startups & Tech Companies",
      desc: "Ensure employee safety and compliance with digital wellness policies while fostering a healthy work culture.",
      features: [
        "Employee device protection",
        "Workplace safety policies",
        "Productivity monitoring",
        "Data security compliance",
        "Remote work safety",
        "Custom integrations",
      ],
      btnText: "Get Started",
    },
    {
      icon: "🏦",
      title: "Banks & Financial Institutions",
      desc: "Protect young customers and employees with enterprise-grade security and compliance-ready monitoring solutions.",
      features: [
        "Customer protection programs",
        "Employee safety compliance",
        "Fraud prevention tools",
        "Secure communication channels",
        "Regulatory compliance support",
        "Enterprise-grade security",
      ],
      btnText: "Contact Sales",
    },
    {
      icon: "🏛️",
      title: "Government & Public Sector",
      desc: "Deploy nationwide digital safety initiatives with scalable infrastructure and comprehensive reporting capabilities.",
      features: [
        "Large-scale deployment",
        "Multi-region management",
        "Comprehensive analytics",
        "Policy enforcement tools",
        "Public awareness campaigns",
        "Data sovereignty compliance",
      ],
      btnText: "Discuss Partnership",
    },
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Easy Deployment",
      desc: "Quick setup with minimal IT resources required",
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      desc: "Comprehensive insights into usage and threats",
    },
    {
      icon: "🔧",
      title: "Customizable",
      desc: "Tailor policies to your organization's needs",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      desc: "Bank-grade encryption and data protection",
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      desc: "Affordable pricing with special rates for NGOs",
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      desc: "24/7 technical support and training resources",
    },
  ];

  const dashboardFeatures = [
    {
      title: "Real-Time Monitoring",
      desc: "Track threats, activity, and compliance across your organization in real-time",
    },
    {
      title: "Custom Policy Management",
      desc: "Create and enforce organization-specific safety policies and content filters",
    },
    {
      title: "Comprehensive Reporting",
      desc: "Generate detailed reports for compliance, audits, and stakeholder communication",
    },
    {
      title: "Multi-Level Access Control",
      desc: "Assign roles and permissions to administrators, teachers, and support staff",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-6">
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white light:text-slate-900 tracking-tight">
          Institutional Solutions
        </h1>
        <p className="text-base sm:text-xl text-[#00F0FF] max-w-2xl mx-auto font-medium">
          Comprehensive digital safety for organizations
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white light:text-slate-900">
          Protecting Youth at Scale
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
          Our institutional dashboard provides organizations with powerful tools to create safe
          digital environments for students, employees, and beneficiaries. From schools to startups,
          we&apos;re building partnerships that protect India&apos;s youth at every level.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00F0FF]/50 transition-all"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white light:text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-[#00FF9D] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/15 transition-all flex items-center justify-center gap-2"
                >
                  <span>{item.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Institutional Dashboard
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base">
            Comprehensive control and monitoring for your organization
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        {/* Mock Dashboard UI */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <span className="font-orbitron font-bold text-lg text-[#00F0FF]">
                Defencreation Admin
              </span>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-slate-300">
              Administrator
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Sidebar Preview */}
            <div className="md:col-span-4 space-y-2">
              {[
                { label: "📊 Overview", active: true },
                { label: "👥 Users", active: false },
                { label: "🔒 Policies", active: false },
                { label: "📈 Reports", active: false },
                { label: "⚙️ Settings", active: false },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-sm font-medium transition-all ${
                    s.active
                      ? "bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40"
                      : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  {s.label}
                </div>
              ))}
            </div>

            {/* Main Stats Widgets */}
            <div className="md:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-card rounded-2xl p-5 border-l-2 border-l-[#00F0FF]">
                  <h4 className="font-orbitron font-bold text-3xl text-white light:text-slate-900">
                    1,247
                  </h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                    Protected Users
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border-l-2 border-l-[#FF0055]">
                  <h4 className="font-orbitron font-bold text-3xl text-[#FF0055]">
                    3,892
                  </h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                    Threats Blocked
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5 border-l-2 border-l-[#00FF9D]">
                  <h4 className="font-orbitron font-bold text-3xl text-[#00FF9D]">
                    99.8%
                  </h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                    Uptime
                  </p>
                </div>
              </div>

              {/* Dashboard Feature Bullet List */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h3 className="font-orbitron font-bold text-base text-white light:text-slate-900 uppercase tracking-wider">
                  Dashboard Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dashboardFeatures.map((df, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="w-5 h-5 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h4 className="font-orbitron font-semibold text-xs text-white light:text-slate-900">
                          {df.title}
                        </h4>
                        <p className="text-xs text-slate-400 light:text-slate-600 mt-0.5">
                          {df.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Institutional Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
            Why Choose Our Institutional Solutions?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 space-y-3 hover:border-[#00F0FF]/40 transition-all"
            >
              <div className="text-3xl mb-1">{b.icon}</div>
              <h4 className="font-orbitron font-bold text-base text-white light:text-slate-900">
                {b.title}
              </h4>
              <p className="text-slate-400 light:text-slate-600 text-xs sm:text-sm">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-orbitron font-bold text-2xl sm:text-4xl text-white light:text-slate-900">
          Ready to Protect Your Organization?
        </h2>
        <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Schedule a demo or speak with our institutional solutions team
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-orbitron font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#00F0FF] to-[#00A3FF] text-black shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
