import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Flow Reset Pilates",
  description: "Tu espacio para crecer, sanar y resetear. Clases de Pilates Reformer en un ambiente íntimo y premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
