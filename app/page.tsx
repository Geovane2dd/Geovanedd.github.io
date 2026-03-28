/*
 * GeovaneDD Portfolio · GNU GPL v3
 * Server Component — export const dynamic/revalidate são válidos aqui.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faServer,
  faMusic,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const dynamic    = "force-static";
export const revalidate = 3600;

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id:      "linkpure",
    title:   "LinkPure",
    tagline: "URL Sanitizer",
    description:
      "Strips tracking parameters and affiliate tokens from shopping URLs. Open-source, privacy-first, zero client-side dependencies.",
    stack:  ["TypeScript", "Next.js", "Regex Engine"],
    icon:   faCode,
    link:   "https://linkpure.geovanedd.com",
    github: "https://github.com/geovane2dd/LinkPure",
    demo:   true,
    dot:    "bg-violet-400",
    glow:   "hover:shadow-violet-950/60",
  },
  {
    id:      "b3api",
    title:   "B3 API",
    tagline: "Financial Data API",
    description:
      "RESTful API exposing real-time and historical data from Brazil's stock exchange (B3) for developers and financial applications.",
    stack:  ["Node.js", "REST", "Finance"],
    icon:   faServer,
    link:   "",
    github: "https://github.com/geovane2dd/B3API",
    demo:   false,
    dot:    "bg-cyan-400",
    glow:   "hover:shadow-cyan-950/60",
  },
  {
    id:      "little-dolly",
    title:   "Little Dolly",
    tagline: "Artist Website",
    description:
      "Modern, performance-optimised website for the band Little Dolly. Custom design built for immersive music-content promotion.",
    stack:  ["React", "Tailwind", "Web Design"],
    icon:   faMusic,
    link:   "",
    github: "https://github.com/bandalittledolly/Website",
    demo:   false,
    dot:    "bg-rose-400",
    glow:   "hover:shadow-rose-950/60",
  },
  {
    id:      "flextux",
    title:   "FlexTux Bot",
    tagline: "Discord Bot",
    description:
      "Feature-rich Discord bot with economy, moderation, utility and fun modules. Built for high-traffic servers.",
    stack:  ["Node.js", "Discord.js", "CLI"],
    icon:   faGithub,
    link:   "",
    github: "https://github.com/geovane2dd/FlexTux",
    demo:   false,
    dot:    "bg-emerald-400",
    glow:   "hover:shadow-emerald-950/60",
  },
];

const techGrid = [
  { label: "TypeScript",   sub: "Primary language" },
  { label: "React / Next", sub: "Frontend & SSR"   },
  { label: "Node.js",      sub: "Backend & APIs"   },
  { label: "Open-Source",  sub: "Everything public"},
  { label: "Self-Hosted",  sub: "Privacy-first"    },
  { label: "Tailwind CSS", sub: "UI styling"       },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#07070f]"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <main className="flex-grow" itemProp="mainContentOfPage">

        {/* ═══════════════════════ HERO ════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          aria-label="Geovanedd — Developer Portfolio"
        >
          {/* Atmosphere */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <div className="absolute top-[-20%] left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px]
              rounded-full opacity-[0.07]
              bg-[radial-gradient(ellipse,#7c3aed,transparent_65%)]" />
            <div className="absolute bottom-[5%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]
              rounded-full opacity-[0.05]
              bg-[radial-gradient(ellipse,#0ea5e9,transparent_65%)]" />
            <div
              className="absolute inset-0 opacity-[0.018]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-[62%] inset-x-0 h-px
              bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-24 sm:pt-36">
            <div className="max-w-3xl">

              <h1 className="font-bold leading-[0.92] tracking-[-0.045em] text-white mb-7">
                <span className="block text-[clamp(3rem,9vw,6.5rem)]">Web</span>
                <span className="block text-[clamp(3rem,9vw,6.5rem)]
                  bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300
                  bg-clip-text text-transparent pb-1">
                  Developer.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/32 font-light leading-relaxed max-w-lg mb-10">
                Building{" "}
                <span className="text-white/58">open-source tools</span>
                {" "}and{" "}
                <span className="text-white/58">self-hosted applications</span>
                {" "}with TypeScript, React and Node.js.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5
                    px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold
                    hover:bg-neutral-100 active:scale-[0.975]
                    transition-all duration-200 shadow-xl shadow-white/10"
                  aria-label="View featured projects"
                >
                  View Projects
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-[0.9em] h-[0.9em] transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://github.com/geovane2dd"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2.5
                    px-7 py-3.5 rounded-xl
                    bg-white/[0.05] hover:bg-white/[0.09]
                    border border-white/[0.09] hover:border-white/[0.2]
                    text-sm text-white/60 hover:text-white font-medium
                    transition-all duration-200 active:scale-[0.975]"
                  aria-label="Visit GitHub profile — @geovane2dd"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-[1em] h-[1em]" aria-hidden="true" />
                  @geovane2dd
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2
              flex flex-col items-center select-none"
            aria-hidden="true"
          >
            <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent" />
          </div>
        </section>

        {/* ═══════════════════════ PROJECTS ════════════════════ */}
        <section
          id="projects"
          className="relative py-28 sm:py-36 scroll-mt-20"
          aria-label="Featured Projects"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 sm:px-10">

            <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] text-violet-400/60 uppercase mb-3">
                  Work
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <a
                href="https://github.com/geovane2dd?tab=repositories"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group self-start sm:self-auto inline-flex items-center gap-2
                  text-sm text-white/28 hover:text-white/60 font-medium transition-colors duration-200"
                aria-label="View all repositories on GitHub"
              >
                All repositories
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-[0.85em] h-[0.85em] transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4" role="list">
              {projects.map((p, i) => (
                <article
                  key={p.id}
                  role="listitem"
                  className={`group relative flex flex-col
                    bg-[#0d0d1a] border border-white/[0.065] rounded-2xl
                    hover:border-white/[0.13]
                    hover:shadow-[0_8px_48px_-8px]
                    ${p.glow}
                    transition-all duration-300`}
                >
                  {/* Top shimmer */}
                  <div
                    className="absolute top-0 inset-x-0 h-px rounded-t-2xl
                      bg-gradient-to-r from-transparent via-white/[0.12] to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg
                          bg-white/[0.05] border border-white/[0.07] shrink-0">
                          <FontAwesomeIcon icon={p.icon} className="text-white/40 w-[0.9em] h-[0.9em]" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${p.dot} shrink-0`} aria-hidden="true" />
                            <span className="text-[11px] text-white/25 font-mono tracking-wider">{p.tagline}</span>
                          </div>
                          <h3 className="text-lg font-bold text-white/88 tracking-tight mt-0.5">
                            <a
                              href={p.demo ? p.link : p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-white transition-colors duration-150"
                              aria-label={`${p.title} — ${p.tagline}`}
                            >
                              {p.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11px] text-white/10 font-mono tabular-nums select-none mt-1" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-sm text-white/33 leading-relaxed mb-6
                      group-hover:text-white/46 transition-colors duration-200 flex-1">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6" aria-label={`${p.title} technologies`}>
                      {p.stack.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md
                            bg-white/[0.04] border border-white/[0.055]
                            text-[11px] text-white/26 font-mono tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <footer className="flex gap-2.5 pt-5 border-t border-white/[0.055]">
                      {p.demo && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2
                            py-2.5 px-4 rounded-xl bg-white text-black text-xs font-semibold
                            hover:bg-neutral-100 active:scale-[0.975] transition-all duration-200"
                          aria-label={`Live demo — ${p.title}`}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-[0.85em] h-[0.85em]" aria-hidden="true" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${p.demo ? "flex-1" : "w-full"} inline-flex items-center justify-center gap-2
                          py-2.5 px-4 rounded-xl
                          bg-white/[0.05] hover:bg-white/[0.09]
                          border border-white/[0.07] hover:border-white/[0.17]
                          text-white/52 hover:text-white text-xs font-medium
                          transition-all duration-200 active:scale-[0.975]`}
                        aria-label={`Source code — ${p.title} on GitHub`}
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-[0.9em] h-[0.9em]" aria-hidden="true" />
                        Source Code
                      </a>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ABOUT ═══════════════════════ */}
        <section
          id="about"
          className="relative py-28 sm:py-36 scroll-mt-20"
          aria-label="About Geovanedd"
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            <div className="absolute bottom-[-20%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]
              rounded-full opacity-[0.04]
              bg-[radial-gradient(ellipse,#a855f7,transparent_65%)]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — text */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] text-cyan-400/55 uppercase mb-5">
                  About
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-7 leading-tight">
                  Building the open web,
                  <br />
                  <span className="text-white/28 font-light">one commit at a time.</span>
                </h2>

                <div className="space-y-5 text-sm sm:text-base text-white/35 leading-relaxed">
                  <p>
                    Developer from Brazil focused on crafting{" "}
                    <span className="text-white/58">open-source tools</span>{" "}
                    and{" "}
                    <span className="text-white/58">self-hosted applications</span>{" "}
                    that put users — not corporations — in control of their data.
                  </p>
                  <p>
                    Every project is designed with performance, security and developer
                    experience in mind.
                  </p>
                  <p>
                    Interested in DevOps, privacy infrastructure and the intersection of
                    security and usability in modern web apps.
                  </p>
                </div>

                <a
                  href="https://github.com/geovane2dd"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group inline-flex items-center gap-2.5 mt-8
                    px-5 py-2.5 rounded-xl
                    bg-white/[0.05] hover:bg-white/[0.09]
                    border border-white/[0.08] hover:border-white/[0.18]
                    text-sm text-white/52 hover:text-white font-medium
                    transition-all duration-200 active:scale-[0.975]"
                  aria-label="GitHub — @geovane2dd"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-[1em] h-[1em]" aria-hidden="true" />
                  @geovane2dd
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-[0.8em] h-[0.8em] transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Right — skills + GitHub card */}
              <div>
                <p className="text-[11px] text-white/16 tracking-[0.25em] uppercase font-mono mb-5">
                  Technologies &amp; Tools
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5" aria-label="Technology stack">
                  {techGrid.map(({ label, sub }) => (
                    <div
                      key={label}
                      className="group relative overflow-hidden flex flex-col gap-0.5
                        p-4 rounded-xl
                        bg-white/[0.025] border border-white/[0.05]
                        hover:bg-white/[0.05] hover:border-white/[0.1]
                        transition-all duration-200"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-white/[0.10] to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-white/62
                        group-hover:text-white/82 transition-colors duration-200">
                        {label}
                      </span>
                      <span className="text-[11px] text-white/18 font-mono">{sub}</span>
                    </div>
                  ))}
                </div>

                {/* GitHub card */}
                <div className="mt-4 flex items-center gap-4 p-5 rounded-2xl
                  bg-[#0d0d1a] border border-white/[0.065]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl
                    bg-white/[0.06] border border-white/[0.07] shrink-0">
                    <FontAwesomeIcon icon={faGithub} className="text-white/48 w-[1em] h-[1em]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/70">All projects on GitHub</p>
                    <p className="text-xs text-white/28 font-mono mt-0.5">github.com/geovane2dd</p>
                  </div>
                  <a
                    href="https://github.com/geovane2dd"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="shrink-0 inline-flex items-center gap-1.5
                      px-4 py-2 rounded-lg
                      bg-white/[0.06] hover:bg-white/[0.11]
                      border border-white/[0.08] hover:border-white/[0.18]
                      text-xs text-white/52 hover:text-white font-medium
                      transition-all duration-200 active:scale-[0.975]"
                    aria-label="Open GitHub profile"
                  >
                    Open
                    <FontAwesomeIcon icon={faArrowRight} className="w-[0.8em] h-[0.8em]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}