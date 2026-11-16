"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050A14] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <Image
            src="/logo2.png"
            alt="Defencreation Loading"
            width={140}
            height={140}
            priority
            className="about-logo-anim object-contain"
          />
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00F0FF] to-[#BF00FF] animate-pulse w-full origin-left" />
        </div>
        <p className="font-orbitron text-xs tracking-widest text-[#00F0FF]/80 uppercase">
          Initializing Defencreation...
        </p>
      </div>
    </div>
  );
}
