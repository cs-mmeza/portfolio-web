import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { blogPosts } from "@/data/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Mauricio Meza`,
    description: post.description,
  };
}

function renderContent(content) {
  const lines = content.trim().split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-navy mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-navy mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      // skip blank lines (spacing handled by parent)
    } else {
      // Inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, pi) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={pi}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      );
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4">
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default function BlogPostPage({ params }) {
  const idx = blogPosts.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();

  const post = blogPosts[idx];
  const prev = blogPosts[idx - 1] || null;
  const next = blogPosts[idx + 1] || null;

  return (
    <div>
      {/* Back nav */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors font-medium"
          >
            <HiArrowLeft size={14} /> All Posts
          </Link>
        </div>
      </div>

      {/* Post header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed border-l-4 border-teal-500 pl-4">
          {post.description}
        </p>
      </div>

      <hr className="max-w-3xl mx-auto border-gray-200 px-4" />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* Prev / Next */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex items-start gap-3 max-w-xs">
              <HiArrowLeft className="mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-teal-500" size={18} />
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-navy group-hover:text-teal-700 leading-tight">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex items-start gap-3 text-right ml-auto max-w-xs">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Next</p>
                <p className="text-sm font-semibold text-navy group-hover:text-teal-700 leading-tight">{next.title}</p>
              </div>
              <HiArrowRight className="mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-teal-500" size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
