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
        <div className=" hidden gap-[2rem] items-start justify-between lg:flex">
          <div className="w-[100%]">{children}</div>
        </div>
        <div className="flex flex-col h-screen items-center justify-center lg:hidden">
            <h2 className="text-lg text-dark-100  ">It seems you are using mobile/tablet device</h2>
            <p className="text-sm text-dark-70 ">Wavetag web app only available for laptop/desktop devices</p>
            <p className="text-sm text-dark-70 ">Switch your device to access wavetag web app</p>
        </div>
      </body>
    </html>
  );
}
