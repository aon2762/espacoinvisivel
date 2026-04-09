import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Criar Biografias do Instagram com Espaços Invisíveis",
  description:
    "Como usar espaços invisíveis para criar biografias únicas e estilizadas no Instagram.",
  keywords: [
    "biografia instagram espaço invisível",
    "instagram caractere invisível",
    "bio instagram",
    "espaço invisível instagram",
  ],
  alternates: {
    canonical: `${siteConfig.url}/biografias-do-instagram-espacos-invisiveis`,
  },
  openGraph: {
    title: "Criar Biografias do Instagram com Espaços Invisíveis",
    description:
      "Como usar espaços invisíveis para criar biografias únicas e estilizadas no Instagram.",
    images: [
      {
        url: "/criar-biografias-do-Instagram-com-o-Espacos-Invisiveis.webp",
      },
    ],
  },
};

export default function InstagramPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>›</span>
          <Link
            href="/category/dicas-e-truques"
            className="hover:text-blue-600"
          >
            Dicas e Truques
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Criar Biografias do Instagram com Espaços Invisíveis
        </h1>
        <p className="mt-3 text-gray-600">
          Como usar espaços invisíveis para criar biografias únicas e
          estilizadas no Instagram.
        </p>
        <p className="mt-2 text-sm text-gray-400">5 de março de 2024 · 4 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/criar-biografias-do-Instagram-com-o-Espacos-Invisiveis.webp"
          alt="Criar biografias do Instagram com espaços invisíveis"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          A biografia do Instagram é um dos primeiros elementos que visitantes
          veem no seu perfil. Usar <strong>espaços invisíveis</strong> permite
          criar uma bio mais organizada e estilizada.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Por que usar Espaços Invisíveis na Bio do Instagram?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Criar linhas em branco entre os elementos da bio</li>
          <li>Adicionar espaçamento especial antes de texto</li>
          <li>Criar separadores visuais únicos</li>
          <li>Alinhar elementos de forma diferente</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Passo a Passo
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Acesse{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              nosso site
            </Link>{" "}
            e copie o espaço invisível.
          </li>
          <li>Abra o Instagram no celular.</li>
          <li>Acesse seu perfil e toque em &quot;Editar perfil&quot;.</li>
          <li>Cole o espaço invisível na seção de biografia.</li>
          <li>Adicione seu texto e salve.</li>
        </ol>

        <div className="rounded-xl overflow-hidden my-6 relative aspect-video">
          <Image
            src="/criar-biografias-do-Instagram-com-o-Espacos-Invisiveis-1.webp"
            alt="Instagram biografia com espaços invisíveis"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-blue-900">💡 Dica Profissional:</p>
          <p className="text-blue-800 text-sm mt-1">
            Use o <strong>Espaço sem Quebra (U+00A0)</strong> para a melhor
            compatibilidade com o Instagram. Ele funciona tanto no aplicativo
            móvel quanto na versão web.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Artigos relacionados:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/espacos-invisiveis-em-nomes-de-usuario"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços em Nomes de Usuário →
          </Link>
          <Link
            href="/diferentes-tipos-de-caracteres-invisiveis"
            className="text-sm text-blue-600 hover:underline"
          >
            Tipos de Caracteres Invisíveis →
          </Link>
        </div>
      </div>
    </article>
  );
}
