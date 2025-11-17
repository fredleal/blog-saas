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
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Blog SaaS
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Artigos sobre desenvolvimento web, design systems, e boas práticas em tecnologia.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Todos os Posts
            </Link>
          </div>
        </section>

        {/* Featured Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Posts Recentes</h2>
          <div className="grid gap-6">
            {featuredPosts.map(post => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
