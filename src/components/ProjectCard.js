import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function ProjectCard({ project, basePath = "/work" }) {
  const href = `${basePath}/${project.slug}`;

  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-teal-400 hover:shadow-md transition-all duration-200"
    >
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
        {project.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center px-4">
            <div className="text-4xl mb-2 opacity-30">⚙</div>
            <p className="text-xs text-gray-400 font-medium">{project.industry || project.domain}</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-navy text-base leading-snug group-hover:text-teal-700 transition-colors">
            {project.title}
          </h3>
          <HiArrowRight className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" size={16} />
        </div>
        <p className="text-xs text-gray-500 mb-3">
          {project.year} · {project.industry || project.domain}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {(project.tags || []).slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-teal-50 text-teal-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
