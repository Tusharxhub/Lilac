import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
    return (
        <section className="bg-[#7A7A48] py-12 min-[400px]:py-20 md:py-24 px-6 md:px-12 text-center">
            {/* Used a hex code close to the "olive/army green" seen in screenshot, adapting if needed */}
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                <ScrollReveal>
                    <h2 className="text-3xl min-[400px]:text-4xl md:text-5xl font-serif text-lilac-cream leading-tight tracking-tight">
                        Get started today.
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl leading-relaxed text-lilac-cream font-sans max-w-2xl font-normal">
                        Ready to take the first step towards a happier, healthier you?
                        <br />
                        Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <div className="mt-8">
                        <Link
                            href="/connect"
                            className="border border-lilac-cream px-7 py-4 text-xs tracking-[0.2em] uppercase text-lilac-cream hover:bg-lilac-cream hover:text-[#7A7A48] transition-colors duration-300 font-medium"
                        >
                            Get In Touch &rarr;
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
