import type { Metadata } from "next";
import "./globals.css";

// Configure fonts
// Satoshi is imported in globals.css

export const metadata: Metadata = {
    title: "Lilac Template",
    description: "Therapy website template clone",
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased bg-lilac-cream text-lilac-green font-sans overflow-x-hidden"
            >
                {children}
            </body>
        </html>
    );
}
