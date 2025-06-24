import React, { useEffect } from "react";
import { FaBriefcase, FaGraduationCap, FaUser } from "react-icons/fa";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";
import gsap from "gsap";

function About() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".section-heading", {
      duration: 1,
      y: -60,
      opacity: 0,
      stagger: 0.2,
    }).from(".section-content", {
      opacity: 0,
      duration: 1,
      y: 20,
    });
  }, []);

  const updatedWorkDetails = [
    {
      Position: "Full Stack Developer",
      Company: (
        <a
          href="https://www.webworldhub.co.in"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noreferrer"
        >
          Web World Hub
        </a>
      ),
      Location: "India (Remote)",
      Type: "Full-time",
      Duration: "April 2025 - Present",
      Description:
        "Building scalable full-stack web applications using MERN stack. Leading feature implementation, debugging, and optimization for real-world clients.",
    },
  ];

  return (
    <main className="container mx-auto px-6 md:px-32 pt-12 pb-24 max-w-6xl">
      {/* About Me */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FaUser className="text-2xl text-gray-700 dark:text-white" />
          <h1 className="section-heading text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading">
            About Me
          </h1>
        </div>
        <p className="section-content text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
          {personalDetails.about}
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FaBriefcase className="text-2xl text-gray-700 dark:text-white" />
          <h1 className="section-heading text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading">
            Work Experience
          </h1>
        </div>
        <div className="section-content grid gap-6">
          {updatedWorkDetails.map(
            ({ Position, Company, Location, Type, Duration, Description }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                  description={Description}
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <FaGraduationCap className="text-2xl text-gray-700 dark:text-white" />
          <h1 className="section-heading text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading">
            Education
          </h1>
        </div>
        <div className="section-content grid gap-6">
          {eduDetails.map(
            ({ Position, Company, Location, Type, Duration }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
