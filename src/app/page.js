import Link from "next/link";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiArrowRight, HiChip, HiCog, HiAcademicCap } from "react-icons/hi";
import ProjectCard from "@/components/ProjectCard";
import { mechanicalProjects } from "@/data/mechanical-projects";
import { roboticsProjects } from "@/data/robotics-projects";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Mauricio Meza — Mechanical Designer & Mechatronics Engineer",
  description:
    "Portfolio of Mauricio Meza: 7+ years mechanical design and manufacturing engineering, EE / mechatronics roots, pursuing MS Robotics at ASU. Phoenix, AZ.",
};

export default function HomePage() {
  const featuredMech = mechanicalProjects.slice(0, 3);
  const featuredRobotics = roboticsProjects.slice(0, 2);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-navy to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Relocating to Tempe, AZ
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Open to opportunities
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Mauricio Meza
              </h1>
              <p className="text-xl text-teal-300 font-medium mb-2">
                Mechanical Designer & Mechatronics Engineer
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                7+ years of mechanical design and manufacturing engineering — HVAC systems,
                precision fixturing, structural analysis, and parametric CAD. B.S. Electrical
                Engineering (Mechatronics). MS Robotics & Autonomous Systems candidate at ASU,
                Spring 2027.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white btn-gradient text-sm"
                >
                  View Engineering Work <HiArrowRight />
                </Link>
                <Link
                  href="/robotics"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold border border-teal-500 text-teal-300 hover:bg-teal-500/10 transition-colors text-sm"
                >
                  View Robotics Projects <HiArrowRight />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mauricio-meza/?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/cs-mmeza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-teal-500/40 shadow-xl shadow-teal-900/30">
                <Image
                  src="/mau-meza.jpg"
                  alt="Mauricio Meza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <HiCog className="text-teal-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-gray-400">Certification</p>
                    <p className="text-sm font-medium text-white">CSWP — SolidWorks Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <HiAcademicCap className="text-teal-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-gray-400">Education</p>
                    <p className="text-sm font-medium text-white">B.S. EE (Mechatronics) · ITESCA 2013</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <HiChip className="text-teal-400 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-gray-400">Upcoming</p>
                    <p className="text-sm font-medium text-white">MS Robotics · ASU Spring 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audience Routing Cards ───────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/work"
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <HiCog className="text-navy" size={20} />
                </div>
                <h2 className="font-bold text-navy text-lg">For Recruiters & Employers</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                7+ years of mechanical design work: HVAC vibration isolation, precision fixturing, structural weldments, parametric CAD, FEA, and GD&T-driven drawings. CSWP certified.
              </p>
              <span className="inline-flex items-center gap-1.5 text-teal-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
                View Engineering Work <HiArrowRight size={14} />
              </span>
            </Link>
            <Link
              href="/robotics"
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <HiChip className="text-teal-600" size={20} />
                </div>
                <h2 className="font-bold text-navy text-lg">For Researchers & Faculty</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Robotics projects spanning autonomous navigation (ROS2/SLAM), manipulator kinematics, 3D perception, and vision-based drone control. Building toward ASU MS RAS, EE concentration.
              </p>
              <span className="inline-flex items-center gap-1.5 text-teal-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
                View Robotics Projects <HiArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Mechanical Projects ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-teal-600 font-medium uppercase tracking-wider mb-1">Engineering Work</p>
            <h2 className="text-2xl font-bold text-navy">Featured Mechanical Projects</h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            View all 7 projects <HiArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMech.map((project) => (
            <ProjectCard key={project.slug} project={project} basePath="/work" />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700"
          >
            View all 7 projects <HiArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Featured Robotics Projects ────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-teal-400 font-medium uppercase tracking-wider mb-1">Robotics</p>
              <h2 className="text-2xl font-bold">Featured Robotics Projects</h2>
            </div>
            <Link
              href="/robotics"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
            >
              View all 4 projects <HiArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredRobotics.map((project) => (
              <div key={project.slug} className="bg-slate-800 rounded-lg border border-slate-700 p-6 hover:border-teal-500 transition-colors group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Link href={`/robotics/${project.slug}`} className="font-semibold text-white group-hover:text-teal-300 transition-colors text-lg">
                    {project.title}
                  </Link>
                </div>
                <p className="text-xs text-gray-400 mb-3">{project.year} · {project.domain}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">{project.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(project.tags || []).slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-teal-900/50 text-teal-300 font-medium border border-teal-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href={`/robotics/${project.slug}`} className="text-sm font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1">
                    Read more <HiArrowRight size={13} />
                  </Link>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                      <AiFillGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link href="/robotics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400">
              View all 4 projects <HiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Currently ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm text-teal-600 font-medium uppercase tracking-wider mb-1">Now</p>
            <h2 className="text-2xl font-bold text-navy mb-6">Currently</h2>
            <ul className="space-y-3">
              {[
                "Working as a Mechanical Designer in Phoenix, AZ",
                "Building ROS2 skills through personal robotics projects",
                "Filling control theory gaps (modern control, state-space methods)",
                "Preparing ASU MS Robotics application for Spring 2027",
                "Available for mechanical design contract work",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-teal-600 font-medium uppercase tracking-wider mb-1">Writing</p>
            <h2 className="text-2xl font-bold text-navy mb-6">Latest Posts</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal-400 hover:bg-teal-50/30 transition-all"
                >
                  <p className="text-xs text-gray-400 mb-1">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · {post.readingTime}
                  </p>
                  <h3 className="font-semibold text-navy text-sm leading-snug group-hover:text-teal-700 transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-teal-700">
              All posts <HiArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
