import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata();

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
