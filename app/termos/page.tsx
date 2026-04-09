import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Espaço Invisível.",
  alternates: { canonical: `${siteConfig.url}/termos` },
};

export default function TermosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Termos de Uso</h1>
      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p className="text-sm text-gray-500">
          Última atualização: março de 2024
        </p>
        <p>
          Ao utilizar o site <strong>Espaço Invisível</strong>, você concorda
          com estes Termos de Uso. Por favor, leia atentamente.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Uso Aceitável
        </h2>
        <p>Você pode usar nossas ferramentas para:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Uso pessoal em redes sociais e jogos</li>
          <li>Fins educacionais e de aprendizado</li>
          <li>Projetos não comerciais</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Uso Proibido
        </h2>
        <p>É proibido usar nossas ferramentas para:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Atividades ilegais ou fraudulentas</li>
          <li>Spam ou comunicações não solicitadas</li>
          <li>Enganar ou prejudicar outros usuários</li>
          <li>Violar os Termos de Serviço de outras plataformas</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Isenção de Responsabilidade
        </h2>
        <p>
          O Espaço Invisível fornece suas ferramentas &quot;no estado em que se
          encontram&quot;. Não nos responsabilizamos por qualquer problema resultante
          do uso dos caracteres invisíveis em plataformas de terceiros.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Modificações
        </h2>
        <p>
          Reservamos o direito de modificar estes termos a qualquer momento. As
          alterações entram em vigor imediatamente após a publicação.
        </p>
      </div>
    </div>
  );
}
