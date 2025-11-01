import React from "react";
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

export default function HomePage() {
  // Structured Data for Projects
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Projects',
    description: 'Collection of open-source and self-hosted projects',
    itemListElement: projects.map((project, index) => ({
      '@type': 'SoftwareApplication',
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.demoEnabled ? project.link : project.github,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      codeRepository: project.github,
    })),
  };

  return (
    <>
      {/* Structured Data for Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e5e5e5]">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section 
            className="container mx-auto px-6 py-32 sm:py-40"
            aria-label="Introduction"
          >
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
              <div className="space-y-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold text-white tracking-tight leading-none">
                  GeovaneDD
                </h1>
                <div className="w-16 h-px bg-[#2a2a2a] mx-auto" aria-hidden="true"></div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
                  Web developer focused on open-source and self-hosted projects.
                </p>
              </div>
              <nav aria-label="Social links">
                <div className="flex gap-4 justify-center pt-4">
                  <a 
                    href="https://github.com/geovane2dd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 active:scale-[0.98]"
                    aria-label="Visit GeovaneDD GitHub profile"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </div>
              </nav>
            </div>
          </section>

          {/* Divider */}
          <div className="container mx-auto px-6" aria-hidden="true">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"></div>
            </div>
          </div>

          {/* Projects Section */}
          <section 
            className="container mx-auto px-6 py-24 sm:py-32" 
            id="projects"
            aria-label="Featured Projects"
          >
            <div className="max-w-7xl mx-auto">
              <header className="mb-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-white tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                  A collection of open-source projects and self-hosted solutions
                </p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
                {projects.map((project, index) => (
                  <article 
                    key={index} 
                    className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-8 hover:border-[#2a2a2a] hover:bg-[#121212] transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    role="listitem"
                  >
                    {/* Top Bar */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-gray-500 text-2xl group-hover:text-gray-400 transition-colors duration-300" aria-hidden="true">
                        <FontAwesomeIcon icon={project.icon} className="w-6 h-6" />
                      </div>
                      <nav aria-label={`${project.title} links`}>
                        <div className="flex gap-3">
                          {project.demoEnabled && (
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="text-gray-600 hover:text-white transition-colors duration-200 p-2 -m-2 rounded"
                              aria-label={`Visit ${project.title} website`}
                            >
                              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" aria-hidden="true" />
                            </a>
                          )}
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-white transition-colors duration-200 p-2 -m-2 rounded"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" aria-hidden="true" />
                          </a>
                        </div>
                      </nav>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] group-hover:text-gray-400 transition-colors duration-200">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <footer className="flex gap-3 pt-4 border-t border-[#1a1a1a]">
                      {project.demoEnabled && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex-1 py-3 px-5 text-center rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Visit</span>
                        </a>
                      )}
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={`${project.demoEnabled ? 'flex-1' : 'w-full'} py-3 px-5 text-center rounded-lg bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm font-medium transition-all duration-200 border border-[#252525] hover:border-[#2a2a2a] active:scale-[0.98] flex items-center justify-center gap-2`}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
