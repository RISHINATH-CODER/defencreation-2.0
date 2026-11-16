"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-[#00F0FF]/40 bg-white/[0.06]" : ""
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
            >
              <h4 className="font-orbitron font-semibold text-sm sm:text-base text-white light:text-slate-900 tracking-wide">
                {item.question}
              </h4>
              <ChevronDown
                className={`w-5 h-5 text-[#00F0FF] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-400 light:text-slate-600 text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
