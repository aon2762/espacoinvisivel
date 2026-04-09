import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Como Criar Nome de Usuário do Discord com Espaços Invisíveis",
  description:
    "Guia completo para usar espaços invisíveis nos canais e nomes de usuário do Discord.",
  keywords: [
    "discord espaço invisível",
    "nome usuário discord",
    "canal discord espaço",
    "caractere invisível discord",
  ],
  alternates: {
    canonical: `${siteConfig.url}/criar-nome-de-usuario-do-discord`,
  },
  openGraph: {
    title: "Como Criar Nome de Usuário do Discord com Espaços Invisíveis",
    description:
      "Guia completo para usar espaços invisíveis nos canais e nomes de usuário do Discord.",
    images: [
      {
        url: "/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord.webp",
      },
    ],
  },
};

export default function DiscordPage() {
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
          Como Criar Nome de Usuário do Discord com Espaços Invisíveis
        </h1>
        <p className="mt-3 text-gray-600">
          Guia completo para usar espaços invisíveis nos canais e nomes de
          usuário do Discord.
        </p>
        <p className="mt-2 text-sm text-gray-400">8 de março de 2024 · 6 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord.webp"
          alt="Como usar espaços invisíveis no Discord"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          O Discord é uma das plataformas mais populares entre gamers e
          comunidades online. Usar <strong>espaços invisíveis</strong> no
          Discord pode tornar seu perfil e canais mais únicos.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Usando Espaços Invisíveis no Nome de Usuário
        </h2>
        <p>
          Para adicionar um espaço invisível ao seu nome de usuário do Discord:
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li>Copie o espaço invisível do nosso site.</li>
          <li>Acesse as configurações do Discord.</li>
          <li>Clique em &quot;Minha Conta&quot;.</li>
          <li>Edite seu nome de usuário e cole o espaço invisível.</li>
          <li>Salve as alterações.</li>
        </ol>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-xl overflow-hidden relative aspect-video">
            <Image
              src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-1.webp"
              alt="Discord passo 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative aspect-video">
            <Image
              src="/Como-usar-espacos-invisiveis-em-nomes-de-usuario-e-canais-do-Discord-2.webp"
              alt="Discord passo 2"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Criando Canais com Espaços Invisíveis
        </h2>
        <p>
          Você também pode usar espaços invisíveis nos nomes dos canais do seu
          servidor Discord para criar separadores visuais únicos.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-yellow-900">⚠️ Aviso:</p>
          <p className="text-yellow-800 text-sm mt-1">
            O Discord ocasionalmente atualiza suas políticas. Verifique sempre
            os Termos de Serviço do Discord antes de usar caracteres especiais.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Artigos relacionados:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/espacos-invisiveis-para-whatsapp"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços Invisíveis no WhatsApp →
          </Link>
          <Link
            href="/espacos-invisiveis-em-nomes-de-usuario"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços em Nomes de Usuário →
          </Link>
        </div>
      </div>
    </article>
  );
}
