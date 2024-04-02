"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import GlobalState from "@/context/index";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <html lang="en">
      <body className={inter.className}>
          <GlobalState>
            <div className="flex h-screen overflow-hidden">
            <Sidebar setSelectedItem={setSelectedItem} />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#F1F1F1]">
              <Header selectedItem={selectedItem} />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </GlobalState>
      </body>
    </html>
  );
}
