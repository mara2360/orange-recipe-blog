import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "The Orange Recipe Blog",
  description: "Approachable family recipes with bright flavor and a little sunshine.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable}`}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
