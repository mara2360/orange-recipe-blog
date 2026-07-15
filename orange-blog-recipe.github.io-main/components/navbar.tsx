"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import SignUpForm from "@/components/sign-up-form"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-orange-500 dark:bg-orange-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/orange%20%281%29-tYrqoWNHUDN08PeRwgzA2HPqgp8PCO.png"
                alt="Orange Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="font-bold text-xl">The Orange</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/" className={`hover:text-orange-200 transition-colors ${isActive("/") ? "font-bold" : ""}`}>
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-orange-200 transition-colors ${isActive("/about") ? "font-bold" : ""}`}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className={`hover:text-orange-200 transition-colors ${isActive("/gallery") ? "font-bold" : ""}`}
              >
                Recipe Gallery
              </Link>
              <Link
                href="/contact"
                className={`hover:text-orange-200 transition-colors ${isActive("/contact") ? "font-bold" : ""}`}
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center">
              <SignUpForm buttonClassName="bg-white text-orange-500 hover:bg-orange-100 border-white" />
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-500 dark:bg-orange-900">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`hover:text-orange-200 transition-colors ${isActive("/") ? "font-bold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-orange-200 transition-colors ${isActive("/about") ? "font-bold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className={`hover:text-orange-200 transition-colors ${isActive("/gallery") ? "font-bold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`hover:text-orange-200 transition-colors ${isActive("/contact") ? "font-bold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-2 flex items-center">
                <SignUpForm buttonClassName="bg-white text-orange-500 hover:bg-orange-100 border-white" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
