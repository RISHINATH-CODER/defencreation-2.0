import React from "react";
import Link from "next/link";
import { Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020408]/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white light:text-slate-900">
              <span className="text-2xl">🛡️</span>
              <span className="font-orbitron font-bold text-xl tracking-wider text-[#00F0FF]">
                DEFENCREATION
              </span>
            </div>
            <p className="text-slate-400 light:text-slate-600 text-sm max-w-md leading-relaxed">
              Protecting and empowering Indian youth in the digital age. Building a national digital safety ecosystem
              that protects minors from online risks while empowering them with knowledge and tools for responsible
              digital citizenship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-white light:text-slate-900 text-sm tracking-wider mb-4 text-[#00F0FF]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#00F0FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#00F0FF] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00F0FF] transition-colors">
                  Other Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00F0FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Apps */}
          <div>
            <h4 className="font-orbitron font-semibold text-white light:text-slate-900 text-sm tracking-wider mb-4 text-[#BF00FF]">
              Our Apps
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/surakshithnet" className="hover:text-[#BF00FF] transition-colors">
                  SurakshithNet
                </Link>
              </li>
              <li>
                <Link href="/yuvamitra" className="hover:text-[#BF00FF] transition-colors">
                  YuvaMitra
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#BF00FF] transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2024–2026 Defencreation. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> for a safer digital India
          </p>
        </div>
      </div>
    </footer>
  );
}
