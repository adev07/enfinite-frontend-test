"use client";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{sidebarOpen, setSidebarOpen}}>{children}</GlobalContext.Provider>
  );
}
