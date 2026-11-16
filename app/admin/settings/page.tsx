"use client";

import React, { useState } from "react";
import { Save, AlertTriangle, ShieldCheck, Bell, Server } from "lucide-react";

export default function SettingsAdminPage() {
  const [displayName, setDisplayName] = useState("Defencreation Admin");
  const [email, setEmail] = useState("admin@defencreation.com");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);
  const [cacheCleared, setCacheCleared] = useState(false);

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const handleClearCache = () => {
    setCacheCleared(true);
    setTimeout(() => setCacheCleared(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure administrator credentials, system security, and preferences
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#00F0FF] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:opacity-95 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>{savedMessage ? "Saved Successfully!" : "Save Changes"}</span>
        </button>
      </div>

      {/* Account Settings */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <h3 className="font-orbitron font-bold text-lg text-white">Account Settings</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#00F0FF] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#00F0FF] text-sm font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
              Role
            </label>
            <select
              disabled
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm cursor-not-allowed"
            >
              <option>Super Administrator</option>
            </select>
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
        <h3 className="font-orbitron font-bold text-lg text-white">System Preferences</h3>

        <div className="space-y-4">
          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div>
              <h4 className="font-orbitron font-semibold text-sm text-white">Email Notifications</h4>
              <p className="text-xs text-slate-400 mt-0.5">Receive weekly summary reports</p>
            </div>
            <button
              onClick={() => setEmailNotifs(!emailNotifs)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all ${
                emailNotifs
                  ? "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30"
                  : "bg-white/5 text-slate-400 border-white/10"
              }`}
            >
              {emailNotifs ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div>
              <h4 className="font-orbitron font-semibold text-sm text-white">
                Two-Factor Authentication
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">Require 2FA for all admin logins</p>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all ${
                twoFactor
                  ? "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30 shadow-[0_0_10px_rgba(0,255,157,0.2)]"
                  : "bg-white/5 text-slate-400 border-white/10"
              }`}
            >
              {twoFactor ? "Active" : "Inactive"}
            </button>
          </div>

          {/* Maintenance Mode */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div>
              <h4 className="font-orbitron font-semibold text-sm text-white">Maintenance Mode</h4>
              <p className="text-xs text-slate-400 mt-0.5">Take site offline for updates</p>
            </div>
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all ${
                maintenanceMode
                  ? "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30 shadow-[0_0_10px_rgba(255,0,85,0.2)]"
                  : "bg-white/5 text-slate-400 border-white/10"
              }`}
            >
              {maintenanceMode ? "Enabled" : "Disabled"}
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#FF0055]/30 space-y-4">
        <div className="flex items-center gap-2 text-[#FF0055]">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="font-orbitron font-bold text-lg">Danger Zone</h3>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div>
            <h4 className="font-orbitron font-semibold text-sm text-white">Clear System Cache</h4>
            <p className="text-xs text-slate-400 mt-0.5">Deletes all temporary files.</p>
          </div>
          <button
            onClick={handleClearCache}
            className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#FF0055]/15 text-[#FF0055] border border-[#FF0055]/40 hover:bg-[#FF0055]/25 transition-all shadow-[0_0_15px_rgba(255,0,85,0.2)]"
          >
            {cacheCleared ? "Cache Cleared!" : "Clear Cache"}
          </button>
        </div>
      </div>
    </div>
  );
}
