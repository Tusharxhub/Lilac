import { blogPosts } from "@/components/Blog/blogData";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from "next";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);
    if (!post) {
        return {
            title: "Post Not Found — Lilac Template",
        };
    }
    return {
        title: `${post.title} — Lilac Template`,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postIndex = blogPosts.findIndex((p) => p.id === id);
    const post = blogPosts[postIndex];

    if (!post) {
        notFound();
    }

    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    return (
        <main className="w-full bg-[#E8E4D9] flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow pt-24 pb-20"> {/* Reduced top padding */}

                {/* Main Content Area */}
                <article className="max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
                    {/* Date */}
                    <ScrollReveal delay={0.2}>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-lilac-green uppercase mb-8 block">
                            {post.date}
                        </span>
                    </ScrollReveal>

                    {/* Title */}
                    <ScrollReveal delay={0.3}>
                        <h1 className="text-4xl min-[400px]:text-6xl md:text-6xl font-serif text-lilac-green font-normal mb-16 leading-tight">
                            {post.title}
                        </h1>
                    </ScrollReveal>

                    {/* Body Text */}
                    <div className="text-lilac-green text-xl md:text-[22px] leading-[1.5] space-y-8 text-center md:text-left w-full">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <ScrollReveal key={index} delay={0.4 + (index * 0.1)} width="100%">
                                <p>{paragraph}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </article>

                {/* Bottom Navigation */}
                <div className="w-full px-6 md:px-12 mt-40 flex justify-between items-center text-lilac-green">
                    <div className="flex-1 flex justify-start text-left">
                        {prevPost && (
                            <ScrollReveal delay={0.6}>
                                <Link href={`/blog/${prevPost.id}`} className="inline-flex items-center gap-4 hover:opacity-70 transition-opacity group">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform duration-300"><path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    <span className="text-3xl md:text-4xl font-serif">{prevPost.title}</span>
                                </Link>
                            </ScrollReveal>
                        )}
                    </div>
                    <div className="flex-1 flex justify-end text-right">
                        {nextPost && (
                            <ScrollReveal delay={0.6}>
                                <Link href={`/blog/${nextPost.id}`} className="inline-flex items-center gap-4 hover:opacity-70 transition-opacity group">
                                    <span className="text-3xl md:text-4xl font-serif">{nextPost.title}</span>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform duration-300"><path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </Link>
                            </ScrollReveal>
                        )}
                    </div>
                </div>

            </div>

            {/* Separator Line */}
            <div className="w-full border-t border-lilac-green mt-10"></div>

            <Footer />
        </main>
    );
}
