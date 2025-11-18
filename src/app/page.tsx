import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'

export default function Home() {
  const featuredPosts = [
    {
      slug: 'hello-world',
      title: 'Bem-vindo ao Blog SaaS',
      description: 'Anúncio do lançamento do nosso novo blog moderno construído com Next.js e Tailwind CSS.',
      date: '2025-11-17',
      author: 'Fred Leal',
      readingTime: '3 min',
      tags: ['Anúncio', 'Blog'],
    },
    {
      slug: 'design-system-launch',
      title: 'Lançamento do Design System',
      description: 'Apresentamos nosso design system completo com 15 componentes prontos para produção.',
      date: '2025-11-16',
      author: 'Fred Leal',
      readingTime: '8 min',
      tags: ['Design System', 'Componentes'],
    },
    {
      slug: 'nextjs-best-practices',
      title: 'Melhores Práticas com Next.js 15',
      description: 'Guia completo sobre as melhores práticas para desenvolvimento com Next.js 15.',
      date: '2025-11-15',
      author: 'Fred Leal',
      readingTime: '12 min',
      tags: ['Next.js', 'Web Development'],
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-section-lg pb-section-xl overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                ✨ Bem-vindo ao BlogSaaS
              </span>
            </div>

            <h1 className="text-display-md md:text-display-lg font-bold mb-6 text-neutral-900 leading-tight">
              Artigos sobre{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Desenvolvimento Web
              </span>
            </h1>

            <p className="text-body-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Design systems, boas práticas, React, TypeScript, Next.js e tudo sobre desenvolvimento moderno.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Explorar Posts
              </Link>
              <Link
                href="/sobre"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all"
              >
                Sobre Mim
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-section-lg grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-lg p-4">
                <p className="text-2xl font-bold text-primary-600">15+</p>
                <p className="text-sm text-neutral-600">Artigos Publicados</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-lg p-4">
                <p className="text-2xl font-bold text-secondary-600">10K+</p>
                <p className="text-sm text-neutral-600">Leitores Mensais</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-lg p-4">
                <p className="text-2xl font-bold text-accent-600">4+ anos</p>
                <p className="text-sm text-neutral-600">Experiência</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-section-xl">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-heading-lg font-bold text-neutral-900 mb-3">
                Posts Recentes
              </h2>
              <p className="text-neutral-600">
                Artigos mais recentes sobre desenvolvimento, design e tecnologia
              </p>
            </div>

            <div className="grid gap-6 mb-12">
              {featuredPosts.map(post => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Ver todos os artigos
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-section-lg">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center text-white">
            <h2 className="text-heading-lg font-bold mb-4">Receba novos artigos</h2>
            <p className="text-primary-100 mb-8 text-lg">
              Inscreva-se na nossa newsletter para receber os últimos artigos sobre desenvolvimento web.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
