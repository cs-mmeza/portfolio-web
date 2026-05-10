import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Mauricio Meza</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mechanical Designer & Mechatronics Engineer. Relocating to Tempe, AZ. MS Robotics &
              Autonomous Systems candidate — ASU Spring 2027.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ["/work", "Engineering Work"],
                ["/robotics", "Robotics Projects"],
                ["/blog", "Blog"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/mauricio-meza/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-teal-400 transition-colors text-2xl"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/cs-mmeza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-teal-400 transition-colors text-2xl"
              >
                <AiFillGithub />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              Open to mechanical design contract work and robotics research discussions.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Mauricio Meza. Mechanical Designer & Mechatronics Engineer.
          </p>
          <p className="text-gray-500 text-xs">Phoenix, AZ · Tempe, AZ</p>
        </div>
      </div>
    </footer>
  );
}
