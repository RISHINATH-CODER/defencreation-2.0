import React from "react";
import { Upload, Book, Video, Download, UserCheck } from "lucide-react";
import { TopResource } from "@/lib/types";

export default function YuvaMitraAdminPage() {
  const stats = [
    {
      title: "E-Books",
      value: "340",
      trend: "Available",
      icon: <Book className="w-5 h-5 text-[#BF00FF]" />,
      border: "border-l-[#BF00FF]",
    },
    {
      title: "Video Tutorials",
      value: "125",
      trend: "HD Quality",
      icon: <Video className="w-5 h-5 text-[#00F0FF]" />,
      border: "border-l-[#00F0FF]",
    },
    {
      title: "Total Downloads",
      value: "15,600",
      trend: "+500 this week",
      icon: <Download className="w-5 h-5 text-[#00FF9D]" />,
      border: "border-l-[#00FF9D]",
    },
    {
      title: "Active Readers",
      value: "2,800",
      trend: "Learning Now",
      icon: <UserCheck className="w-5 h-5 text-[#FFD600]" />,
      border: "border-l-[#FFD600]",
    },
  ];

  const topContent: TopResource[] = [
    {
      id: "1",
      title: "Cyber Safety 101",
      type: "E-Book (PDF)",
      category: "Education",
      downloads: "5,400",
      rating: "4.9 ★",
    },
    {
      id: "2",
      title: "Python for Beginners",
      type: "Video Series",
      category: "Coding",
      downloads: "3,200",
      rating: "4.8 ★",
    },
    {
      id: "3",
      title: "Mental Health Guide",
      type: "E-Book (EPUB)",
      category: "Wellness",
      downloads: "2,100",
      rating: "4.9 ★",
    },
    {
      id: "4",
      title: "Ethical Hacking Intro",
      type: "Video",
      category: "Security",
      downloads: "1,800",
      rating: "4.7 ★",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-orbitron font-bold text-2xl text-white tracking-wide">
            YuvaMitra Resources
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Curate youth library catalog, books, learning pathways, and tutorials
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#BF00FF]/20 text-[#BF00FF] border border-[#BF00FF]/40 hover:bg-[#BF00FF]/30 transition-all shadow-[0_0_15px_rgba(191,0,255,0.25)]">
          <Upload className="w-4 h-4" />
          <span>Upload Resource</span>
        </button>
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
            <div className="text-xs text-slate-400 font-mono">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Top Content Table */}
      <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-orbitron font-bold text-lg text-white">Top Content</h3>
          <button className="px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#BF00FF]/15 text-[#BF00FF] border border-[#BF00FF]/30 hover:bg-[#BF00FF]/25 transition-all">
            Library Manager
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-orbitron uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-4">Title</th>
                <th className="pb-3 px-4">Type</th>
                <th className="pb-3 px-4">Category</th>
                <th className="pb-3 px-4">Downloads</th>
                <th className="pb-3 px-4 text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topContent.map((row) => (
                <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">{row.title}</td>
                  <td className="py-3.5 px-4 text-slate-300 text-xs">{row.type}</td>
                  <td className="py-3.5 px-4 text-[#BF00FF] font-mono text-xs">
                    {row.category}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">
                    {row.downloads}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30">
                      {row.rating}
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
