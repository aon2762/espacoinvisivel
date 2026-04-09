import type { Metadata } from "next";
import NickGrid from "@/components/NickGrid";
import { getBlogPostsByCategory } from "@/lib/blog-data";
import { siteConfig } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dicas e Truques",
  description:
    "Artigos com dicas e truques sobre como usar espaços invisíveis no WhatsApp, Discord, Instagram e muito mais.",
  alternates: {
    canonical: `${siteConfig.url}/category/dicas-e-truques`,
  },
};

export default function DicasTruquesPage() {
  const posts = getBlogPostsByCategory("dicas-e-truques");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>›</span>
          <span>Dicas e Truques</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Dicas e Truques</h1>
        <p className="text-gray-600 mt-2">
          {posts.length} artigo{posts.length !== 1 ? "s" : ""} sobre dicas e
          truques com espaços invisíveis.
        </p>
      </header>

      <NickGrid posts={posts} />
    </div>
  );
}
