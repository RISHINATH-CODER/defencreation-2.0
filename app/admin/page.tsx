import React from "react";
import { Users, Signal, ShieldAlert, Server, ArrowUp, ArrowRight } from "lucide-react";
import { ActivityItem } from "@/lib/types";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: "12,450",
      trend: "12% this week",
      icon: <Users className="w-5 h-5 text-[#00F0FF]" />,
      border: "border-l-[#00F0FF]",
    },
    {
      title: "Active Sessions",
      value: "845",
      trend: "5% now",
      icon: <Signal className="w-5 h-5 text-[#00FF9D]" />,
      border: "border-l-[#00FF9D]",
    },
    {
      title: "Threats Blocked",
      value: "1,203",
      trend: "Real-time",
      icon: <ShieldAlert className="w-5 h-5 text-[#FF0055]" />,
      border: "border-l-[#FF0055]",
    },
    {
      title: "Server Health",
      value: "98%",
      trend: "Optimal",
      icon: <Server className="w-5 h-5 text-[#BF00FF]" />,
      border: "border-l-[#BF00FF]",
    },
  ];

  const recentActivity: ActivityItem[] = [
    {
      id: "1",
      user: "Rahul Sharma",
      action: "Login Attempt",
      application: "SurakshithNet",
      time: "2 mins ago",
      status: "Success",
    },
    {
      id: "2",
      user: "Priya Patel",
      action: "Book Download",
      application: "YuvaMitra",
      time: "15 mins ago",
      status: "Completed",
    },
    {
      id: "3",
      user: "Unknown Device",
      action: "Malicious Site Access",
      application: "SurakshithNet",
      time: "45 mins ago",
      status: "Blocked",
    },
    {
      id: "4",
      user: "Amit Singh",
      action: "Password Reset",
      application: "Portal",
      time: "1 hour ago",
      status: "Pending",
    },
    {
      id: "5",
      user: "Sneha Gupta",
      action: "Profile Update",
      application: "YuvaMitra",
      time: "2 hours ago",
      status: "Success",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
          Dashboard Overview
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Real-time performance metrics and recent activity
        </p>
      </div>

      {/* Stats Grid */}
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
            <div className="flex items-center gap-1.5 text-xs text-[#00FF9D]">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent User Activity Table */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-orbitron font-bold text-lg text-white">
            Recent User Activity
          </h3>
          <button className="px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 hover:bg-[#00F0FF]/25 transition-all">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-orbitron uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-4">User</th>
                <th className="pb-3 px-4">Action</th>
                <th className="pb-3 px-4">Application</th>
                <th className="pb-3 px-4">Time</th>
                <th className="pb-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentActivity.map((row) => {
                const statusStyles = {
                  Success: "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30",
                  Completed: "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30",
                  Blocked: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
                  Pending: "bg-[#FFD600]/15 text-[#FFD600] border-[#FFD600]/30",
                };

                return (
                  <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">{row.user}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.action}</td>
                    <td className="py-3.5 px-4 text-[#00F0FF] font-mono text-xs">
                      {row.application}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-xs">{row.time}</td>
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
