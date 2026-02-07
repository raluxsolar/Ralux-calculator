"use client";

import React from "react";
//import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat p-4 text-white"
      style={{ backgroundImage: "url('/ralux-bg-img.png')" }}
    >
      <div className="flex w-full max-w-240 flex-col items-center text-center rounded-[40px] bg-[#0F0F0F]/45 backdrop-blur-lg border border-white/10 p-6 md:p-10">
        {/*<div className="mb-8">
          <Image
            src="/assets/images/not-found.png"
            alt="Page not found illustration"
            width={640}
            height={420}
            className="w-full max-w-md h-auto"
            priority
          />
        </div>*/}

        <h1 className="font-medium text-7xl text-white max-sm:text-2xl">
          404 Error
        </h1>

        <p className="mt-4 text-white/80 text-base font-normal max-sm:text-sm">
          Sorry, the page you are looking for doesn&apos;t exist or <br />
          has been moved.
        </p>

        <div className="mt-6 w-full max-w-90">
          <Button
            type="button"
            onClick={() => router.push("/")}
            className="w-full rounded-full h-11 text-[14px] bg-[#FA4616] hover:bg-[#d93d14]"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
