import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Não Encontrada",
  description: "A página que você procurou não existe.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-blue-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Página Não Encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Ir para o Início
          </Link>
          <Link
            href="/blog"
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Ver o Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
