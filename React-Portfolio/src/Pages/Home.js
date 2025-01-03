import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(".button", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: "Power3.easeOut",
      });
  }, []);

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row justify-between items-center max-w-screen-lg">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl font-bold mb-2"
        >
          Hi,<br />
          This is<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-transparent md:text-4xl xl:text-5xl font-bold mb-2"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="mt-2 text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl tracking-tight font-bold mb-6"
        >
          {tagline}
        </h2>
        <div className="button mt-8">
          <a
            href="/Mohd Shuaib Anwar resume_2025 (2).pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl border-[1px] border-blue-900 hover:bg-none hover:text-blue-600 hover:font-semibold hover:border-[1px] hover:border-gradient-to-r hover:border-blue-700 transition duration-300"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0">
        <img
          ref={myimageref}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          src={img}
          alt="Mohd Shuaib Anwar"
        />
      </div>
    </main>
  );
}

export default Home;
