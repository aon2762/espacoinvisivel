import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Espaço Invisível"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Espaço Invisível
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 px-2 py-1 rounded transition-colors"
            >
              Início
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 px-2 py-1 rounded transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/letras-diferentes"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 px-2 py-1 rounded transition-colors hidden sm:block"
            >
              Letras Diferentes
            </Link>
            <Link
              href="/sobre-nos"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 px-2 py-1 rounded transition-colors hidden md:block"
            >
              Sobre
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
