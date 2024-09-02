"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidenav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </body>
    </html>
  );
}


