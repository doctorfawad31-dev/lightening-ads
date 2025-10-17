import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full rounded-md bg-gradient-to-r from-electric-gold via-electric-blue to-electric-gold p-[1.5px] transition-all duration-300 focus-within:shadow-[0_0_20px_rgba(255,204,0,0.3)]">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm text-muted-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
