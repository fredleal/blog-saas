# Blog SaaS

Um blog moderno construído com Next.js 15, Tailwind CSS e nosso design system de componentes.

## 🚀 Características

- **Next.js 15**: Framework React moderno com App Router
- **Tailwind CSS**: Estilização responsiva e consistente
- **TypeScript**: Type safety em todo o projeto
- **Design System**: Componentes reutilizáveis do template-saas-ecommerce
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizado para Core Web Vitals

## 📋 Estrutura

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Layout raiz
│   ├── page.tsx        # Página inicial
│   ├── blog/
│   │   ├── page.tsx    # Listagem de posts
│   │   └── [slug]/
│   │       └── page.tsx # Página individual do post
│   └── styles/
│       └── globals.css # Estilos globais
├── components/         # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
└── lib/               # Funções utilitárias
```

## 🛠️ Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Testar
npm test
```

## 📚 Posts

O blog vem com 3 posts de exemplo:
- Bem-vindo ao Blog SaaS
- Lançamento do Design System
- Melhores Práticas com Next.js 15

### Adicionar Novos Posts

Atualmente, os posts são gerenciados em `src/app/blog/[slug]/page.tsx`. Para adicionar novos posts:

1. Adicione um novo objeto no dicionário `posts`
2. O slug será a chave do objeto

Futuro: Integração com MDX para arquivos de markdown.

## 🎨 Design System

Este blog usa componentes do design system do projeto `template-saas-ecommerce`:
- Header com navegação
- Footer com links
- PostCard para listagem de posts

## 📱 Responsivo

O blog é totalmente responsivo:
- Mobile: Navegação otimizada para tela pequena
- Tablet: Layout adaptado
- Desktop: Experiência completa

## 🚢 Deploy

Deploy sugerido no Vercel:

```bash
npm install -g vercel
vercel
```

## 📄 Licença

MIT License

## 👨‍💻 Autor

Fred Leal

---

Construído com ❤️ usando Next.js 15 e nosso design system
