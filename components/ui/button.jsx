import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap rounded-lg tracking-wide uppercase font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-slate-500 border-2 border-b-4 border-slate-600 active:border-b-2 hover:bg-slate-600/90 ",
        defaultOutline:
          "border-2 border-b-4 border-slate-500 active:border-b-2 hover:bg-slate-200 bg-white text-slate-500",
        primary:
          "text-primary-foreground bg-sky-400 border-b-4 border-sky-600 hover:bg-sky-500/90 active:border-b-0",
        primaryOutline: "text-sky-500 hover:bg-sky-100 ",
        secondry:
          "text-primary-foreground bg-green-400 border-b-4 border-green-600 hover:bg-green-500/90 active:border-b-0",
        secondryOutline:
          "text-green-500 border-2 border-b-4 border-green-200 border-green-500  hover:bg-green-100 active:border-b-2",
        dangerous:
          "text-primary-foreground bg-red-500 border-b-4 border-red-700 hover:bg-red-600/90 active:border-b-0",
        dangerousOutline: "text-red-600  hover:bg-red-100 ",
        super:
          "text-primary-foreground bg-indigo-500 border-b-4 border-indigo-700 hover:bg-indigo-600/90 active:border-b-0",
        superOutline:
          "text-indigo-600 border-2 border-b-4 border-indigo-600 hover:bg-indigo-100 active:border-b-2",
        ghost: "hover:bg-accent hovar:text-accent-foreground text-slate-600",
        sidebarOutlint: " bg-slate-200 text-slate-800 hover:bg-slate-200",
        locked:
          "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active-border-0",
      },

      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9  px-3",
        lg: "h-12  px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
