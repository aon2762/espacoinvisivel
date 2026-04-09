import type { Metadata } from "next";
import NickGrid from "@/components/NickGrid";
import { getBlogPostsByCategory } from "@/lib/blog-data";
import { siteConfig } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discussões",
  description:
    "Discussões e análises sobre caracteres invisíveis, Unicode, e tudo sobre espaços invisíveis.",
  alternates: {
    canonical: `${siteConfig.url}/category/discussoes`,
  },
};

export default function DiscussoesPage() {
  const posts = getBlogPostsByCategory("discussoes");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <span>›</span>
          <span>Discussões</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Discussões</h1>
        <p className="text-gray-600 mt-2">
          {posts.length} artigo{posts.length !== 1 ? "s" : ""} sobre espaços
          invisíveis e caracteres Unicode.
        </p>
      </header>

      <NickGrid posts={posts} />
    </div>
  );
}
