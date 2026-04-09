import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Diferentes Tipos de Caracteres Invisíveis",
  description:
    "Conheça todos os tipos de caracteres invisíveis Unicode e quando usar cada um deles.",
  keywords: [
    "caracteres invisíveis",
    "unicode invisível",
    "tipos de espaços",
    "espaço zero width",
    "espaço unicode",
  ],
  alternates: {
    canonical: `${siteConfig.url}/diferentes-tipos-de-caracteres-invisiveis`,
  },
  openGraph: {
    title: "Diferentes Tipos de Caracteres Invisíveis",
    description:
      "Conheça todos os tipos de caracteres invisíveis Unicode e quando usar cada um deles.",
    images: [{ url: "/Diferentes-tipos-de-caracteres-invisiveis.webp" }],
  },
};

const charTypes = [
  {
    name: "Espaço de Largura Zero",
    unicode: "U+200B",
    desc: "O mais popular. Funciona na maioria dos apps.",
  },
  {
    name: "Espaço sem Quebra",
    unicode: "U+00A0",
    desc: "Compatível com Instagram e WhatsApp.",
  },
  {
    name: "Separador de Palavras",
    unicode: "U+2060",
    desc: "Usado como divisor invisível de texto.",
  },
  {
    name: "Espaço de Largura de Figura",
    unicode: "U+2007",
    desc: "Largura igual a um número.",
  },
  {
    name: "Espaço de Largura Estreita",
    unicode: "U+202F",
    desc: "Espaço estreito sem quebra de linha.",
  },
  {
    name: "Espaço Matemático Fino",
    unicode: "U+2009",
    desc: "Espaço muito fino, usado em notação matemática.",
  },
];

export default function TiposCaracteresPage() {
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
          Diferentes Tipos de Caracteres Invisíveis
        </h1>
        <p className="mt-3 text-gray-600">
          Conheça todos os tipos de caracteres invisíveis Unicode e quando usar
          cada um deles.
        </p>
        <p className="mt-2 text-sm text-gray-400">1 de março de 2024 · 7 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/Diferentes-tipos-de-caracteres-invisiveis.webp"
          alt="Diferentes tipos de caracteres invisíveis"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          Existem vários tipos de <strong>caracteres invisíveis</strong> no
          padrão Unicode. Cada um tem características específicas que os tornam
          mais adequados para determinadas situações.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Tabela de Caracteres Invisíveis
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                  Nome
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                  Unicode
                </th>
                <th className="border border-gray-200 px-3 py-2 text-left font-semibold">
                  Uso
                </th>
              </tr>
            </thead>
            <tbody>
              {charTypes.map((c) => (
                <tr key={c.unicode} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2">{c.name}</td>
                  <td className="border border-gray-200 px-3 py-2 font-mono text-blue-700">
                    {c.unicode}
                  </td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-600">
                    {c.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl overflow-hidden my-6 relative aspect-video">
          <Image
            src="/Diferentes-tipos-de-caracteres-invisiveis-1.webp"
            alt="Exemplos de caracteres invisíveis"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Qual Usar?
        </h2>
        <p>
          Para uso geral em redes sociais e aplicativos, recomendamos o{" "}
          <strong>Espaço de Largura Zero (U+200B)</strong>. Para Instagram e
          WhatsApp, o <strong>Espaço sem Quebra (U+00A0)</strong> costuma ter
          melhor compatibilidade.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-green-900">✅ Recomendação:</p>
          <p className="text-green-800 text-sm mt-1">
            Teste diferentes tipos de caracteres invisíveis para ver qual
            funciona melhor na plataforma que você deseja usar. Nosso site
            oferece todos os tipos para você copiar facilmente.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Artigos relacionados:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/espacos-invisiveis-desaparecem"
            className="text-sm text-blue-600 hover:underline"
          >
            Por Que os Espaços Invisíveis Desaparecem? →
          </Link>
          <Link
            href="/espacos-invisiveis-para-whatsapp"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços Invisíveis no WhatsApp →
          </Link>
        </div>
      </div>
    </article>
  );
}
