import "./globals.css"
import Navbar from "@/components/Navbar"
import type { Metadata } from "next"
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"

export const metadata: Metadata = {
  title: "Omar El-Ali | Senior Full-Stack Engineer",
  description: "Crafting premium digital experiences with precision and motion.",
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
        className="antialiased selection:bg-white/10 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

