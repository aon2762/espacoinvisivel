import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Isenção de Responsabilidade",
  description: "Isenção de responsabilidade do Espaço Invisível.",
  alternates: {
    canonical: `${siteConfig.url}/isencao-de-responsabilidade`,
  },
};

export default function IsencaoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Isenção de Responsabilidade
      </h1>
      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p className="text-sm text-gray-500">
          Última atualização: março de 2024
        </p>
        <p>
          As informações fornecidas no site <strong>Espaço Invisível</strong>{" "}
          são apenas para fins informativos e educacionais gerais.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Precisão das Informações
        </h2>
        <p>
          Embora nos esforcemos para manter as informações atualizadas e
          corretas, não fazemos garantias de nenhum tipo sobre a integridade,
          precisão, confiabilidade ou adequação das informações fornecidas.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Responsabilidade por Terceiros
        </h2>
        <p>
          Não somos responsáveis por qualquer perda ou dano decorrente do uso de
          caracteres invisíveis em plataformas de terceiros, incluindo mas não
          limitado a:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Suspensão ou banimento de contas em plataformas de jogos</li>
          <li>Violação dos termos de serviço de outras plataformas</li>
          <li>Problemas técnicos causados pelo uso de caracteres especiais</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Links Externos
        </h2>
        <p>
          Nosso site pode conter links para sites externos. Não somos
          responsáveis pelo conteúdo ou práticas de privacidade desses sites.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Contato
        </h2>
        <p>
          Para dúvidas sobre esta isenção de responsabilidade, entre em{" "}
          <a href="/contacto" className="text-blue-600 hover:underline">
            contacto conosco
          </a>
          .
        </p>
      </div>
    </div>
  );
}
