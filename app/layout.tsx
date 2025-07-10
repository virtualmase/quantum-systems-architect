import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer",
  description:
    "Portfolio of John Doe, a passionate full-stack developer and UI/UX designer creating beautiful digital experiences.",
  keywords: "developer, portfolio, full-stack, react, next.js, typescript",
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full Stack Developer",
    description: "Portfolio of John Doe, a passionate full-stack developer and UI/UX designer.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
