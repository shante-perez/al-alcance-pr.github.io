"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Al Alcance</h3>
            <p className="text-sm opacity-90">
              Empowering communities through education, opportunity, and growth in Puerto Rico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:opacity-75">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:opacity-75">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="hover:opacity-75">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:opacity-75">
                  Featured Programs
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:opacity-75">
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:opacity-75">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="https://facebook.com" className="hover:opacity-75">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:opacity-75">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2025 Al Alcance Puerto Rico. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
