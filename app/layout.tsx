import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://defencreation.com"),
  title: "Defencreation - Protecting Indian Youth Online",
  description:
    "Defencreation empowers parents and youth with cutting-edge cybersecurity solutions for a safer digital India. Free parental control (SurakshithNet) and youth empowerment (YuvaMitra).",
  keywords: [
    "Defencreation",
    "Cybersecurity India",
    "SurakshithNet",
    "YuvaMitra",
    "Parental Control",
    "Digital Safety",
  ],
  authors: [{ name: "Defencreation" }],
  openGraph: {
    title: "Defencreation - Protecting Indian Youth Online",
    description: "Building a national digital safety ecosystem that protects minors from online threats.",
    url: "https://defencreation.com",
    siteName: "Defencreation",
    images: [
      {
        url: "/logo2.png",
        width: 800,
        height: 600,
        alt: "Defencreation Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable} dark`}>
      <body className="min-h-screen bg-[#050A14] text-[#E0E6ED] antialiased selection:bg-[#00F0FF]/30 selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
