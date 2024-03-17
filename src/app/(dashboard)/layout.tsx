"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/Components/Navbars/Header";
import Navbar from "@/Components/Navbars/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className=" flex gap-[2rem] items-start justify-between">
          <div className="w-[100%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
