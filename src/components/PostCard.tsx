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
  const formattedDate = format(new Date(date), "d 'de' MMMM", { locale: ptBR })

  return (
    <article className="group relative bg-white border border-neutral-200 rounded-xl p-6 md:p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-xl transition-all pointer-events-none" />

      <div className="relative">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span
                key={tag}
                className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full border border-primary-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${slug}`} className="no-underline">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-neutral-600 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-neutral-100">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
              {author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium text-neutral-900">{author}</p>
              <p className="text-neutral-500 text-xs">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 bg-neutral-50 px-3 py-1 rounded-full">
              {readingTime}
            </span>
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3"
            >
              Ler mais
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
