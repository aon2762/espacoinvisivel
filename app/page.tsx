import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InvisibleTool from "@/components/InvisibleTool";
import NickGrid from "@/components/NickGrid";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Copie Espaços Invisíveis Grátis`,
  description:
    "Copie e cole espaços invisíveis gratuitamente! Use caracteres invisíveis Unicode no WhatsApp, Discord, Instagram, Free Fire e muito mais.",
  keywords: [
    "espaço invisível",
    "caractere invisível",
    "espaço vazio",
    "copiar espaço invisível",
    "espaço whatsapp",
    "espaço discord",
    "nick invisível",
    "nome invisível",
  ],
  openGraph: {
    title: `${siteConfig.name} - Copie Espaços Invisíveis Grátis`,
    description:
      "Copie e cole espaços invisíveis gratuitamente! Use caracteres invisíveis Unicode no WhatsApp, Discord, Instagram e muito mais.",
    url: siteConfig.url,
    images: [{ url: "/Espaco-Invisivel.webp", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Espaço Invisível
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Copie e cole espaços invisíveis gratuitamente. Use em WhatsApp,
            Discord, Instagram, Free Fire e muito mais.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <InvisibleTool />

      {/* How to Use */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Como Usar o Espaço Invisível
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Selecione o Tipo",
                desc: "Escolha o tipo de espaço invisível que você precisa.",
              },
              {
                step: "2",
                title: "Clique em Copiar",
                desc: "Clique no botão para copiar o espaço invisível.",
              },
              {
                step: "3",
                title: "Cole onde Quiser",
                desc: "Cole no WhatsApp, Discord, Instagram ou onde precisar.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 text-center border border-gray-100"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative aspect-video">
            <Image
              src="/Espaco-Invisivel-Visite-nosso-site.webp"
              alt="Espaço Invisível - Visite nosso site"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      </section>

      {/* What is invisible space */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            O que é um Espaço Invisível?
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700">
            <p>
              Um <strong>espaço invisível</strong> é um caractere Unicode
              especial que ocupa espaço sem ser visível. Diferente do espaço
              comum (barra de espaço), esses caracteres passam por muitos
              filtros de texto e podem ser usados em locais onde espaços
              normais não são permitidos.
            </p>
            <p className="mt-4">
              São amplamente utilizados em jogos como{" "}
              <strong>Free Fire, PUBG</strong>, redes sociais como{" "}
              <strong>Instagram, Twitter</strong>, e aplicativos de mensagens
              como <strong>WhatsApp e Discord</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Artigos Recentes
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Ver todos →
            </Link>
          </div>
          <NickGrid posts={recentPosts} />
        </div>
      </section>
    </>
  );
}
