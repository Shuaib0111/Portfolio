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
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.8,
      opacity: 0,
      duration: 1,
      ease: "Power3.easeOut",
    })
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
    <main className="container mx-auto px-4 py-22 flex flex-col-reverse md:flex-row justify-between items-center max-w-screen-lg">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
        <h1
          ref={h11}
          className="text-2xl md:text-4xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Hi,<br />
          This is
        </h1>
        <h1
          ref={h12}
          className="text-3xl md:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 mb-3"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
        >
          I'm a Full Stack Web Developer
        </h2>
        <h2 className="text-md md:text-lg xl:text-xl text-gray-700 dark:text-gray-300 font-medium mb-6">
          {tagline}
        </h2>

        <div className="button mt-8">
          <a
            href="/Mohd Shuaib Anwar resume_2025(M).pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-black to-gray-700 text-white rounded-xl border border-gray-700 hover:bg-white hover:text-white hover:font-semibold transition duration-300"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full relative bottom-6 flex items-center justify-center">
          <img
            ref={myimageref}
            src={img}
            alt="Mohd Shuaib Anwar"
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
