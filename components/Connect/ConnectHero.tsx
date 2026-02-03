import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ConnectHero() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-lilac-lavender py-16 md:py-24 lg:py-32 pt-24 md:pt-32 lg:pt-40">
            <div className="w-full px-6 md:px-8 lg:px-24 flex flex-col md:flex-row gap-12 lg:gap-24 relative">

                {/* Left Content: Title, Text, Images */}
                <div className="w-full md:w-1/2 flex flex-col gap-12 z-10">
                    <div className="flex flex-col gap-[4rem] md:gap-[5.5rem] items-start mt-8 md:mt-16 ml-4 md:ml-8 lg:ml-12">
                        <ScrollReveal>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-medium text-lilac-green tracking-tight text-left">
                                Let’s Connect
                            </h1>
                        </ScrollReveal>

                        <div className="space-y-6 max-w-lg">
                            <ScrollReveal delay={0.2}>
                                <p className="text-lg md:text-xl text-lilac-green font-sans font-normal text-left">
                                    Starting therapy is courageous.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="text-lg md:text-xl text-lilac-green font-sans font-normal leading-relaxed text-left">
                                    Get in touch for questions, or to book a free 15-minute consultation.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Images - Below Text */}
                    <div className="relative w-[320px] h-[380px] md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[520px] mt-16 md:mt-16 lg:mt-24 ml-8 md:ml-12 lg:ml-24 self-start">
                        <ScrollReveal width="100%" className="w-full h-full relative">
                            {/* Main Arch Image */}
                            <div className="absolute top-0 left-4 md:left-0 w-[200px] h-[280px] md:w-[220px] md:h-[300px] lg:w-[280px] lg:h-[400px] rounded-t-full overflow-hidden bg-gray-300 z-10">
                                <Image
                                    src="/daiga.webp"
                                    alt="Connect Hero Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Smaller Circle Image - Overlapping Bottom Right */}
                            <div className="absolute bottom-24 right-4 md:right-8 w-36 h-36 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-lilac-lavender z-20 bg-gray-200">
                                <Image
                                    src="/lilac.webp"
                                    alt="Connect Secondary Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Right Content: Note Box */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center md:items-start md:mt-48 lg:mt-64">
                    <ScrollReveal delay={0.4} className="w-full max-w-xl lg:max-w-2xl">
                        <div className="bg-lilac-green p-8 md:p-8 lg:p-12 text-lilac-cream text-base md:text-base lg:text-lg font-sans leading-relaxed w-full shadow-lg">
                            <p>
                                <span className="font-bold block mb-4 text-xl md:text-xl lg:text-2xl text-lilac-lavender">PLEASE NOTE:</span>
                                If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
