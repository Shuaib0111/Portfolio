import React, { useEffect } from "react";
import { techStackDetails } from "../Details";
import gsap from "gsap";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    node,
    express,
    mongo,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
  } = techStackDetails;
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from(".tech-logo",{
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
  },[])
  return (
    <main className="container mx-auto max-width pt-2 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="tech-logo" src={html} title="html" alt="" />
        <img className="tech-logo" src={css} title="CSS" alt="" />
        <img className="tech-logo" src={js} title="JavaScript" alt="" />
        <img className="tech-logo" src={react} title="React" alt="" />
        <img className="tech-logo" src={redux} title="Redux" alt="" />
        <img className="tech-logo h-18" src={node} title="Node.js" alt="" />
        <img className="tech-logo" src={express} title="Express.js" alt="" />
        <img className="tech-logo" src={mongo} title="MongoDB" alt="" />
        <img className="tech-logo" src={tailwind} title="Tailwind CSS" alt="" />
        <img className="tech-logo" src={bootstrap} title="Bootstrap" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="tech-logo" src={vscode} title="Visual Studio Code" alt="" />
        <img className="tech-logo" src={git} title="Git" alt="Git" />
        <img className="tech-logo" src={github} title="Github" alt="Github" />
        <img className="tech-logo" src={npm} title="NPM" alt="NPM" />
        <img className="tech-logo" src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
