import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-electric-gold to-electric-blue p-[1px]">
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
