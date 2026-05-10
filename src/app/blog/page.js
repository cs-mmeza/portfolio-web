import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Blog — Mauricio Meza",
  description:
    "Technical writing on mechanical engineering, robotics, and the career arc from mechanical designer to robotics engineer.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <div className="bg-gradient-to-r from-navy to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">Writing</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-300 max-w-xl text-base leading-relaxed">
            Technical writing on mechanical engineering, robotics, and the career arc from mechanical
            designer to robotics engineer. One substantive post per month — not a diary.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg border border-gray-200 p-6 hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-teal-50 text-teal-700 font-medium border border-teal-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold text-navy text-lg leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{post.description}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.readingTime}
                  </p>
                </div>
                <HiArrowRight
                  className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
