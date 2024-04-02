"use client";
import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Header(props) {
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
  return (
    <header>
      <div className="flex w-full bg-white">
        <div className="flex flex-grow items-center justify-between gap-2 p-[24px] shadow md:px-6 2xl:px-11">
          <div className="">
            {props.selectedItem ? (
              <span className="text-[#333333] opacity-70 font-semibold text-[18px]">
                {props.selectedItem}
              </span>
            ) : null}
          </div>
          <div className="relative p-2">
            <div className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-primary flex items-center justify-center text-[white] rounded-full">
              6
            </div>
          </div>
          <div className="w-[1px] h-[40px] bg-border_light"></div>
          <div className="flex gap-3 items-center">
            <div className="rounded-full border  border-gray-200">
              <img
              className="rounded-full h-[36px] w-[36px]"
                src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1-640x640.jpg"
                alt=""
              />
            </div>
            <div>
              <h6 className="text-sm">Aditya Anand</h6>
              <p className="text-xs">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
