"use client";

import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
    ...props
}: ScrollRevealProps) {
    const prefersReducedMotion = useReducedMotion();
    const variants = prefersReducedMotion
        ? {
              hidden: { opacity: 1, y: 0 },
              visible: { opacity: 1, y: 0 },
          }
        : {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
          };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={
                prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.8, ease: "easeOut", delay }
            }
            className={className}
            style={{ width }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
