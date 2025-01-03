import React, { useEffect, useRef } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const totalProjects = projectDetails.length; // Get the total number of projects
    projectRefs.current.forEach((project, index) => {
      const delay = (index / totalProjects) * 0.6; // Dynamically calculate a smaller delay
      gsap.fromTo(
        project,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: delay, // Apply the calculated delay
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 90%", // Start animating when the project is near the viewport
          },
        }
      );
    });
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projectDetails.map(
            (
              { title, image, description, techstack, previewLink, githubLink },
              index
            ) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
