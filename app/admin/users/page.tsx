"use client";

import React, { useState } from "react";
import { Plus, MoreVertical } from "lucide-react";
import { UserRecord } from "@/lib/types";

export default function UsersAdminPage() {
  const [filter, setFilter] = useState<"All" | "Active" | "Banned">("All");

  const initialUsers: UserRecord[] = [
    {
      id: "1",
      name: "Rahul Sharma",
      email: "rahul.s@example.com",
      role: "Parent",
      joined: "Jan 12, 2024",
      status: "Active",
    },
    {
      id: "2",
      name: "Amit Singh",
      email: "amit.singh@test.com",
      role: "Admin",
      joined: "Dec 20, 2023",
      status: "Active",
    },
    {
      id: "3",
      name: "Sneha Gupta",
      email: "sneha.g@example.com",
      role: "Student",
      joined: "Jan 14, 2024",
      status: "Pending",
    },
    {
      id: "4",
      name: "Bot Account",
      email: "bot@spam.com",
      role: "User",
      joined: "Jan 10, 2024",
      status: "Banned",
    },
  ];

  const filteredUsers = initialUsers.filter((u) => {
    if (filter === "All") return true;
    return u.status === filter;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
          User Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Review, filter, and manage platform user credentials and roles
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {(["All", "Active", "Banned"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === tab
                    ? "bg-[#00F0FF] text-black shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {tab === "All" ? "All Users" : tab}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#BF00FF]/20 text-[#BF00FF] border border-[#BF00FF]/40 hover:bg-[#BF00FF]/30 transition-all shadow-[0_0_15px_rgba(191,0,255,0.25)]">
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-orbitron uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-4">User Name</th>
                <th className="pb-3 px-4">Email</th>
                <th className="pb-3 px-4">Role</th>
                <th className="pb-3 px-4">Joined</th>
                <th className="pb-3 px-4">Status</th>
                <th className="pb-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user) => {
                const statusStyles = {
                  Active: "bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30",
                  Pending: "bg-[#FFD600]/15 text-[#FFD600] border-[#FFD600]/30",
                  Banned: "bg-[#FF0055]/15 text-[#FF0055] border-[#FF0055]/30",
                };

                return (
                  <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">{user.name}</td>
                    <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{user.email}</td>
                    <td className="py-3.5 px-4 text-[#00F0FF]">{user.role}</td>
                    <td className="py-3.5 px-4 text-slate-400 text-xs">{user.joined}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          statusStyles[user.status]
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
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
