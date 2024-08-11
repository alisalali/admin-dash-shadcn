import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard Example",
  description:
    "This app created by Ali Alali part of example dashboard using the shadcnUi Components and tailwind css  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
