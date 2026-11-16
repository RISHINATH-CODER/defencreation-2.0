"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

export interface ServiceItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  detailsTitle: string;
  features: {
    name: string;
    description: string;
  }[];
}

export default function ServiceCard({ service }: { service: ServiceItemProps }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        expanded ? "border-[#00F0FF]/50 bg-white/[0.06] shadow-[0_0_25px_rgba(0,240,255,0.15)]" : ""
      }`}
    >
      <div>
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-5 shadow-inner">
          {service.icon}
        </div>
        <h3 className="font-orbitron font-bold text-xl text-white light:text-slate-900 mb-3 tracking-wide">
          {service.title}
        </h3>
        <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Expandable Details Section */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-4 animate-in fade-in duration-300">
            <h4 className="font-orbitron text-sm font-semibold text-[#00F0FF] uppercase tracking-wider">
              {service.detailsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00FF9D] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white light:text-slate-900">{feat.name}:</strong>{" "}
                    {feat.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            expanded
              ? "bg-[#00F0FF] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              : "border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/15"
          }`}
        >
          <span>{expanded ? "Show Less" : "Learn More"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
