'use client'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Blog</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-white transition-colors">Todos os Posts</a></li>
              <li><a href="/categorias" className="hover:text-white transition-colors">Categorias</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Comunidade</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">© {currentYear} Blog SaaS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
