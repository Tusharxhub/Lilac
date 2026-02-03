import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function SymptomsSection() {
    const symptoms = [
        "Persistent feelings of sadness or hopelessness",
        "Trouble focusing or making decisions",
        "Difficulty maintaining relationships",
        "Feeling constantly exhausted or unmotivated",
        "A pervasive sense of being overwhelmed",
    ];

    return (
        <section className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto">
            {/* Left Image */}
            <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-gray-300 relative order-1 md:order-1">
                <ScrollReveal width="100%" className="h-full">
                    <Image
                        src="/valeriia.webp"
                        alt="Symptoms Image"
                        fill
                        className="object-cover"
                    />
                </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 bg-lilac-lavender flex flex-col justify-between relative min-h-[500px] md:min-h-[600px] order-2 md:order-2">
                <div className="px-6 md:px-32 py-12 min-[400px]:py-20 md:py-24 flex flex-col justify-center gap-10">
                    <ScrollReveal>
                        <h2 className="text-3xl min-[400px]:text-4xl md:text-5xl font-serif font-medium text-lilac-green leading-tight tracking-tight">
                            You don’t have to do this all <span className="italic">alone</span>.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-base md:text-lg font-sans text-lilac-green font-normal">
                            If you are facing any of these, there’s hope:
                        </p>
                    </ScrollReveal>

                    <ul className="space-y-4 pl-6">
                        {symptoms.map((symptom, index) => (
                            <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                                <li className="flex items-start gap-4 text-base md:text-lg text-lilac-green font-sans font-normal">
                                    <span className="mt-2 w-1.5 h-1.5 bg-lilac-green rounded-full shrink-0" />
                                    {symptom}
                                </li>
                            </ScrollReveal>
                        ))}
                    </ul>

                    <ScrollReveal delay={0.6}>
                        <p className="text-base md:text-lg leading-relaxed text-lilac-green font-sans mt-0 font-normal">
                            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.7} width="100%">
                    <div className="w-full border-t border-lilac-green/20">
                        <Link href="/connect" className="w-full py-8 text-xs md:text-sm tracking-[0.2em] uppercase text-lilac-green hover:bg-lilac-green hover:text-lilac-beige transition-colors duration-300 flex justify-center items-center gap-2 font-bold block text-center">
                            Work With Me &rarr;
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
