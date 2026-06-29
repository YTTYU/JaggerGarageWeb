import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border border-ember/32 bg-white/[0.075] text-white shadow-[0_16px_46px_rgba(0,0,0,0.28)] backdrop-blur-xl hover:border-ember/52 hover:bg-ember/12 hover:shadow-[0_18px_58px_rgba(141,160,184,0.18)]",
        secondary:
          "border border-white/14 bg-black/24 text-white/86 backdrop-blur-xl hover:border-white/26 hover:bg-white/[0.075] hover:text-white",
        ghost: "text-white/76 hover:bg-white/[0.07] hover:text-white",
      },
      size: {
        default: "h-12 px-5",
        lg: "h-14 px-7 text-[15px]",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
