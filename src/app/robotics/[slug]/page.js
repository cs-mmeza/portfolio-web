import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { roboticsProjects } from "@/data/robotics-projects";

export async function generateStaticParams() {
  return roboticsProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = roboticsProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mauricio Meza`,
    description: project.summary,
  };
}

export default function RoboticsProjectPage({ params }) {
  const idx = roboticsProjects.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();

  const project = roboticsProjects[idx];
  const prev = roboticsProjects[idx - 1] || null;
  const next = roboticsProjects[idx + 1] || null;

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Back nav */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/robotics"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-teal-400 transition-colors font-medium"
          >
            <HiArrowLeft size={14} /> All Robotics Projects
          </Link>
        </div>
      </div>

      {/* Project header */}
      <div className="border-b border-slate-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-900/50 text-teal-300 border border-teal-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              ["Role", project.role],
              ["Year", project.year],
              ["Domain", project.domain],
              ["Tools", project.tools.slice(0, 3).join(", ")],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-sm font-medium transition-colors border border-slate-600"
            >
              <AiFillGithub size={16} /> View on GitHub
            </a>
          )}
        </div>
      </div>

      {/* Cover placeholder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-slate-700">
          <div className="text-center">
            <div className="text-5xl opacity-20 mb-2">🤖</div>
            <p className="text-xs text-gray-500">{project.domain}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-lg text-gray-300 leading-relaxed mb-10 border-l-4 border-teal-500 pl-4">
          {project.summary}
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">My Approach</h2>
            <p className="text-gray-300 leading-relaxed">{project.approach}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">The Result</h2>
            <p className="text-gray-300 leading-relaxed">{project.result}</p>
          </section>
          <section className="bg-teal-900/30 rounded-lg border border-teal-800 p-6">
            <h2 className="text-xl font-bold text-teal-200 mb-3">What I Learned</h2>
            <p className="text-teal-100/80 leading-relaxed">{project.lessons}</p>
          </section>
        </div>

        {/* Tools */}
        <div className="mt-10 pt-8 border-t border-slate-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools & Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-md text-sm font-medium bg-slate-700 text-gray-300 border border-slate-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between gap-4">
          {prev ? (
            <Link
              href={`/robotics/${prev.slug}`}
              className="group flex items-start gap-3 text-left max-w-xs"
            >
              <HiArrowLeft className="mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-teal-500 transition-colors" size={18} />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-teal-300 leading-tight transition-colors">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/robotics/${next.slug}`}
              className="group flex items-start gap-3 text-right ml-auto max-w-xs"
            >
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Next</p>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-teal-300 leading-tight transition-colors">{next.title}</p>
              </div>
              <HiArrowRight className="mt-0.5 flex-shrink-0 text-gray-500 group-hover:text-teal-500 transition-colors" size={18} />
            </Link>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/robotics" className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors">
            ← Back to all robotics projects
          </Link>
        </div>
      </div>
    </div>
  );
}
