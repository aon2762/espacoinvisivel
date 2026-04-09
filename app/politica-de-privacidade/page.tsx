import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Espaço Invisível.",
  alternates: { canonical: `${siteConfig.url}/politica-de-privacidade` },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Política de Privacidade
      </h1>
      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p className="text-sm text-gray-500">
          Última atualização: março de 2024
        </p>
        <p>
          Esta Política de Privacidade descreve como o{" "}
          <strong>Espaço Invisível</strong> coleta, usa e protege suas
          informações pessoais.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Informações que Coletamos
        </h2>
        <p>
          Não coletamos informações pessoais identificáveis ao usar nossas
          ferramentas. Podemos coletar:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Dados de uso anônimos (páginas visitadas, tempo de sessão)</li>
          <li>Informações técnicas (tipo de navegador, sistema operacional)</li>
          <li>Endereços IP para fins de segurança</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Uso de Cookies
        </h2>
        <p>
          Utilizamos cookies técnicos essenciais para o funcionamento do site.
          Não utilizamos cookies de rastreamento de terceiros sem o seu
          consentimento.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Segurança dos Dados
        </h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger suas
          informações contra acesso não autorizado, alteração, divulgação ou
          destruição.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Seus Direitos
        </h2>
        <p>
          Você tem o direito de acessar, corrigir ou excluir quaisquer dados
          pessoais que possamos ter sobre você. Entre em{" "}
          <a href="/contacto" className="text-blue-600 hover:underline">
            contacto
          </a>{" "}
          para exercer esses direitos.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Contato
        </h2>
        <p>
          Para dúvidas sobre esta política, contacte-nos em:{" "}
          <a
            href="mailto:contacto@espacoinvisivel.com"
            className="text-blue-600 hover:underline"
          >
            contacto@espacoinvisivel.com
          </a>
        </p>
      </div>
    </div>
  );
}
