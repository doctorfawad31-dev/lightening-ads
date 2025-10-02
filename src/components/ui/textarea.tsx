import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full transition-all duration-300 focus-within:shadow-[0_0_20px_rgba(255,204,0,0.3)]">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-electric-gold to-electric-blue p-[2px]">
        <div className="h-full w-full rounded-md bg-background" />
      </div>
      <textarea
        className={cn(
          "relative flex min-h-[80px] w-full rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
