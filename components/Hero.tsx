import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row items-end justify-between px-6 md:px-8 lg:px-12 pt-24 md:pt-32 lg:pt-40 pb-0 w-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px] max-w-[1920px] mx-auto gap-12 lg:gap-16">
            {/* Left Image Arch */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative lg:ml-12 order-2 lg:order-1 mt-12 lg:mt-0">
                <ScrollReveal width="100%">
                    <div className="relative w-full max-w-[350px] aspect-[400/550] md:max-w-[500px] lg:max-w-none lg:w-[650px] lg:h-[850px] rounded-t-full overflow-hidden mx-auto lg:mx-0">
                        <Image
                            src="/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-8 md:space-y-10 self-center pb-8 lg:pb-0 lg:pr-8 lg:-mt-8 order-1 lg:order-2">
                <ScrollReveal delay={0.2}>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-lilac-green leading-tight tracking-normal">
                        Live your life <br /> in full bloom
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className="text-lilac-green font-sans text-base md:text-lg lg:text-lg tracking-normal font-medium max-w-xs md:max-w-md lg:max-w-none">
                        Therapy for Adults in Minneapolis, MN.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <button className="border border-lilac-green font-bold px-10 py-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-lilac-green hover:text-lilac-cream transition-colors duration-300 font-medium">
                        Connect with me &rarr;
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
