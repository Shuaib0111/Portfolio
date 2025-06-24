import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  MdOutlineDevices,
  MdOutlineDescription,
  MdOutlineCode,
} from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { projectDetails } from "../Details";
import gsap from "gsap";

function Projects() {
  useEffect(() => {
    gsap.from(".fade-project", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="px-4 pt-12 pb-24 max-w-7xl mx-auto">
      {/* Heading Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-4">
          💼 Showcasing My Best Work
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Explore my collection of cutting-edge web projects, from full-stack
          platforms to rich UI experiences — each crafted with precision,
          performance, and modern tech.
        </p>
      </section>

      {/* Project Cards Grid */}
      <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectDetails.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="fade-project"
            key={index}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden">
              {/* Image Container */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                    <MdOutlineDevices className="text-lg" /> {project.title}
                  </h2>

                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                    <p className="flex items-start gap-2">
                      <MdOutlineDescription className="text-base mt-0.5" />
                      <span>{project.description}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MdOutlineCode className="text-base mt-0.5" />
                      <span className="font-medium">Tech Stack:</span>{" "}
                      {project.techstack}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-black to-gray-800 text-white rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    View Project <FaExternalLinkAlt className="ml-2 text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </section>
    </main>
  );
}

export default Projects;
