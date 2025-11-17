import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

// Mock posts - em produção, isso viraria de um CMS ou arquivos MDX
const posts: Record<string, any> = {
  'hello-world': {
    title: 'Bem-vindo ao Blog SaaS',
    description: 'Anúncio do lançamento do nosso novo blog moderno construído com Next.js e Tailwind CSS.',
    date: '17 de Novembro de 2025',
    author: 'Fred Leal',
    readingTime: '3 min',
    tags: ['Anúncio', 'Blog'],
    content: `Estamos entusiasmados em anunciar o lançamento do nosso novo blog moderno, construído com as tecnologias mais recentes.

## Tecnologias Utilizadas

- Next.js 15: Framework React com renderização do lado do servidor
- Tailwind CSS: Framework de CSS utilitário
- TypeScript: Para type safety completo
- Design System: Componentes reutilizáveis e consistentes

## O que você encontrará aqui

Este blog é dedicado a compartilhar conhecimento sobre desenvolvimento web moderno, design systems, melhores práticas e tendências em tecnologia.

Fique atento para os próximos artigos!`,
  },
  'design-system-launch': {
    title: 'Lançamento do Design System',
    description: 'Apresentamos nosso design system completo com 15 componentes prontos para produção.',
    date: '16 de Novembro de 2025',
    author: 'Fred Leal',
    readingTime: '8 min',
    tags: ['Design System', 'Componentes'],
    content: `Estamos muito felizes em apresentar nosso design system completo e robusto.

## Componentes

Nosso design system possui 15 componentes prontos para produção:

- 6 Atoms
- 6 Molecules  
- 3 Organisms

Tudo com 100% TypeScript, 338+ testes e WCAG AA de acessibilidade.

Saiba mais em nosso repositório!`,
  },
  'nextjs-best-practices': {
    title: 'Melhores Práticas com Next.js 15',
    description: 'Guia completo sobre as melhores práticas para desenvolvimento com Next.js 15.',
    date: '15 de Novembro de 2025',
    author: 'Fred Leal',
    readingTime: '12 min',
    tags: ['Next.js', 'Web Development'],
    content: `Next.js 15 trouxe muitas melhorias. Aqui estão as melhores práticas.

## Práticas Recomendadas

1. Use App Router para estruturar seus projetos
2. Prefira Server Components por padrão
3. Use next/image para otimização
4. Implemente SSG com generateStaticParams
5. Monitore Web Vitals

Seguindo estas práticas, você garantirá uma aplicação rápida e escalável!`,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
            <p className="text-gray-600 mb-6">Desculpe, este post não existe.</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              Voltar para o blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <article>
          <header className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
              ← Voltar para blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-600 border-t border-b border-gray-200 py-4">
              <div className="flex items-center gap-4">
                <span>Por <strong>{post.author}</strong></span>
                <span>{post.date}</span>
              </div>
              <span>{post.readingTime} de leitura</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16">
            {post.content.split('\n').map((line: string, idx: number) => {
              if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-3xl font-bold mt-6 mb-3">{line.slice(3)}</h2>
              }
              if (line.startsWith('- ')) {
                return <li key={idx} className="ml-6 mb-2 text-gray-700">{line.slice(2)}</li>
              }
              if (line.trim() === '') {
                return <div key={idx} className="h-2" />
              }
              if (line.trim()) {
                return <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{line}</p>
              }
            })}
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-4">Outros Posts</h3>
            <div className="grid gap-4">
              {Object.entries(posts)
                .filter(([s]) => s !== slug)
                .slice(0, 2)
                .map(([s, p]) => (
                  <Link
                    key={s}
                    href={`/blog/${s}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow no-underline"
                  >
                    <h4 className="font-bold text-gray-900 hover:text-blue-600 mb-2">{p.title}</h4>
                    <p className="text-sm text-gray-600">{p.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
