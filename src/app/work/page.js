import ProjectCard from "@/components/ProjectCard";
import { mechanicalProjects } from "@/data/mechanical-projects";

export const metadata = {
  title: "Engineering Work — Mauricio Meza",
  description:
    "7+ years of mechanical design and manufacturing engineering: HVAC vibration isolation, precision fixturing, structural design, and parametric CAD.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-navy to-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Engineering Work</h1>
          <p className="text-gray-300 max-w-2xl text-base leading-relaxed">
            Mechanical design and manufacturing engineering across HVAC, aerospace, optical
            manufacturing, retail, and emergency response sectors. Seven years of applied SolidWorks,
            FEA, GD&T, and design-for-manufacture.
          </p>
        </div>
      </div>

      {/* Skills bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["SolidWorks / CSWP", "FEA", "GD&T", "Vibration Analysis", "Weldment Design", "Precision Fixturing", "Design Tables", "DFM"].map(
              (skill) => (
                <span key={skill} className="text-xs text-gray-500 font-medium">
                  · {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanicalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} basePath="/work" />
          ))}
        </div>

        <div className="mt-12 bg-teal-50 rounded-lg border border-teal-200 p-6">
          <p className="text-sm text-teal-800 leading-relaxed">
            <strong>Note on confidentiality:</strong> Project descriptions use generic methodology
            language and sanitized details. No proprietary client drawings, specifications, or trade
            secrets are disclosed. Images on project pages use public-domain references or
            schematic illustrations only.
          </p>
        </div>
      </div>
    </div>
  );
}
