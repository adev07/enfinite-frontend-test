"use client";
import Link from "next/link";


export default function Home() {
  
  return (
    <>
      <button
        className="bg-[#000a1f] border border-[#000A1F] text-white rounded-lg px-4 py-2 mt-4 hover:bg-white hover:text-[#000A1F]"
      >
        <Link href="/dashboard">Go to dashboard</Link>
      </button>
    </>
  );
}
