import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readingTime: string
  tags?: string[]
}

export const PostCard = ({
  slug,
  title,
  description,
  date,
  author,
  readingTime,
  tags = [],
}: PostCardProps) => {
  const formattedDate = format(new Date(date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
  
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`} className="no-underline">
        <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
          {title}
        </h2>
      </Link>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span>Por {author}</span>
          <span>{formattedDate}</span>
        </div>
        <span>{readingTime}</span>
      </div>
    </article>
  )
}
