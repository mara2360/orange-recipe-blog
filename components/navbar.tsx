"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [{ href: "/gallery", label: "Recipes" }, { href: "/about", label: "Our story" }, { href: "/contact", label: "Say hello" }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="brand" aria-label="The Orange home"><span className="brand-fruit">●</span><span>The Orange</span></Link>
    <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">{links.map(link => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className={pathname.startsWith(link.href) ? "active" : ""}>{link.label}</Link>)}<Link href="/gallery" className="nav-cta">Find a recipe</Link></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
  </div></header>
}
