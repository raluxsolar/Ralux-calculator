'use client';

import Image from "next/image";


export default function Loading() {
  return (
    <div
      className="
        fixed inset-0 
        flex items-center justify-center 
        z-50 w-full bg-[#0F0F0F]/35 backdrop-blur-lg
      "
    >
      <Image src="/loading.gif" alt="Loading..." className="w-24 h-24" width={180} height={180} />

    </div>
  );
}