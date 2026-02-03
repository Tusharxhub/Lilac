import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function BlogHero() {
    return (
        <section className="w-full bg-lilac-cream py-20 md:py-24 lg:py-40">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-8 lg:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">

                {/* Left: Arched Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-8 lg:pl-16">
                    <div className="relative w-[150px] h-[240px] mt-12 md:mt-0 md:w-[450px] md:h-[650px] lg:w-[580px] lg:h-[850px]">
                        <ScrollReveal width="100%" className="h-full">
                            <div className="w-full h-full overflow-hidden rounded-t-full relative bg-gray-200">
                                <Image
                                    src="/books.webp"
                                    alt="Books and cozy setting"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8 z-10 md:-ml-12 lg:-ml-32 md:-mt-8 lg:-mt-12">
                    <ScrollReveal delay={0.2}>
                        <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-serif text-lilac-green font-normal leading-tight">
                            The Lilac Blog
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="space-y-6 text-xl md:text-xl lg:text-2xl text-lilac-green font-normal leading-relaxed max-w-lg md:max-w-md lg:max-w-lg">
                            <p>
                                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
                            </p>
                            <p className="font-bold">
                                Glad you're here.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
