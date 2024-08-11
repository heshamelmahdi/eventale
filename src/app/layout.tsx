import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Eventale",
  description: "The leading event management provider in Egypt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-y-scroll overflow-x-hidden w-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
