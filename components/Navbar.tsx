"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Shield, Menu, X, Lock } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/surakshithnet", label: "SurakshithNet App" },
    { href: "/yuvamitra", label: "YuvaMitra App" },
    { href: "/solutions", label: "Solutions" },
    { href: "/services", label: "Other Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050A14]/90 dark:bg-[#050A14]/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#00F0FF] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-orbitron font-bold text-lg md:text-xl tracking-wider text-white light:text-slate-900 group-hover:text-[#00F0FF] transition-colors">
              DEFENCREATION
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#00F0FF] bg-white/5 border border-[#00F0FF]/30 glow-cyan"
                      : "text-slate-300 light:text-slate-700 hover:text-[#00F0FF] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              className="ml-3 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#BF00FF]/20 text-[#BF00FF] border border-[#BF00FF]/40 hover:bg-[#BF00FF]/30 transition-all shadow-[0_0_12px_rgba(191,0,255,0.3)]"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              href="/admin"
              className="px-2.5 py-1 rounded text-xs font-semibold bg-[#BF00FF]/20 text-[#BF00FF] border border-[#BF00FF]/40"
            >
              Admin
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050A14]/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-1 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? "text-[#00F0FF] bg-white/10 border-l-4 border-[#00F0FF]"
                    : "text-slate-300 hover:text-[#00F0FF] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
