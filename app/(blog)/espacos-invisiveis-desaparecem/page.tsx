import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Por Que os Espaços Invisíveis Desaparecem?",
  description:
    "Entenda por que os espaços invisíveis às vezes não funcionam e como garantir que funcionem corretamente.",
  keywords: [
    "espaço invisível não funciona",
    "caractere invisível desaparece",
    "problema espaço invisível",
    "espaço invisível sumiu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/espacos-invisiveis-desaparecem`,
  },
  openGraph: {
    title: "Por Que os Espaços Invisíveis Desaparecem?",
    description:
      "Entenda por que os espaços invisíveis às vezes não funcionam e como garantir que funcionem corretamente.",
    images: [{ url: "/Espaco-Invisivel.webp" }],
  },
};

export default function EspacosDesaparecem() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>›</span>
          <Link href="/category/discussoes" className="hover:text-blue-600">
            Discussões
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Por Que os Espaços Invisíveis Desaparecem?
        </h1>
        <p className="mt-3 text-gray-600">
          Entenda por que os espaços invisíveis às vezes não funcionam e como
          garantir que funcionem corretamente.
        </p>
        <p className="mt-2 text-sm text-gray-400">20 de fevereiro de 2024 · 4 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/Espaco-Invisivel.webp"
          alt="Espaço Invisível"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          Um dos problemas mais comuns ao usar espaços invisíveis é descobrir
          que eles &quot;desaparecem&quot; ou não funcionam em determinadas plataformas.
          Isso acontece por vários motivos.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Principais Razões
        </h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          1. Filtros de Texto da Plataforma
        </h3>
        <p>
          Muitas plataformas têm filtros que removem automaticamente caracteres
          Unicode especiais, incluindo espaços invisíveis. Isso é feito por
          questões de segurança e padronização.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          2. Tipo Errado de Espaço Invisível
        </h3>
        <p>
          Diferentes plataformas bloqueiam diferentes tipos de caracteres
          invisíveis. O que funciona no WhatsApp pode não funcionar no Discord.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          3. Atualizações da Plataforma
        </h3>
        <p>
          As plataformas frequentemente atualizam seus sistemas de filtragem.
          Um caractere que funcionava antes pode parar de funcionar após uma
          atualização.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Soluções
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Tente diferentes tipos de caracteres invisíveis (veja nossa lista
            completa)
          </li>
          <li>Combine o espaço invisível com outros caracteres especiais</li>
          <li>Verifique se a plataforma suporta Unicode completo</li>
          <li>Tente copiar e colar diretamente do nosso site</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-blue-900">💡 Dica:</p>
          <p className="text-blue-800 text-sm mt-1">
            Use o <strong>Copiar Espaço Invisível</strong> da nossa ferramenta
            principal. Ela garante que você está copiando o caractere correto
            para cada uso.
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Copiar Espaço Invisível →
          </Link>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Artigos relacionados:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/diferentes-tipos-de-caracteres-invisiveis"
            className="text-sm text-blue-600 hover:underline"
          >
            Tipos de Caracteres Invisíveis →
          </Link>
          <Link
            href="/espacos-invisiveis-para-whatsapp"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços no WhatsApp →
          </Link>
        </div>
      </div>
    </article>
  );
}
