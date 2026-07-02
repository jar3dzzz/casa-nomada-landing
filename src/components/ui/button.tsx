import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          // Variants
          variant === "default" && "bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow",
          variant === "destructive" && "bg-red-500 text-slate-50 hover:bg-red-500/90 shadow-sm",
          variant === "outline" && "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
          variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          variant === "ghost" && "hover:bg-slate-100 hover:text-slate-900",
          variant === "link" && "text-slate-900 underline-offset-4 hover:underline",
          // Sizes
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-8 rounded-md px-3 text-xs",
          size === "lg" && "h-12 rounded-xl px-8",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
