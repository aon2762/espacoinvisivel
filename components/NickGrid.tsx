import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface NickGridProps {
  posts: BlogPost[];
}

export default function NickGrid({ posts }: NickGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          {post.image && (
            <Link href={`/${post.slug}`} className="block aspect-video relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
          )}
          <div className="p-4">
            <Link
              href={`/category/${post.categorySlug}`}
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              {post.category}
            </Link>
            <h3 className="mt-1 text-base font-semibold text-gray-900 hover:text-blue-600 line-clamp-2">
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {post.description}
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{post.readingTime} de leitura</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
