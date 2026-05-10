import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { mechanicalProjects } from "@/data/mechanical-projects";

export async function generateStaticParams() {
  return mechanicalProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = mechanicalProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mauricio Meza`,
    description: project.summary,
  };
}

export default function WorkProjectPage({ params }) {
  const idx = mechanicalProjects.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();

  const project = mechanicalProjects[idx];
  const prev = mechanicalProjects[idx - 1] || null;
  const next = mechanicalProjects[idx + 1] || null;

  return (
    <div>
      {/* Back nav */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors font-medium"
          >
            <HiArrowLeft size={14} /> All Engineering Projects
          </Link>
        </div>
      </div>

      {/* Project header */}
      <div className="bg-gradient-to-r from-navy to-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ["Role", project.role],
              ["Year", project.year],
              ["Industry", project.industry],
              ["Tools", project.tools.slice(0, 3).join(", ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cover image placeholder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-b-lg flex items-center justify-center border border-t-0 border-gray-200">
          <div className="text-center">
            <div className="text-5xl opacity-20 mb-2">⚙</div>
            <p className="text-xs text-gray-400">{project.industry}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-teal-500 pl-4">
          {project.summary}
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">The Problem</h2>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">My Approach</h2>
            <p className="text-gray-700 leading-relaxed">{project.approach}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">The Result</h2>
            <p className="text-gray-700 leading-relaxed">{project.result}</p>
          </section>

          <section className="bg-amber-50 rounded-lg border border-amber-200 p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">What I'd Do Differently</h2>
            <p className="text-amber-800 leading-relaxed">{project.lessons}</p>
          </section>
        </div>

        {/* Tools used */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tools & Methods</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-start gap-3 text-left max-w-xs hover:text-teal-700 transition-colors"
            >
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
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-start gap-3 text-right ml-auto max-w-xs hover:text-teal-700 transition-colors"
            >
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Next</p>
                <p className="text-sm font-semibold text-navy group-hover:text-teal-700 leading-tight">{next.title}</p>
              </div>
              <HiArrowRight className="mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-teal-500" size={18} />
            </Link>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/work"
            className="text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
          >
            ← Back to all engineering projects
          </Link>
        </div>
      </div>
    </div>
  );
}
