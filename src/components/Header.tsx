'use client'

import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
              📝
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              BlogSaaS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Posts
            </Link>
            <Link
              href="/sobre"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Explorar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-0.5 bg-neutral-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-neutral-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-neutral-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-4">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Posts
            </Link>
            <Link
              href="/sobre"
              className="text-neutral-600 hover:text-primary-600 font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-center"
            >
              Explorar
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
