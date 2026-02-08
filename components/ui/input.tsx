import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground selection:bg-primary selection:text-primary-foreground",
        "flex h-11 w-full min-w-0 rounded-full border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
        "bg-[#141414] border-[#1F1F1F] placeholder-[#8C8C8C] text-white ", //custom styles
        "focus-visible:border-[#FF5600]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
