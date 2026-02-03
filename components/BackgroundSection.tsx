"use client";

import { useState } from "react";


import ScrollReveal from "./ScrollReveal";

export default function BackgroundSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
        {
            title: "Education",
            content:
                "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
        },
        {
            title: "Licensure",
            content:
                "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
        },
        {
            title: "Certifications",
            content:
                "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
        },
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-lilac-beige py-32 md:py-40 px-8 md:px-16">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-serif text-lilac-green mb-20 text-center tracking-tight leading-tight">
                        My Professional Background
                    </h2>
                </ScrollReveal>

                <div className="w-full border-t border-lilac-green/50">
                    {items.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="border-b border-lilac-green/50">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                                >
                                    <span className="text-xl md:text-4xl font-sans text-lilac-green font-normal">
                                        {item.title}
                                    </span>
                                    <span className="text-lilac-green/70">
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <line x1="12" y1="5" x2="12" y2="19" className={`origin-center transition-transform duration-300 ease-out ${openIndex === index ? "-rotate-90" : "rotate-0"}`} />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-base md:text-lg text-lilac-green font-sans leading-relaxed font-normal">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
