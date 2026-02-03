"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = {
    primary: "bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
    secondary: "bg-transparent border border-gray-200 text-primary hover:border-accent hover:text-accent hover:bg-accent/5",
    ghost: "bg-transparent text-primary hover:bg-gray-100 hover:text-accent",
    link: "text-primary underline-offset-4 hover:underline hover:text-accent",
};

const buttonSizes = {
    sm: "h-9 px-3 rounded-md text-xs",
    default: "h-11 px-8 py-2 rounded-full font-medium tracking-wide",
    lg: "h-14 px-8 rounded-full text-lg",
    icon: "h-10 w-10",
};

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", isLoading, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    buttonVariants[variant],
                    buttonSizes[size],
                    className
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children as React.ReactNode}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
