import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Entre em contacto connosco para dúvidas, sugestões ou problemas.",
  alternates: { canonical: `${siteConfig.url}/contacto` },
};

export default function ContactoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contacto</h1>
      <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
        <p>
          Tem perguntas, sugestões ou encontrou algum problema? Adoraríamos
          ouvir de você!
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Como nos Contactar
        </h2>
        <p>
          Por favor, envie um e-mail para:{" "}
          <a
            href="mailto:contacto@espacoinvisivel.com"
            className="text-blue-600 hover:underline"
          >
            contacto@espacoinvisivel.com
          </a>
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          O que Podemos Ajudar?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Problemas técnicos com as ferramentas</li>
          <li>Sugestões de novas funcionalidades</li>
          <li>Relatórios de erros no site</li>
          <li>Parcerias e colaborações</li>
          <li>Questões sobre privacidade e dados</li>
        </ul>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="text-blue-800 text-sm">
            Respondemos a todos os e-mails no prazo de 2 a 3 dias úteis.
          </p>
        </div>
      </div>
    </div>
  );
}
