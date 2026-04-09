import type { Metadata } from "next";
import NickGrid from "@/components/NickGrid";
import { blogPosts, categories } from "@/lib/blog-data";
import { siteConfig } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos e dicas sobre espaços invisíveis, caracteres Unicode, Discord, WhatsApp e muito mais.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-600 mt-2">
          Dicas, tutoriais e informações sobre espaços invisíveis e caracteres
          Unicode.
        </p>
      </header>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm font-medium text-gray-700 mr-2 self-center">
          Categorias:
        </span>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="text-sm bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-700 px-3 py-1 rounded-full transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <NickGrid posts={blogPosts} />
    </div>
  );
}
