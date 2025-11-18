'use client'

import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 mt-section-xl">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-section-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                📝
              </div>
              <span className="font-bold text-white">BlogSaaS</span>
            </div>
            <p className="text-sm text-neutral-400">
              Artigos sobre desenvolvimento web, design systems e boas práticas em tecnologia.
            </p>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white font-semibold mb-4">Blog</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Todos os Posts
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Populares
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Categorias
                </Link>
              </li>
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h3 className="text-white font-semibold mb-4">Comunidade</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              © {currentYear} BlogSaaS. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-500">Status: Operacional</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
