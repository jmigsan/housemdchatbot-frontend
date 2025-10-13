import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const winXpTahoma = localFont({
    src: "./assets/fs-tahoma-8px.otf.woff2",
    variable: "--font-winXpTahoma",
});

export const metadata: Metadata = {
    title: "House MD Chatbot by Juan Miguel Sanchez",
    description: "Talk to Dr Gregory House.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={winXpTahoma.className}>{children}</body>
        </html>
    );
}
