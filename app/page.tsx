import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Specialties from "@/components/Specialties";
import SymptomsSection from "@/components/SymptomsSection";
import BioSection from "@/components/BioSection";
import BGSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <Hero />
            <IntroSection />
            <Specialties />
            <SymptomsSection />
            <BioSection />
            <FAQSection />
            <BGSection />
            <CTASection />
            <Footer />
        </main>
    );
}
