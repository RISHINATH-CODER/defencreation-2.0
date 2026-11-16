"use client";

import React from "react";
import { CheckCircle2, Info, AlertTriangle, XCircle } from "lucide-react";

export interface ToastItem {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-[#00FF9D]" />,
          info: <Info className="w-5 h-5 text-[#00F0FF]" />,
          warning: <AlertTriangle className="w-5 h-5 text-[#FFD600]" />,
          error: <XCircle className="w-5 h-5 text-[#FF0055]" />,
        };

        const borders = {
          success: "border-[#00FF9D]/40 shadow-[0_0_15px_rgba(0,255,157,0.25)]",
          info: "border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.25)]",
          warning: "border-[#FFD600]/40 shadow-[0_0_15px_rgba(255,214,0,0.25)]",
          error: "border-[#FF0055]/40 shadow-[0_0_15px_rgba(255,0,85,0.25)]",
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-[#050A14]/90 text-white backdrop-blur-xl border ${
              borders[toast.type]
            } animate-in slide-in-from-bottom-2 duration-200`}
          >
            {icons[toast.type]}
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        );
      })}
    </div>
  );
}
