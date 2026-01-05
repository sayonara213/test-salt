import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "rounded-full",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "text-white",
          "border-2",
          "relative",
          "overflow-hidden",
          "bg-[#1a1a1a]",
          "border-transparent",
          "[background:linear-gradient(#1a1a1a,#1a1a1a)_padding-box,linear-gradient(90deg,#963488,#FC6F32,#FF4A59)_border-box]",
          "before:absolute before:inset-0 before:rounded-full",
          "before:bg-gradient-to-r before:from-[#963488] before:via-[#FC6F32] before:to-[#FF4A59]",
          "before:opacity-0 before:transition-opacity before:duration-300 before:ease-out",
          "hover:before:opacity-100",
          "active:scale-[0.98]",
        ].join(" "),
        outline: [
          "text-white",
          "border-2",
          "bg-transparent",
          "border-transparent",
          "[background:linear-gradient(transparent,transparent)_padding-box,linear-gradient(90deg,#963488,#FC6F32,#FF4A59)_border-box]",
          "hover:brightness-110",
          "active:scale-[0.98]",
        ].join(" "),
        ghost: [
          "text-white/80",
          "bg-transparent",
          "hover:text-white",
          "hover:bg-white/5",
        ].join(" "),
        link: [
          "h-auto px-0",
          "bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]",
          "bg-clip-text text-transparent",
          "underline-offset-4 hover:underline",
        ].join(" "),
      },
      size: {
        default: "h-12 px-8 text-base",
        sm: "h-9 px-5 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
