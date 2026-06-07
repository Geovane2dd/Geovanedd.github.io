/*
 * Geovane2dd Portfolio — Developer documentation site
 * Copyright (C) 2026 Geovane2dd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import Link from "next/link";
import GitHubIcon          from "@mui/icons-material/GitHub";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about"    },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.055] bg-[#060610]">

      {/* Top edge glow */}
      <div
        className="absolute top-0 inset-x-0 h-px
          bg-gradient-to-r from-transparent via-violet-500/25 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* ── Brand ─────────────────────────────────────────── */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Geovane2dd — home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg
                bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white text-xs font-bold
                shadow-lg shadow-violet-500/20 select-none">
                G
              </span>
              <span className="text-sm font-semibold text-white/72
                group-hover:text-white transition-colors duration-200">
                Geovane2dd
              </span>
            </Link>
            <p className="text-xs text-white/24 leading-relaxed max-w-xs">
              Developer building open-source tools and self-hosted
              applications for a more private, efficient web.
            </p>
            <a
              href="https://github.com/geovane2dd"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg
                bg-white/[0.05] hover:bg-white/[0.09]
                border border-white/[0.07] hover:border-white/[0.16]
                text-sm text-white/50 hover:text-white font-medium
                transition-all duration-200 active:scale-[0.97]"
              style={{ minHeight: "40px" }}
              aria-label="Visit GitHub profile"
            >
              <span className="text-[1em]"><GitHubIcon /></span>
              GitHub
              <span className="text-[0.8em] transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowForwardRounded />
              </span>
            </a>
          </div>

          {/* ── Navigation ────────────────────────────────────── */}
          <div className="space-y-4">
            <p className="text-[10px] text-white/20 tracking-[0.25em] uppercase font-mono">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/34 hover:text-white/68
                      transition-colors duration-200"
                    aria-label={`Go to ${label} section`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/geovane2dd?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 text-sm text-white/34
                    hover:text-white/68 transition-colors duration-200"
                  aria-label="All repositories on GitHub"
                >
                  All repositories
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="pt-8 border-t border-white/[0.045]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-white/18 font-mono">
              © 2026 Geovane2dd · GNU GPL v3 ·{" "}
              <a
                href="https://geovanedd.me"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-white/42 transition-colors duration-200"
              >
                geovanedd.me
              </a>
            </p>
            <p className="text-[10px] text-white/14 font-mono text-center sm:text-right">
              Free software — redistribute under the{" "}
              <a
                href="https://www.gnu.org/licenses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/26 hover:text-white/52 transition-colors duration-200 underline"
              >
                GNU GPL v3
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
