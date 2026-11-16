"use client";

import React, { useState } from "react";
import { Download, Clock, LogOut, ArrowUp, ArrowDown } from "lucide-react";
import { TrafficSource } from "@/lib/types";

export default function AnalyticsAdminPage() {
  const [timeframe, setTimeframe] = useState("Last 7 Days");

  const chartData = [
    { day: "Mon", value: "40%", height: "40%" },
    { day: "Tue", value: "65%", height: "65%" },
    { day: "Wed", value: "55%", height: "55%" },
    { day: "Thu", value: "80%", height: "80%" },
    { day: "Fri", value: "70%", height: "70%" },
    { day: "Sat", value: "90%", height: "90%" },
    { day: "Sun", value: "60%", height: "60%" },
  ];

  const sources: TrafficSource[] = [
    { source: "Direct", users: "5,200", change: "↑ 10%", isPositive: true },
    { source: "Organic Search", users: "3,100", change: "↑ 5%", isPositive: true },
    { source: "Social Media (Instagram)", users: "2,500", change: "↑ 25%", isPositive: true },
    { source: "Referrals", users: "800", change: "↓ 3%", isPositive: false },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
            System Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Monitor real-time network traffic, session duration, and referral channels
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/25 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Traffic Overview Chart */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="font-orbitron font-bold text-lg text-white">
            Traffic Overview ({timeframe})
          </h3>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none focus:border-[#00F0FF]"
          >
            <option value="Last 7 Days" className="bg-[#050A14]">Last 7 Days</option>
            <option value="Last 30 Days" className="bg-[#050A14]">Last 30 Days</option>
            <option value="This Year" className="bg-[#050A14]">This Year</option>
          </select>
        </div>

        {/* Bar Chart */}
        <div className="h-64 sm:h-72 flex items-end justify-around gap-2 sm:gap-4 p-4 rounded-xl bg-black/30 border border-white/5 pt-10">
          {chartData.map((bar) => (
            <div key={bar.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[11px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {bar.value}
              </span>
              <div
                style={{ height: bar.height }}
                className="w-full max-w-[48px] rounded-t-lg bg-gradient-to-t from-[#00F0FF] to-[#BF00FF] transition-all duration-500 group-hover:brightness-125 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] cursor-pointer"
              />
              <span className="font-orbitron text-xs text-slate-400 group-hover:text-white transition-colors">
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[#00F0FF] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Avg. Session
            </span>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
              <Clock className="w-5 h-5 text-[#00F0FF]" />
            </div>
          </div>
          <div className="font-orbitron font-bold text-3xl text-white">12m</div>
          <div className="flex items-center gap-1.5 text-xs text-[#00FF9D]">
            <ArrowUp className="w-3.5 h-3.5" />
            <span>+2m vs last week</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[#00FF9D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Bounce Rate
            </span>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
              <LogOut className="w-5 h-5 text-[#00FF9D]" />
            </div>
          </div>
          <div className="font-orbitron font-bold text-3xl text-white">25%</div>
          <div className="flex items-center gap-1.5 text-xs text-[#00FF9D]">
            <ArrowDown className="w-3.5 h-3.5" />
            <span>-2% (Good)</span>
          </div>
        </div>
      </div>

      {/* Traffic Sources Table */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white">Traffic Sources</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-orbitron uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-4">Source</th>
                <th className="pb-3 px-4">Users</th>
                <th className="pb-3 px-4 text-right">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sources.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">{item.source}</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{item.users}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span
                      className={`text-xs font-mono font-semibold ${
                        item.isPositive ? "text-[#00FF9D]" : "text-[#FF0055]"
                      }`}
                    >
                      {item.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
