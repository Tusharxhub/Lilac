import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blogData";
import ScrollReveal from "../ScrollReveal";

export default function BlogGrid() {
    return (
        <section className="w-full py-16 px-6 md:px-8 lg:px-24 bg-lilac-beige">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-20">
                {blogPosts.map((post, index) => (
                    <ScrollReveal key={post.id} delay={index * 0.1} width="100%">
                        <div className="flex flex-col gap-6 group">
                            {/* Image */}
                            <Link href={`/blog/${post.id}`} className="w-full aspect-[3/2] relative overflow-hidden block">
                                <Image
                                    src={post.imageLabel}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </Link>

                            {/* Content */}
                            <div className="flex flex-col gap-4 items-start">
                                <span className="text-xs font-bold tracking-[0.05em] text-lilac-green uppercase">
                                    {post.date}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-serif text-lilac-green font-normal leading-tight">
                                    <Link href={`/blog/${post.id}`} className="hover:opacity-70 transition-opacity">
                                        {post.title}
                                    </Link>
                                </h3>
                                <div className="mt-2">
                                    <Link href={`/blog/${post.id}`} className="inline-block text-sm font-bold border-b border-lilac-green pb-0.5 text-lilac-green hover:opacity-70 transition-opacity uppercase tracking-wide">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
