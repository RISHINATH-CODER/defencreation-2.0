"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Moon, Sun, Type, Globe, RefreshCw, Bell, BellOff, Flag, Share2, ShieldCheck, HelpCircle } from "lucide-react";

interface SettingsDrawerProps {
  onShowToast: (message: string, type?: "info" | "success" | "warning" | "error") => void;
}

export default function SettingsDrawer({ onShowToast }: SettingsDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [checkingUpdates, setCheckingUpdates] = useState(false);

  // Initialize theme and font size from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }

    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      const parsed = parseInt(savedFontSize);
      setFontSize(parsed);
      document.documentElement.style.fontSize = `${parsed}px`;
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      onShowToast("Light Mode Enabled", "info");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      onShowToast("Dark Mode: ON", "success");
    }
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem("fontSize", size.toString());
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    const langName = e.target.options[e.target.selectedIndex].text;
    onShowToast(`Language changed to: ${langName}`, "info");
  };

  const handleCheckUpdates = () => {
    setCheckingUpdates(true);
    setTimeout(() => {
      setCheckingUpdates(false);
      onShowToast("You are running the latest version (v2.4.0)", "success");
    }, 1200);
  };

  const handleToggleNotifications = () => {
    const nextState = !notificationsEnabled;
    setNotificationsEnabled(nextState);
    onShowToast(
      nextState ? "Notifications enabled" : "Notifications disabled",
      nextState ? "success" : "info"
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Defencreation",
        text: "Check out Defencreation - Cybersecurity for everyone!",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      onShowToast("Link copied to clipboard!", "success");
    }
  };

  return (
    <>
      {/* Floating Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Settings"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#00F0FF]/20 hover:bg-[#00F0FF]/30 border border-[#00F0FF]/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:scale-110 active:scale-95"
      >
        <Image src="/menu.svg" alt="Settings" width={22} height={22} className="brightness-200" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-96 bg-[#050A14]/95 text-slate-200 backdrop-blur-2xl border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <h3 className="font-orbitron font-bold text-lg text-white tracking-wider flex items-center gap-2">
              <span className="text-[#00F0FF]">⚙️</span> Settings
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
            {/* Appearance Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00F0FF] flex items-center gap-2">
                <span>🎨</span> Appearance
              </h4>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-sm font-medium">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/25 transition-all"
                >
                  {isDarkMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                  {isDarkMode ? "Dark Mode: ON" : "Dark Mode: OFF"}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1.5">
                    <Type className="w-3.5 h-3.5 text-slate-400" /> Font Size
                  </span>
                  <span className="text-xs font-mono text-[#00F0FF]">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="24"
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
                />
              </div>
            </div>

            {/* Language Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00F0FF] flex items-center gap-2">
                <span>🌐</span> Language
              </h4>
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-200 outline-none focus:border-[#00F0FF]"
                >
                  <option value="en" className="bg-[#050A14] text-white">English (Default)</option>
                  <option value="hi" className="bg-[#050A14] text-white">Hindi - हिन्दी</option>
                  <option value="bn" className="bg-[#050A14] text-white">Bengali - বাংলা</option>
                  <option value="te" className="bg-[#050A14] text-white">Telugu - తెలుగు</option>
                  <option value="mr" className="bg-[#050A14] text-white">Marathi - मराठी</option>
                  <option value="ta" className="bg-[#050A14] text-white">Tamil - தமிழ்</option>
                  <option value="ur" className="bg-[#050A14] text-white">Urdu - اردو</option>
                  <option value="gu" className="bg-[#050A14] text-white">Gujarati - ગુજરાતી</option>
                  <option value="kn" className="bg-[#050A14] text-white">Kannada - ಕನ್ನಡ</option>
                  <option value="ml" className="bg-[#050A14] text-white">Malayalam - മലയാളം</option>
                  <option value="pa" className="bg-[#050A14] text-white">Punjabi - ਪੰਜਾਬੀ</option>
                </select>
              </div>
            </div>

            {/* Utilities Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00F0FF] flex items-center gap-2">
                <span>⚡</span> Utilities
              </h4>
              <button
                onClick={handleCheckUpdates}
                disabled={checkingUpdates}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <RefreshCw className={`w-4 h-4 text-slate-400 ${checkingUpdates ? "animate-spin text-[#00F0FF]" : ""}`} />
                  {checkingUpdates ? "Checking..." : "Check for Updates"}
                </span>
                <span className="text-xs text-slate-400">v2.4.0</span>
              </button>

              <button
                onClick={handleToggleNotifications}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-sm hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  {notificationsEnabled ? (
                    <Bell className="w-4 h-4 text-[#00FF9D]" />
                  ) : (
                    <BellOff className="w-4 h-4 text-slate-400" />
                  )}
                  Notifications
                </span>
                <span className={`text-xs font-semibold ${notificationsEnabled ? "text-[#00FF9D]" : "text-slate-400"}`}>
                  {notificationsEnabled ? "ON" : "OFF"}
                </span>
              </button>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-sm hover:bg-white/10 transition-colors"
              >
                <Flag className="w-4 h-4 text-slate-400" />
                Report Issue
              </Link>

              <button
                onClick={handleShare}
                className="w-full flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-sm hover:bg-white/10 transition-colors"
              >
                <Share2 className="w-4 h-4 text-slate-400" />
                Share Us
              </button>
            </div>

            {/* Info Section */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <span>ℹ️</span> Info
              </h4>
              <div className="flex gap-4 text-xs text-slate-400">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#00F0FF] transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#00F0FF] transition-colors"
                >
                  Help & Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs text-slate-500">
          Defencreation v2.0 Platform
        </div>
      </div>
    </>
  );
}
