import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Saiba mais sobre o Espaço Invisível, a melhor ferramenta para copiar e colar caracteres invisíveis Unicode.",
  alternates: { canonical: `${siteConfig.url}/sobre-nos` },
};

export default function SobreNosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nós</h1>
      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          Bem-vindo ao <strong>Espaço Invisível</strong>! Somos uma plataforma
          dedicada a fornecer ferramentas gratuitas de caracteres Unicode
          especiais para uso em redes sociais, jogos e aplicativos de mensagens.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Nossa Missão
        </h2>
        <p>
          Nossa missão é tornar simples e acessível o uso de caracteres
          invisíveis e especiais Unicode para todos os usuários, independente do
          nível técnico.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Nossas Ferramentas
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Espaço Invisível</strong> — Copie e cole caracteres
            invisíveis Unicode
          </li>
          <li>
            <strong>Letras Diferentes</strong> — Gerador de estilos de texto
            Unicode
          </li>
          <li>
            <strong>Blog</strong> — Tutoriais e dicas sobre caracteres especiais
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Contacto
        </h2>
        <p>
          Tem dúvidas, sugestões ou encontrou algum problema? Entre em{" "}
          <a href="/contacto" className="text-blue-600 hover:underline">
            contacto conosco
          </a>
          .
        </p>
      </div>
    </div>
  );
}
