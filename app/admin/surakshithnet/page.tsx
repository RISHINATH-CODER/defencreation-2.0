"use client";

import React, { useState } from "react";
import { RefreshCw, Ban, Search, Filter, Flag } from "lucide-react";
import { ThreatLog } from "@/lib/types";

export default function SurakshithNetAdminPage() {
  const [updating, setUpdating] = useState(false);
  const [syncedMessage, setSyncedMessage] = useState(false);

  const stats = [
    {
      title: "Sites Blocked",
      value: "8,932",
      trend: "+150 today",
      icon: <Ban className="w-5 h-5 text-[#FF0055]" />,
      border: "border-l-[#FF0055]",
    },
    {
      title: "Safe Search Queries",
      value: "45,200",
      trend: "Clean",
      icon: <Search className="w-5 h-5 text-[#00FF9D]" />,
      border: "border-l-[#00FF9D]",
    },
    {
      title: "Active Filters",
      value: "24",
      trend: "All Active",
      icon: <Filter className="w-5 h-5 text-[#00F0FF]" />,
      border: "border-l-[#00F0FF]",
    },
    {
      title: "Flagged Content",
      value: "112",
      trend: "-5%",
      icon: <Flag className="w-5 h-5 text-[#FFD600]" />,
      border: "border-l-[#FFD600]",
    },
  ];

  const threats: ThreatLog[] = [
    {
      id: "1",
      time: "10:42 AM",
      threatType: "Phishing Site",
      sourceIp: "192.168.1.X",
      actionTaken: "Blocked Access",
      status: "Secured",
    },
    {
      id: "2",
      time: "10:35 AM",
      threatType: "Adult Content",
      sourceIp: "10.0.0.X",
      actionTaken: "Redirected",
      status: "Filtered",
    },
    {
      id: "3",
      time: "09:15 AM",
      threatType: "Malware Download",
      sourceIp: "172.16.0.X",
      actionTaken: "Connection Reset",
      status: "Critical",
    },
  ];

  const handleUpdateDatabase = () => {
    setUpdating(true);
    setTimeout(() => {
      setUpdating(false);
      setSyncedMessage(true);
      setTimeout(() => setSyncedMessage(false), 3000);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
            SurakshithNet Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time telemetry, parental control threat inspection, and filter rules
          </p>
        </div>

        <button
          onClick={handleUpdateDatabase}
          disabled={updating}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/25 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${updating ? "animate-spin" : ""}`} />
          <span>{updating ? "Syncing..." : syncedMessage ? "Database Updated!" : "Update Database"}</span>
        </button>
      </div>

      {/* App Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-2xl p-6 border-l-4 ${stat.border} space-y-3`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {stat.title}
              </span>
              <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                {stat.icon}
              </div>
            </div>
            <div className="font-orbitron font-bold text-3xl text-white">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-mono">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Threat Log Table */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-orbitron font-bold text-lg text-white">
            Recent Threat Blocks
          </h3>
          <button className="px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/25 transition-all">
            View Full Log
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-orbitron uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-4">Time</th>
                <th className="pb-3 px-4">Threat Type</th>
                <th className="pb-3 px-4">Source IP</th>
                <th className="pb-3 px-4">Action Taken</th>
                <th className="pb-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {threats.map((row) => {
                const statusStyles = {
                  Secured: "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30",
                  Filtered: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30",
                  Critical: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
                };

                return (
                  <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-400">{row.time}</td>
                    <td className="py-3.5 px-4 font-medium text-white">{row.threatType}</td>
                    <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{row.sourceIp}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.actionTaken}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          statusStyles[row.status]
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
