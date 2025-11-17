'use client'

import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
              📝
            </div>
            <span className="text-xl font-bold">Blog SaaS</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">
              Posts
            </Link>
            <Link href="/sobre" className="hover:text-gray-300 transition-colors">
              Sobre
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
