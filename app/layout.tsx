import "./globals.css"
import Navbar from "@/components/Navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Omar El-Ali ",
  description: "My personal portfolio",
  icons: {
    icon: "/Omar.webp",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
