import Link from "next/link";
import Image from "next/image";

import ScrollReveal from "./ScrollReveal";

export default function IntroSection() {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto">
            {/* Left Content */}
            {/* Left Content */}
            <div className="w-full lg:w-1/2 bg-lilac-beige flex flex-col justify-between relative min-h-[500px] md:min-h-[600px] lg:min-h-[800px]">
                <div className="px-8 md:px-12 lg:px-32 py-20 md:py-24 lg:py-48 flex flex-col justify-center gap-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-lilac-green leading-tight tracking-tight">
                            Live a fulfilling life.
                        </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                        <ScrollReveal delay={0.2}>
                            <p className="text-base md:text-lg leading-relaxed text-lilac-green font-sans">
                                Life can be challenging—especially when you’re trying to balance your personal and professional life.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <p className="text-base md:text-lg leading-relaxed text-lilac-green font-sans">
                                It’s easy to feel like you’re alone in facing these challenges, but I want you to know that I’m here to help.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Get in touch button bar */}
                <Link href="/connect" className="w-full border-t font-bold border-lilac-green/20 py-8 text-xs tracking-[0.2em] uppercase text-lilac-green hover:bg-lilac-green hover:text-lilac-beige transition-colors duration-300 flex items-center justify-center gap-2">
                    Get in touch &rarr;
                </Link>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[800px] bg-gray-200 relative">
                <ScrollReveal width="100%" className="h-full">
                    <Image
                        src="/tanya.webp"
                        alt="Intro Section Image"
                        fill
                        className="object-cover"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
