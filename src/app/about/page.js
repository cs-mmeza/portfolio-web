import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiAcademicCap, HiCog, HiChip } from "react-icons/hi";

export const metadata = {
  title: "About — Mauricio Meza",
  description:
    "Career arc, education, and certifications for Mauricio Meza: ITESCA EE → mechatronics engineer → mechanical designer → MS Robotics candidate at ASU.",
};

const mechanicalSkills = [
  "SolidWorks (CSWP)",
  "AutoCAD",
  "FEA / Simulation",
  "GD&T (ASME Y14.5)",
  "Design Tables",
  "Parametric Modeling",
  "Weldment Design",
  "Vibration Analysis",
  "Tolerance Stack-Up",
  "DFM / DFA",
  "Technical Drawings",
  "Sheet Metal Design",
];

const softwareSkills = [
  "Python",
  "ROS2",
  "Java",
  "JavaScript / React",
  "Django",
  "Spring Boot",
  "RESTful APIs",
  "PostgreSQL",
  "Docker",
  "Git",
];

const roboticsSkills = [
  "SLAM (SLAM Toolbox)",
  "Nav2 Stack",
  "PyTorch / YOLOv8",
  "Open3D / PCL",
  "Kinematics (FK/IK)",
  "PID Control",
  "Sensor Integration",
  "Gazebo Simulation",
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-navy to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-medium uppercase tracking-wider mb-2">About</p>
          <h1 className="text-3xl md:text-4xl font-bold">Mauricio Meza</h1>
          <p className="text-teal-300 text-lg mt-2">Mechanical Designer & Mechatronics Engineer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Photo + quick facts */}
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-lg mx-auto md:mx-0 mb-6">
              <Image
                src="/mau-meza.jpg"
                alt="Mauricio Meza"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              {[
                { icon: HiCog, label: "CSWP Certified", sub: "SolidWorks Professional" },
                { icon: HiAcademicCap, label: "B.S. EE (Mechatronics)", sub: "ITESCA, 2013" },
                { icon: HiChip, label: "MS Robotics (2027)", sub: "ASU, EE Concentration" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <Icon className="text-teal-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-navy">{label}</p>
                    <p className="text-xs text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://docs.google.com/document/d/1-dLvyX3TRGO-UIzUJhaP2SBk-xyW3D64/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 rounded-md font-semibold text-white btn-gradient text-sm"
              >
                Download Resume
              </a>
              <Link
                href="/contact"
                className="block text-center px-4 py-2 rounded-md font-semibold border border-teal-600 text-teal-700 hover:bg-teal-50 transition-colors text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">The Story So Far</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>
                  I started my engineering career programming PLC systems and designing automation
                  fixtures in manufacturing plants in Sonora, México. My degree is in Electrical
                  Engineering with a mechatronics specialization — I liked the space where hardware
                  and control software meet. That instinct hasn't changed.
                </p>
                <p>
                  About seven years ago I made a deliberate pivot into the U.S. mechanical design
                  market. I wanted to build deep, practical skills in mechanical systems — CAD,
                  drafting, FEA, GD&T, manufacturing processes — the kind that take years of project
                  volume to accumulate. I did. Across HVAC, aerospace, optical manufacturing, retail,
                  and emergency response, I've delivered fixture packages, vibration isolation
                  systems, structural weldments, and precision tooling on real projects with real
                  consequences.
                </p>
                <p>
                  That foundation is what I bring to robotics. I know how to design a mechanism that
                  a machinist can actually build. I know what a tolerance stack-up means in practice.
                  I know that simulation results are only as good as the model assumptions. Those
                  aren't things you pick up from coursework.
                </p>
                <p>
                  I'm pursuing an MS in Robotics & Autonomous Systems at ASU (EE concentration,
                  Spring 2027) because robotics is where mechanical, electrical, and software
                  engineering genuinely converge — and because I want to work at that intersection at
                  a higher level than I can reach without the credentials and research exposure.
                  Manipulation, perception, and autonomous systems are the areas I'm most interested
                  in.
                </p>
                <p>
                  In the meantime, I'm available for mechanical design contract work in the Phoenix /
                  Tempe area and interested in conversations with researchers or faculty working on
                  problems I can contribute to.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-navy mb-6">Career Arc</h2>
          <div className="relative border-l-2 border-teal-200 pl-6 space-y-8">
            {[
              {
                period: "2013–2016",
                role: "Mechatronics Engineer",
                org: "Manufacturing & Automation",
                detail: "PLC programming (ladder logic, function blocks), automation fixture design, machine integration. Electrical panel layout and control system wiring.",
              },
              {
                period: "2017–Present",
                role: "Mechanical Designer",
                org: "Phoenix, AZ metro",
                detail: "SolidWorks-based mechanical design across HVAC (Kinetics), aerospace (Radiall, ADB), retail displays (Boss Display), electronics (TE Connectivity), and emergency equipment (Lifeline Trailers). CSWP certified.",
              },
              {
                period: "2023–2024",
                role: "Software / Back-End Developer",
                org: "Revature / Contract",
                detail: "Java Spring Boot APIs, RESTful service design, PostgreSQL, microservices architecture. Team delivery at enterprise scale.",
              },
              {
                period: "2024–Now",
                role: "Self-Directed Robotics Study",
                org: "Personal Projects",
                detail: "ROS2 autonomous navigation, manipulator kinematics, 3D point cloud perception, vision-based drone tracking. Parallel preparation for graduate application.",
              },
              {
                period: "Spring 2027",
                role: "MS Robotics & Autonomous Systems (EE)",
                org: "Arizona State University",
                detail: "Target program. Control theory, machine learning, dynamics, perception.",
              },
            ].map(({ period, role, org, detail }, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-teal-500 border-2 border-white shadow-sm" />
                <p className="text-xs text-teal-600 font-semibold mb-0.5">{period}</p>
                <h3 className="font-bold text-navy">{role}</h3>
                <p className="text-sm text-gray-500 mb-1">{org}</p>
                <p className="text-sm text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Mechanical Engineering", icon: HiCog, skills: mechanicalSkills, color: "navy" },
            { title: "Software & Tools", icon: null, skills: softwareSkills, color: "teal" },
            { title: "Robotics", icon: HiChip, skills: roboticsSkills, color: "slate" },
          ].map(({ title, skills }) => (
            <div key={title} className="bg-gray-50 rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-navy text-sm mb-4">{title}</h3>
              <ul className="space-y-1.5">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <IoIosCheckmarkCircle className="text-teal-500 flex-shrink-0" size={14} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-navy mb-6">Education</h2>
          <div className="space-y-4">
            {[
              {
                degree: "M.S. Robotics & Autonomous Systems — EE Concentration",
                school: "Arizona State University, Tempe AZ",
                year: "Spring 2027 (applicant)",
                detail: "Target program. Focus areas: control systems, machine learning, dynamics, perception.",
                current: true,
              },
              {
                degree: "B.S. Electrical Engineering — Mechatronics Specialization",
                school: "Instituto Tecnológico Superior de Cajeme (ITESCA)",
                year: "2013",
                detail: "Coursework in control systems, PLC programming, electronics, automation, and mechanical design fundamentals.",
                current: false,
              },
            ].map(({ degree, school, year, detail, current }) => (
              <div
                key={degree}
                className={`rounded-lg border p-5 ${
                  current ? "bg-teal-50 border-teal-200" : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="font-bold text-navy">{degree}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{school}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{year}</p>
                  </div>
                  {current && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200 self-start">
                      In progress
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
