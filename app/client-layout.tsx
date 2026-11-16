"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SettingsDrawer from "@/components/SettingsDrawer";
import ToastContainer, { ToastItem } from "@/components/Toast";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: "info" | "success" | "warning" | "error" = "info") => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen flex flex-col cyber-grid-bg">
      <Preloader />
      {!isAdmin && <Navbar />}
      
      <main className={`flex-grow ${!isAdmin ? "pt-24 sm:pt-28" : ""}`}>
        {children}
      </main>

      {!isAdmin && <Footer />}
      {!isAdmin && <SettingsDrawer onShowToast={showToast} />}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
