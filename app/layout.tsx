import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://omarelali.dev"),
  title: {
    template: "%s — Omar El-Ali",
    default: "Omar El-Ali — Software Engineer & Full-Stack Developer",
  },
  description:
    "Omar El-Ali is a Software Engineer and Full-Stack Developer based in Akkar, Lebanon. Computer Science graduate (Lebanese University) specializing in scalable web applications, backend systems, real-time platforms, and network infrastructure.",
  authors: [{ name: "Omar El-Ali" }],
  creator: "Omar El-Ali",
  publisher: "Omar El-Ali",
  robots: "index, follow",
  category: "portfolio",
  openGraph: {
    title: "Omar El-Ali — Engineering the Digital Universe",
    description:
      "Immersive portfolio of Omar El-Ali, Full-Stack Software Engineer. Scalable applications, real-time systems, and meaningful digital experiences.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Omar El-Ali",
    images: [
      {
        url: "/images/logoofme.png",
        width: 1200,
        height: 630,
        alt: "Omar El-Ali — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar El-Ali — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack software engineer based in Akkar, Lebanon. Scalable applications, backend systems, and real-time platforms.",
    creator: "@omarelali",
  },
  icons: {
    icon: "/images/logoofme.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-black`}
        suppressHydrationWarning
      >
        <div className="bg-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.028]" />
        <Navbar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  )
}
