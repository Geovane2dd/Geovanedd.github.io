import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faServer, faMusic } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: "LinkPure",
    description: "A tool that removes link tracking, focused on online shopping sites. It also removes affiliate links.",
    icon: faGithub,
    link: "https://linkpure.geovanedd.me",
    github: "https://github.com/Geovanedd/LinkPure",
    demoEnabled: true
  },
  {
    title: "B3API",
    description: "RESTful API for querying data from the Brazilian financial market (B3).",
    icon: faServer,
    link: "https://b3api.geovanedd.me",
    github: "https://github.com/Geovanedd/B3API", 
    demoEnabled: true
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
    icon: faDiscord,
    link: "",
    github: "https://github.com/Geovanedd/FlexTux",
    demoEnabled: false
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#1a1f2e] text-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-16 sm:pt-20">
        <section className="container mx-auto px-4 py-20 sm:py-32 flex flex-col items-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent blur-3xl"></div>
          <div className="text-center space-y-6 sm:space-y-10 max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient tracking-tight">
              Geovanedd
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light px-4">
              Web developer focused on open-source and self-hosted projects.
            </p>
            <div className="flex gap-4 sm:gap-8 justify-center pt-6 sm:pt-10">
              <a 
                href="https://github.com/Geovanedd" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/20 hover:border-cyan-400 rounded-xl text-base sm:text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center group backdrop-blur-xl shadow-lg hover:shadow-cyan-500/25"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all duration-300" 
                />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:py-24 relative" id="projects">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-20 text-center relative">
            <span className="relative pb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden project-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 sm:p-10 rounded-2xl transition-all duration-500 backdrop-blur-xl border border-gray-700/20 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-blue-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                
                <div className="flex items-center justify-between mb-6 sm:mb-8 relative">
                  <div className="text-cyan-400 text-2xl sm:text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:text-cyan-300">
                    <FontAwesomeIcon icon={project.icon} className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    {project.demoEnabled && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed min-h-[4rem] text-base sm:text-lg">{project.description}</p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                  {project.demoEnabled && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-full sm:flex-1 py-3 px-6 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                      <span>Visit Website</span>
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-full sm:flex-1 py-3 px-6 text-center rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm sm:text-base font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-800/25 border border-gray-700 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
