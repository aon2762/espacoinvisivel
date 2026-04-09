import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Espaços Invisíveis em Nomes de Usuário",
  description:
    "Saiba como usar espaços invisíveis para criar nomes de usuário únicos em jogos e redes sociais.",
  keywords: [
    "espaço invisível nome usuário",
    "nome invisível freefire",
    "nick invisível",
    "nome vazio jogo",
    "free fire espaço invisível",
  ],
  alternates: {
    canonical: `${siteConfig.url}/espacos-invisiveis-em-nomes-de-usuario`,
  },
  openGraph: {
    title: "Espaços Invisíveis em Nomes de Usuário",
    description:
      "Saiba como usar espaços invisíveis para criar nomes de usuário únicos em jogos e redes sociais.",
    images: [{ url: "/espacos-invisiveis-em-nomes-de-usuario.webp" }],
  },
};

export default function NomesUsuarioPage() {
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
          Espaços Invisíveis em Nomes de Usuário
        </h1>
        <p className="mt-3 text-gray-600">
          Saiba como usar espaços invisíveis para criar nomes de usuário únicos
          em jogos e redes sociais.
        </p>
        <p className="mt-2 text-sm text-gray-400">25 de fevereiro de 2024 · 5 min de leitura</p>
      </header>

      <div className="rounded-2xl overflow-hidden mb-8 relative aspect-video">
        <Image
          src="/espacos-invisiveis-em-nomes-de-usuario.webp"
          alt="Espaços invisíveis em nomes de usuário"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          Um <strong>nome de usuário com espaço invisível</strong> pode fazer
          você se destacar em jogos e redes sociais. O nick aparece sem
          caracteres visíveis, criando um efeito único.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Jogos que Suportam Espaços Invisíveis
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Free Fire</strong> - Nick com espaço invisível
          </li>
          <li>
            <strong>PUBG Mobile</strong> - Nome de jogador invisível
          </li>
          <li>
            <strong>Minecraft</strong> - Username especial
          </li>
          <li>
            <strong>Roblox</strong> - Display name invisível
          </li>
        </ul>

        <div className="rounded-xl overflow-hidden my-6 relative aspect-video">
          <Image
            src="/Espaco-Invisivel-Adicionar-apelido-no-Freefire.webp"
            alt="Adicionar apelido invisível no Free Fire"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Como Criar um Nick Invisível no Free Fire
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Copie o espaço invisível do{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              nosso site
            </Link>
            .
          </li>
          <li>Abra o Free Fire e acesse seu perfil.</li>
          <li>Toque no seu nome para editar.</li>
          <li>Apague o nome atual e cole o espaço invisível.</li>
          <li>Confirme a troca de nome (pode ser necessário usar diamantes).</li>
        </ol>

        <div className="rounded-xl overflow-hidden my-6 relative aspect-video">
          <Image
            src="/espacos-invisiveis-em-nomes-de-usuario-1.webp"
            alt="Nick invisível em nome de usuário"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-6">
          <p className="font-semibold text-orange-900">⚠️ Importante:</p>
          <p className="text-orange-800 text-sm mt-1">
            Algumas plataformas podem bloquear nomes completamente invisíveis.
            Tente combinar um espaço invisível com alguns caracteres para evitar
            problemas.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Artigos relacionados:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/criar-nome-de-usuario-do-discord"
            className="text-sm text-blue-600 hover:underline"
          >
            Nomes no Discord →
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
