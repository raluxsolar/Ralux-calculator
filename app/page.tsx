import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="h-screen overflow-auto bg-cover text-white bg-center pb-20 pt-8 bg-no-repeat"
      style={{ backgroundImage: "url('/ralux-bg-img.png')" }}
    >
      <div className="flex flex-col items-center mt-16 rounded-[40px] md:rounded-[56px] bg-[#0F0F0F]/35 backdrop-blur-lg p-4 md:p-6 sm:mx-auto mx-4 sm:max-w-120 md:max-w-125 lg:max-w-142  xl:max-w-180">
        <h1 className="font-bold text-3xl">Ralux calculators</h1>
        <div className="mt-10 w-full space-y-6">
          <Button
            asChild
            className="w-full rounded-full bg-[#141414] py-6 text-base text-white hover:bg-[#1d1d1d]"
          >
            <Link href="/rail-less-systems">Rail Less Systems Calculator</Link>
          </Button>
          <Button
            asChild
            className="w-full rounded-full bg-[#141414] py-6 text-base text-white hover:bg-[#1d1d1d]"
          >
            <Link href="/dual-rail-systems">Dual Rail Systems Calculator</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
