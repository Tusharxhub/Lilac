"use client";

import { HTMLMotionProps, motion } from "framer-motion";
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
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
            style={{ width }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
