import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import { roboticsProjects } from "@/data/robotics-projects";

export const metadata = {
  title: "Robotics Projects — Mauricio Meza",
  description:
    "Personal robotics projects: autonomous navigation, manipulator kinematics, 3D perception, and vision-based drone control. Building toward MS Robotics at ASU.",
};

export default function RoboticsPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">Personal Projects</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Robotics Projects</h1>
          <p className="text-gray-300 max-w-2xl text-base leading-relaxed">
            Hands-on projects bridging my mechanical engineering background with robotics and
            autonomous systems. Built to develop practical skills ahead of the ASU MS RAS program
            (EE concentration, Spring 2027).
          </p>
        </div>
      </div>

      {/* Tech bar */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["ROS2", "Python", "PyTorch", "SLAM", "Open3D", "YOLOv8", "PID Control", "Kinematics", "LiDAR"].map(
              (skill) => (
                <span key={skill} className="text-xs text-gray-400 font-medium">
                  · {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Project list */}
      <div className="bg-slate-900 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {roboticsProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-teal-500 transition-colors group"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl opacity-20 mb-2">🤖</div>
                    <p className="text-xs text-gray-500">{project.domain}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link
                      href={`/robotics/${project.slug}`}
                      className="font-semibold text-white group-hover:text-teal-300 transition-colors text-lg leading-snug"
                    >
                      {project.title}
                    </Link>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{project.year} · {project.domain}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-teal-900/50 text-teal-300 font-medium border border-teal-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/robotics/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Read more <HiArrowRight size={13} />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <AiFillGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-900/30 rounded-lg border border-teal-800 p-6">
            <p className="text-teal-300 text-sm leading-relaxed">
              <strong className="text-teal-200">MS Robotics & Autonomous Systems</strong> — I'm
              applying to ASU's program (EE concentration) for Spring 2027. These projects are part
              of my preparation. If you're ASU faculty or a researcher working in manipulation,
              perception, or human-robot interaction, I'd enjoy a conversation.{" "}
              <Link href="/contact" className="underline hover:text-white transition-colors">
                Get in touch →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
