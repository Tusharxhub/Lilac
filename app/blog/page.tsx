import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/Blog/BlogHero";
import BlogGrid from "@/components/Blog/BlogGrid";
import SubscribeSection from "@/components/Blog/SubscribeSection";

export const metadata: Metadata = {
    title: "Blog — Lilac Template",
    description: "Read our latest thoughts on healing and wholeness.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col font-sans bg-lilac-cream">
            <Navbar />
            <BlogHero />
            <BlogGrid />
            <SubscribeSection />
            <Footer />
        </main>
    );
}
