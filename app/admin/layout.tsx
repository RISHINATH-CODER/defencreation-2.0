"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  BookOpen,
  BarChart2,
  Settings,
  Menu,
  X,
  Search,
  Bell,
  Mail,
  ArrowLeft,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/admin/users", label: "Users", icon: <Users className="w-5 h-5" /> },
    { href: "/admin/surakshithnet", label: "SurakshithNet", icon: <Shield className="w-5 h-5" /> },
    { href: "/admin/yuvamitra", label: "YuvaMitra", icon: <BookOpen className="w-5 h-5" /> },
    { href: "/admin/analytics", label: "Analytics", icon: <BarChart2 className="w-5 h-5" /> },
    { href: "/admin/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#050A14] text-[#E0E6ED] flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 sm:w-72 bg-[#050A14]/95 border-r border-white/10 p-6 flex flex-col justify-between backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          {/* Brand */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🛡️</span>
              <h2 className="font-orbitron font-bold text-lg text-[#00F0FF] tracking-wider group-hover:glow-cyan transition-all">
                DEFENCREATION
              </h2>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / Profile */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#00F0FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </Link>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#BF00FF] text-black font-orbitron font-bold flex items-center justify-center text-sm shrink-0">
              A
            </div>
            <div className="overflow-hidden">
              <h4 className="font-orbitron text-xs font-bold text-white truncate">Admin User</h4>
              <p className="text-[10px] text-[#00FF9D] uppercase tracking-wider font-mono">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 bg-[#050A14]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative hidden sm:block w-64 md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-[#00F0FF]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00F0FF] transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] absolute top-2 right-2" />
            </button>
            <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00F0FF] transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
