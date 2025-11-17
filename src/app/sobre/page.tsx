import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SobrePage() {
  return (
    <>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <article>
          <h1 className="text-4xl font-bold mb-8">Sobre Este Blog</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Blog SaaS é um projeto demonstrativo que showcaseia as melhores práticas em desenvolvimento web moderno.
              Construído com Next.js 15, Tailwind CSS e componentes do nosso design system.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Next.js 15</li>
                  <li>✓ React 19</li>
                  <li>✓ TypeScript 5.6</li>
                  <li>✓ Tailwind CSS 3.4</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Qualidade</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ ESLint & Prettier</li>
                  <li>✓ TypeScript Strict</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ WCAG AA Accessible</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recursos Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">⚡ Performance</h3>
                <p className="text-sm text-gray-600">
                  Otimizado para Core Web Vitals
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">♿ Acessibilidade</h3>
                <p className="text-sm text-gray-600">
                  WCAG AA compliant
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">📱 Responsivo</h3>
                <p className="text-sm text-gray-600">
                  Mobile-first design
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">🎨 Design System</h3>
                <p className="text-sm text-gray-600">
                  Componentes reutilizáveis
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}
