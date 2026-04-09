import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3">
              Espaço Invisível
            </h3>
            <p className="text-sm text-gray-400 max-w-sm">
              Copie e cole espaços invisíveis gratuitamente. Use caracteres
              invisíveis Unicode no WhatsApp, Discord, Instagram e muito mais.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Ferramentas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Espaço Invisível
                </Link>
              </li>
              <li>
                <Link
                  href="/letras-diferentes"
                  className="hover:text-white transition-colors"
                >
                  Letras Diferentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre-nos"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/isencao-de-responsabilidade"
                  className="hover:text-white transition-colors"
                >
                  Isenção de Responsabilidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Espaço Invisível. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
