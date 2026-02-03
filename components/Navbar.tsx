"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setHidden(true);
            setMobileMenuOpen(false); // Close mobile menu on scroll
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 left-0 w-full backdrop-blur-sm flex justify-center transition-colors duration-300 ${mobileMenuOpen
                    ? "bg-transparent z-[70] pointer-events-none backdrop-blur-none"
                    : "z-50 backdrop-blur-sm"
                    } ${!mobileMenuOpen
                        ? pathname === "/connect"
                            ? "bg-lilac-lavender/90"
                            : pathname?.startsWith("/blog/")
                                ? "bg-lilac-beige/90"
                                : "bg-lilac-cream/90"
                        : ""
                    }`}
            >
                <div className="flex justify-between items-center py-6 px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto w-full relative">

                    {/* Mobile: Hamburger/Close Button (Fixed z-index to stay above overlay) */}
                    <button
                        className="md:hidden text-lilac-green z-[70] relative p-2 order-1 pointer-events-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="flex flex-col gap-1.5 items-center justify-center w-8 h-8 relative">
                            {/* Top Bar */}
                            <span
                                className={`h-[1px] w-8 bg-lilac-green transition-all duration-500 ease-in-out absolute ${mobileMenuOpen ? "rotate-45 top-4" : "rotate-0 top-3"
                                    }`}
                            />
                            {/* Bottom Bar */}
                            <span
                                className={`h-[1px] w-8 bg-lilac-green transition-all duration-500 ease-in-out absolute ${mobileMenuOpen ? "-rotate-45 top-4" : "rotate-0 top-5"
                                    }`}
                            />
                        </div>
                    </button>

                    {/* Mobile: Logo Right | Desktop: Logo Left */}
                    <div className={`text-2xl md:text-3xl font-serif font-medium tracking-wider text-lilac-green z-50 relative order-2 md:order-1 ml-auto md:ml-0 ${mobileMenuOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                        Lilac Template
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-16 text-lilac-green text-lg font-medium tracking-normal md:order-2">
                        <Link
                            href="/blog"
                            className={`hover:opacity-70 transition-opacity ${pathname === '/blog' || pathname?.startsWith('/blog/') ? 'border-b-2 border-lilac-green' : ''}`}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/connect"
                            className={`hover:opacity-70 transition-opacity ${pathname === '/connect' ? 'border-b-2 border-lilac-green' : ''}`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#FAF7F2] z-[60] flex flex-col transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                {/* Overlay Header (Aligns with Navbar) */}
                <div className="flex justify-between items-center py-6 px-6 w-full opacity-100">
                    {/* Placeholder to balance layout if needed, or we just rely on the fixed button above */}
                    <div className="w-12"></div>

                    {/* Logo (Top Right) */}
                    <div className={`text-xl font-serif font-medium tracking-wider text-lilac-green transition-all duration-500 delay-100 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                        Lilac Template
                    </div>
                </div>

                {/* Centered Links */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-32">
                    <Link
                        href="/blog"
                        className={`text-5xl font-serif text-lilac-green hover:opacity-70 transition-all duration-500 delay-200 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/connect"
                        className={`text-5xl font-serif text-lilac-green hover:opacity-70 transition-all duration-500 delay-300 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
