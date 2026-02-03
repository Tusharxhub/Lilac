import ScrollReveal from "../ScrollReveal";

export default function BookingSection() {
    return (
        <section className="w-full bg-lilac-beige py-24 md:py-32 flex flex-col items-center text-center px-4">
            <ScrollReveal>
                <h2 className="text-4xl min-[400px]:text-5xl md:text-5xl font-serif font-medium text-lilac-green mb-8">
                    Book an appointment.
                </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <p className="max-w-[60rem] text-xl md:text-2xl text-lilac-green font-sans leading-relaxed mb-48 text-left self-center w-full">
                    Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} width="100%" className="w-full flex flex-col items-center">
                {/* Placeholder for Widget */}
                {/* Matched to screenshot: white box, shadow, smaller, centered */}
                <div className="w-full max-w-[500px] bg-white px-5 py-10 shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-4 min-h-[300px]">
                    <h3 className="text-lg md:text-xl font-bold text-black tracking-tight">This page is not active</h3>
                    <p className="text-xs md:text-sm text-gray-500 max-w-xs text-center leading-relaxed">
                        If you're the owner, please log into your account to start a free trial or subscribe.
                    </p>
                    <button className="bg-black text-white px-6 py-3 text-[10px] tracking-[0.2em] font-bold uppercase mt-2 hover:opacity-80 transition-opacity">
                        Go to Account
                    </button>
                </div>
                <div className="mt-28 text-center">
                    <p className="text-[10px] text-black uppercase tracking-widest mb-1 font-bold">Powered by</p>
                    <h4 className="text-lg font-serif italic text-black">acuity:scheduling</h4>
                </div>
            </ScrollReveal>
        </section>
    );
}
