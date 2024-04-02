"use client";
import { useEffect, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiWechatLogoLight } from "react-icons/pi";
import { PiUsersFourLight } from "react-icons/pi";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "user-info",
    label: "User Info",
    path: "/user-info",
    icon: <PiUsersFourLight size={25} />,
  },
  {
    id: "chat-bot",
    label: "Chat Bot",
    path: "/chat-bot",
    icon: <PiWechatLogoLight size={25} />,
  },
];

export default function Sidebar({ setSelectedItem }) {
  const { sidebarOpen } = useContext(GlobalContext);

  const router = useRouter();

  const pathname = usePathname();

  const handleNavigate = (menuItem) => {
    setSelectedItem(menuItem.label);
    router.push(menuItem.path);
  };

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-[#000a1f] duration-300 ease-linear lg:static lg:translate-x-0
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <Link href={"/dashboard"} className="text-[28px] text-white flex items-center justify-center gap-2">
          <img className="w-[30px] object-cover" src={logo.src} alt="" />
          ENFINITE
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1">
              {menuItems.map((menuItems) => (
                <li key={menuItems.id}>
                  <label
                    onClick={() => handleNavigate(menuItems)}
                    className={`group relative cursor-pointer flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-gray-600
                ${pathname.includes(menuItems.id) && "bg-gray-600"}
                `}
                  >
                    {menuItems.icon}
                    {menuItems.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
