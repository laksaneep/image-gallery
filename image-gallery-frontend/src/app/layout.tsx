import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nging_ng Gallery",
  description: "Let's tour my gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
        
      </body>
    </html>
  );
}
