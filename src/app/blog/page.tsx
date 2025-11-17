import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PostCard } from '@/components/PostCard'

export default function BlogPage() {
  const allPosts = [
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
        <h1 className="text-4xl font-bold mb-8">Todos os Posts</h1>
        
        <div className="grid gap-6">
          {allPosts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
