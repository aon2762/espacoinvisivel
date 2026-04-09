export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  image?: string;
  imageAlt?: string;
  keywords: string[];
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "espacos-invisiveis-para-whatsapp",
    title: "Espaços Invisíveis para WhatsApp",
    description:
      "Aprenda a usar espaços invisíveis no WhatsApp para enviar mensagens em branco, criar nomes únicos e muito mais.",
    category: "Dicas e Truques",
    categorySlug: "dicas-e-truques",
    date: "2024-03-10",
    image: "/Espaco-Invisivel-Enviar-mensagem-Whatsapp.webp",
    imageAlt: "Espaço Invisível - Enviar mensagem no WhatsApp",
    keywords: [
      "espaço invisível whatsapp",
      "mensagem em branco whatsapp",
      "caractere invisível",
    ],
    readingTime: "5 min",
  },
  {
    slug: "criar-nome-de-usuario-do-discord",
    title: "Como Criar Nome de Usuário do Discord com Espaços Invisíveis",
    description:
      "Guia completo para usar espaços invisíveis nos canais e nomes de usuário do Discord.",
    category: "Dicas e Truques",
    categorySlug: "dicas-e-truques",
    date: "2024-03-08",
    image: "/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord.webp",
    imageAlt: "Como usar espaços invisíveis no Discord",
    keywords: [
      "discord espaço invisível",
      "nome usuário discord",
      "caractere invisível discord",
    ],
    readingTime: "6 min",
  },
  {
    slug: "biografias-do-instagram-espacos-invisiveis",
    title: "Criar Biografias do Instagram com Espaços Invisíveis",
    description:
      "Como usar espaços invisíveis para criar biografias únicas e estilizadas no Instagram.",
    category: "Dicas e Truques",
    categorySlug: "dicas-e-truques",
    date: "2024-03-05",
    image: "/criar-biografias-do-Instagram-com-o-Espacos-Invisiveis.webp",
    imageAlt: "Criar biografias do Instagram com espaços invisíveis",
    keywords: [
      "biografia instagram espaço invisível",
      "instagram caractere invisível",
      "bio instagram",
    ],
    readingTime: "4 min",
  },
  {
    slug: "diferentes-tipos-de-caracteres-invisiveis",
    title: "Diferentes Tipos de Caracteres Invisíveis",
    description:
      "Conheça todos os tipos de caracteres invisíveis Unicode e quando usar cada um deles.",
    category: "Discussões",
    categorySlug: "discussoes",
    date: "2024-03-01",
    image: "/Diferentes-tipos-de-caracteres-invisiveis.webp",
    imageAlt: "Diferentes tipos de caracteres invisíveis",
    keywords: [
      "caracteres invisíveis",
      "unicode invisível",
      "tipos de espaços",
    ],
    readingTime: "7 min",
  },
  {
    slug: "espacos-invisiveis-em-nomes-de-usuario",
    title: "Espaços Invisíveis em Nomes de Usuário",
    description:
      "Saiba como usar espaços invisíveis para criar nomes de usuário únicos em jogos e redes sociais.",
    category: "Dicas e Truques",
    categorySlug: "dicas-e-truques",
    date: "2024-02-25",
    image: "/espacos-invisiveis-em-nomes-de-usuario.webp",
    imageAlt: "Espaços invisíveis em nomes de usuário",
    keywords: [
      "espaço invisível nome usuário",
      "nome invisível freefire",
      "nick invisível",
    ],
    readingTime: "5 min",
  },
  {
    slug: "espacos-invisiveis-desaparecem",
    title: "Por Que os Espaços Invisíveis Desaparecem?",
    description:
      "Entenda por que os espaços invisíveis às vezes não funcionam e como garantir que funcionem corretamente.",
    category: "Discussões",
    categorySlug: "discussoes",
    date: "2024-02-20",
    image: "/Espaco-Invisivel.webp",
    imageAlt: "Espaço Invisível",
    keywords: [
      "espaço invisível não funciona",
      "caractere invisível desaparece",
      "problema espaço invisível",
    ],
    readingTime: "4 min",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.categorySlug === categorySlug);
}

export const categories = [
  { name: "Dicas e Truques", slug: "dicas-e-truques" },
  { name: "Discussões", slug: "discussoes" },
];
