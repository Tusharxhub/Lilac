import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function BioSection() {
    return (
        <section className="bg-lilac-beige w-full py-20 md:py-24 lg:py-40 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-12 lg:gap-24 relative">

                {/* LEFT TEXT */}
                <div className="flex flex-col gap-6 max-w-xl mx-auto md:mx-0 items-start text-left order-2 md:order-1">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-lilac-green leading-tight tracking-tight">
                            Hi, I’m Lilac.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-lilac-green font-sans leading-[2] font-normal">
                            I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} width="100%">
                        <Link href="/connect" className="mt-12 md:mt-12 lg:mt-[5.5rem] mx-auto md:ml-32 lg:ml-48 block w-fit border border-lilac-green px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-lilac-green hover:text-lilac-beige transition-colors duration-300 font-bold">
                            Let’s Chat →
                        </Link>
                    </ScrollReveal>
                </div>

                {/* RIGHT IMAGE COLUMN */}
                <div className="relative flex justify-center md:justify-end mt-0 md:mt-0 order-1 md:order-2">
                    <ScrollReveal width="100%" className="flex justify-center md:justify-end relative">
                        {/* Arch image */}
                        <div className="relative w-full max-w-[350px] aspect-[450/650] md:max-w-[400px] lg:max-w-none md:w-[450px] lg:w-[550px] md:h-[600px] lg:h-[750px] rounded-t-full overflow-hidden bg-gray-300 z-10">
                            <Image
                                src="/daiga.webp"
                                alt="Bio Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating overlay circle */}
                        <div
                            className="
                            absolute
                            bottom-[-2rem] right-0
                            md:bottom-[-2rem] md:right-[-2rem] lg:bottom-[-6rem] lg:right-[-8rem]
                            w-32 h-32 md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px]
                            rounded-full
                            overflow-hidden
                            bg-gray-400
                            z-20
                            hidden
                            md:block
                            "
                        >
                            <Image
                                src="/lilac.webp"
                                alt="Bio Overlay"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
