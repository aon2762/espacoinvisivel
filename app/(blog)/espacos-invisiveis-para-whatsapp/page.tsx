import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Espaços Invisíveis para WhatsApp",
  description:
    "Aprenda a usar espaços invisíveis no WhatsApp para enviar mensagens em branco, criar nomes únicos e muito mais.",
  keywords: [
    "espaço invisível whatsapp",
    "mensagem em branco whatsapp",
    "caractere invisível whatsapp",
    "espaço vazio whatsapp",
  ],
  alternates: {
    canonical: `${siteConfig.url}/espacos-invisiveis-para-whatsapp`,
  },
  openGraph: {
    title: "Espaços Invisíveis para WhatsApp",
    description:
      "Aprenda a usar espaços invisíveis no WhatsApp para enviar mensagens em branco e muito mais.",
    images: [{ url: "/Espaco-Invisivel-Enviar-mensagem-Whatsapp.webp" }],
  },
};

export default function EspacosWhatsAppPage() {
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
          Espaços Invisíveis para WhatsApp
        </h1>
        <p className="mt-3 text-gray-600">
          Aprenda a usar espaços invisíveis no WhatsApp para enviar mensagens em
          branco, criar nomes únicos e muito mais.
        </p>
        <p className="mt-2 text-sm text-gray-400">10 de março de 2024 · 5 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/Espaco-Invisivel-Enviar-mensagem-Whatsapp.webp"
          alt="Espaço Invisível - Enviar mensagem no WhatsApp"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          O <strong>espaço invisível</strong> é um caractere Unicode que pode
          ser usado no WhatsApp para enviar mensagens aparentemente em branco,
          criar nomes de grupo únicos e muito mais.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Como Enviar Mensagem em Branco no WhatsApp
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Acesse{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              nosso site
            </Link>{" "}
            e copie um espaço invisível.
          </li>
          <li>Abra o WhatsApp no seu celular.</li>
          <li>Cole o espaço invisível na caixa de mensagem.</li>
          <li>Pressione enviar.</li>
        </ol>

        <div className="rounded-xl overflow-hidden my-6 relative aspect-video">
          <Image
            src="/Espaco-Invisivel-Copiar-espaco-vazio.webp"
            alt="Copiar espaço invisível"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Outros Usos no WhatsApp
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Criar nomes de grupos com espaços invisíveis</li>
          <li>Usar como nome de contato</li>
          <li>Criar mensagens de status em branco</li>
          <li>Adicionar espaçamento especial em mensagens</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Qual Espaço Invisível Funciona no WhatsApp?
        </h2>
        <p>
          O caractere mais compatível com o WhatsApp é o{" "}
          <strong>Espaço de Largura Zero (U+200B)</strong>. Este caractere
          funciona na maioria das versões do WhatsApp sem ser filtrado.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-blue-900">💡 Dica:</p>
          <p className="text-blue-800 text-sm mt-1">
            Se o espaço invisível não funcionar, tente usar o{" "}
            <strong>Espaço sem Quebra (U+00A0)</strong> ou o{" "}
            <strong>Separador de Palavras (U+2060)</strong>.
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
            Espaços Invisíveis em Nomes de Usuário →
          </Link>
          <Link
            href="/criar-nome-de-usuario-do-discord"
            className="text-sm text-blue-600 hover:underline"
          >
            Espaços Invisíveis no Discord →
          </Link>
        </div>
      </div>
    </article>
  );
}
