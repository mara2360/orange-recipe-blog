import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-orange-500 dark:bg-orange-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Orange Blog</h3>
            <p className="mb-4">Sharing delicious passed down 
            family recipes and 
            desserts for every occasion.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-200 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-orange-200 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-200 transition-colors">
                  Recipe Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-200 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get the latest recipes and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-white text-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-orange-400 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} The Orange Recipe Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
