import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectHero from "@/components/Connect/ConnectHero";
import BookingSection from "@/components/Connect/BookingSection";
import OfficeMap from "@/components/Connect/OfficeMap";
import SocialGrid from "@/components/Connect/SocialGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Appointments — Lilac template",
};

export default function ConnectPage() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <ConnectHero />
            <BookingSection />
            <OfficeMap />
            <SocialGrid />
            <Footer />
        </main>
    );
}
