import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Defencreation",
  description: "Defencreation's Privacy First policy: How we protect user data, respect privacy, and uphold security across our platforms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00F0FF] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white light:text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm">
          Last Updated: November 2026 | Effective for all Defencreation Services
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="font-orbitron font-bold text-xl text-white light:text-slate-900 text-[#00F0FF]">
            1. Our Commitment: Privacy First
          </h2>
          <p>
            At <strong>Defencreation</strong>, user privacy is not a feature—it is our founding core value.
            Our mission is to build a national digital safety ecosystem that shields Indian minors and organizations
            from cyber threats without ever exploiting, selling, or commercializing personal user data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-orbitron font-bold text-xl text-white light:text-slate-900 text-[#00F0FF]">
            2. Data We Process
          </h2>
          <p>
            We adhere strictly to the principle of data minimization:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact Inquiries:</strong> When you submit our contact form, we collect your name, email,
              optional phone number, organization, and message solely to respond to your inquiry.
            </li>
            <li>
              <strong>Telemetry & Protection Tools:</strong> In SurakshithNet and institutional setups, threat
              blocking and filter events are processed locally or in anonymized formats to safeguard browsing without
              building tracking profiles.
            </li>
            <li>
              <strong>No Advertising Trackers:</strong> We do not use third-party behavioral advertising or data-broker
              analytics.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-orbitron font-bold text-xl text-white light:text-slate-900 text-[#00F0FF]">
            3. Free Forever Guarantee
          </h2>
          <p>
            SurakshithNet and YuvaMitra are completely free for all Indian families. We never gate features behind
            hidden paywalls, and we never monetize user attention or personal records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-orbitron font-bold text-xl text-white light:text-slate-900 text-[#00F0FF]">
            4. Contacting Our Data Protection Team
          </h2>
          <p>
            If you have questions about our security practices or privacy compliance, please email us directly at{" "}
            <a href="mailto:info@surakshithnet.in" className="text-[#00F0FF] underline">
              info@surakshithnet.in
            </a>{" "}
            or write to <strong>Defencreation, India</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
