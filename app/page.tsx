import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faServer, faMusic } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "LinkPure",
    description: "A tool that removes link tracking, focused on online shopping sites. It also removes affiliate links.",
    icon: faGithub,
    link: "https://linkpure.geovanedd.me",
    github: "https://github.com/geovane2dd/LinkPure",
    demoEnabled: true
  },
  {
    title: "B3API",
    description: "RESTful API for querying data from the Brazilian financial market (B3).",
    icon: faServer,
    link: "",
    github: "https://github.com/geovane2dd/B3API", 
    demoEnabled: false
  },
  {
    title: "Little Dolly Website",
    description: "Modern website developed for the band Little Dolly, with a custom design and optimized for music content promotion.",
    icon: faMusic,
    link: "",
    github: "https://github.com/bandalittledolly/Website",
    demoEnabled: false
  },
  {
    title: "FlexTux Bot",
    description: "Discord bot developed with fun, utility, economy, and moderation commands for servers.",
    icon: faGithub,
    link: "",
    github: "https://github.com/geovane2dd/FlexTux",
    demoEnabled: false
  }
];

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HomePage() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <section 
            className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32"
            aria-label="Introduction"
          >
            <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
              <header className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white tracking-tight leading-none px-2">
                  GeovaneDD
                </h1>
                <div className="w-12 sm:w-16 h-px bg-[#2a2a2a] mx-auto" aria-hidden="true"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto px-4">
                  Web developer specialized in creating <span className="text-white font-medium">open-source solutions</span> and <span className="text-white font-medium">self-hosted applications</span>. Building secure, efficient, and user-friendly web experiences with modern technologies.
                </p>
              </header>
              <nav aria-label="Social links">
                <div className="flex gap-4 justify-center pt-4 px-2">
                  <a 
                    href="https://github.com/geovane2dd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 active:scale-[0.98] touch-manipulation"
                    style={{minHeight: '44px'}}
                    aria-label="Visit GeovaneDD GitHub profile to view open-source projects"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" style={{width: '1em', height: '1em'}} aria-hidden="true" />
                    <span>View GitHub Profile</span>
                  </a>
                </div>
              </nav>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6" aria-hidden="true">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"></div>
            </div>
          </div>

          <section 
            className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32" 
            id="projects"
            aria-label="Featured Projects"
          >
            <div className="max-w-7xl mx-auto">
              <header className="mb-12 sm:mb-16 md:mb-20 text-center px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-white tracking-tight">
                  Featured Projects
                </h2>
                <div className="space-y-3 max-w-2xl mx-auto">
                  <p className="text-gray-500 text-sm sm:text-base">
                    Explore a curated collection of open-source projects and self-hosted solutions designed for privacy, security, and efficiency. Each project is built with modern web technologies and best practices.
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Learn more about <a href="#about" className="text-gray-400 hover:text-white underline">my development approach</a>, or explore <a href="#projects" className="text-gray-400 hover:text-white underline">all featured projects</a> below.
                  </p>
                </div>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8" role="list">
                {projects.map((project, index) => (
                  <article 
                    key={index} 
                    className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5 sm:p-6 md:p-8 hover:border-[#2a2a2a] hover:bg-[#121212] transition-all duration-300"
                    role="listitem"
                  >
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="text-gray-500 text-xl sm:text-2xl group-hover:text-gray-400 transition-colors duration-300" aria-hidden="true">
                        <FontAwesomeIcon icon={project.icon} className="text-[20px] sm:text-[24px]" style={{width: '1em', height: '1em'}} />
                      </div>
                      <nav aria-label={`${project.title} links`}>
                        <div className="flex gap-3">
                          {project.demoEnabled && (
                          <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-gray-600 hover:text-white transition-colors duration-200 p-2.5 -m-2.5 rounded touch-manipulation"
                          title="Open demo in new tab"
                          aria-label={`Visit ${project.title} live demo website`}
                          style={{minWidth: '44px', minHeight: '44px'}}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-base" style={{width: '1em', height: '1em'}} aria-hidden="true" />
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-white transition-colors duration-200 p-2.5 -m-2.5 rounded touch-manipulation"
                        title="View source code on GitHub"
                        aria-label={`View ${project.title} source code on GitHub`}
                        style={{minWidth: '44px', minHeight: '44px'}}
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-base" style={{width: '1em', height: '1em'}} aria-hidden="true" />
                      </a>
                        </div>
                      </nav>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-200">
                        <a 
                          href={project.demoEnabled ? project.link : project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          aria-label={`Learn more about ${project.title} project`}
                        >
                          {project.title}
                        </a>
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-xs sm:text-sm group-hover:text-gray-400 transition-colors duration-200">
                        {project.description}
                      </p>
                    </div>

                    <footer className="flex gap-3 pt-4 border-t border-[#1a1a1a]">
                      {project.demoEnabled && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex-1 py-3 px-5 text-center rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 touch-manipulation"
                          style={{minHeight: '44px'}}
                          aria-label={`Visit ${project.title} live demo to try the application`}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-base" style={{width: '1em', height: '1em'}} aria-hidden="true" />
                          <span>Visit Live Demo</span>
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={`${project.demoEnabled ? 'flex-1' : 'w-full'} py-3 px-5 text-center rounded-lg bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm font-medium transition-all duration-200 border border-[#252525] hover:border-[#2a2a2a] active:scale-[0.98] flex items-center justify-center gap-2 touch-manipulation`}
                        style={{minHeight: '44px'}}
                        aria-label={`View ${project.title} source code and documentation on GitHub`}
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-base" style={{width: '1em', height: '1em'}} aria-hidden="true" />
                        <span>View Source Code</span>
                      </a>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6" aria-hidden="true">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"></div>
            </div>
          </div>
          <section 
            id="about"
            className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32" 
            aria-label="About GeovaneDD"
          >
            <div className="max-w-4xl mx-auto">
              <header className="mb-12 sm:mb-16 text-center px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-white tracking-tight">
                  About
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                  Learn about my development approach and the technologies I use
                </p>
              </header>
              <div className="space-y-6 sm:space-y-8">
                <article className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                    Development Philosophy
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      I focus on creating open-source solutions and self-hosted applications that prioritize privacy, security, and user experience. Every project is built with modern web technologies, following best practices and clean code principles.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      My work spans web development, API design, and full-stack applications, with a particular interest in tools that help users maintain control over their data and digital privacy. Each project is designed to be reliable, efficient, and easy to use.
                    </p>
                  </div>
                </article>

                <article className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                    Technologies & Tools
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      I work with a modern technology stack that includes TypeScript, React, Next.js, Node.js, and various other tools that enable fast, secure, and scalable web applications. All projects are built with TypeScript for type safety and better developer experience.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      My projects are open-source and available on <a href="https://github.com/geovane2dd" target="_blank" rel="noopener noreferrer nofollow" className="text-white hover:underline">GitHub</a>, where you can review the code, contribute, or use them as inspiration for your own projects. All code is well-documented and follows industry best practices.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
