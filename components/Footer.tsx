/*
 * Geovanedd Portfolio · GNU GPL v3
 */
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about"    },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060610]">

      {/* Top edge glow */}
      <div
        className="absolute top-0 inset-x-0 h-px
          bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* ── Brand ─────────────────────────────────────── */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Geovanedd — home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg
                bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white text-xs font-bold
                shadow-lg shadow-violet-500/20 select-none">
                G
              </span>
              <span className="text-sm font-semibold text-white/75
                group-hover:text-white transition-colors duration-200">
                Geovanedd
              </span>
            </Link>
            <p className="text-xs text-white/25 leading-relaxed max-w-xs">
              Developer building open-source tools and self-hosted
              applications for a more private, efficient web.
            </p>
          </div>

          {/* ── Navigation ────────────────────────────────── */}
          <div className="space-y-4">
            <p className="text-[11px] text-white/20 tracking-[0.2em] uppercase font-mono">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/35 hover:text-white/70
                      transition-colors duration-200"
                    aria-label={`Go to ${label} section`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/geovane2dd"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 text-sm text-white/35
                    hover:text-white/70 transition-colors duration-200"
                  aria-label="Visit GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-[1em] h-[1em]" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* ── Connect ───────────────────────────────────── */}
          <div className="space-y-4">
            <p className="text-[11px] text-white/20 tracking-[0.2em] uppercase font-mono">
              Connect
            </p>
            <a
              href="https://github.com/geovane2dd"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                bg-white/[0.05] hover:bg-white/[0.09]
                border border-white/[0.07] hover:border-white/[0.16]
                text-sm text-white/55 hover:text-white font-medium
                transition-all duration-200 active:scale-[0.97]"
              style={{ minHeight: "44px" }}
              aria-label="Visit GitHub profile to view open-source projects"
            >
              <FontAwesomeIcon icon={faGithub} className="w-[1em] h-[1em]" />
              GitHub
            </a>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="pt-8 border-t border-white/[0.05]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/18 font-mono">
              © {new Date().getFullYear()} Geovanedd · GNU GPL v3 ·{" "}
              <a
                href="https://geovanedd.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white/45 transition-colors duration-200"
              >
                geovanedd.com
              </a>
            </p>
            <p className="text-[11px] text-white/15 font-mono text-center sm:text-right max-w-sm leading-relaxed">
              Free software — redistribute under the{" "}
              <a
                href="https://www.gnu.org/licenses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/28 hover:text-white/55 transition-colors duration-200 underline"
              >
                GNU General Public License v3
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}