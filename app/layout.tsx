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
  title: "Omar El-Ali — Software Engineer",
  description:
    "Full-stack software engineer focused on scalable web applications, real-time systems, and product engineering.",
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
