// Logo images
import logogradient from "./assets/logo.jpg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile-2.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import node from "./assets/techstack/node.png";
import express from "./assets/techstack/express.png";
import mongo from "./assets/techstack/mongo.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Personal Details
export const personalDetails = {
  name: "Mohd Shuaib Anwar",
  tagline: "Turning visions into engaging web realities.",
  img: profile,
  about: `Hi, I’m Mohd Shuaib Anwar, a Full-Stack Web Developer specializing in the MERN stack. With a BCA and ongoing MCA studies, I have hands-on experience from a 6-month internship at Hanumant Technology, building innovative web applications and solving complex problems. Let’s create something amazing together!`,
};

// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mohd-shuaib-anwar",
  
  github: "https://github.com/Shuaib0111",
};

// Work Experience 
export const workDetails = [
  {
    Position: "MERN STACK Developer",
    Company: `Hanumant Technology Pvt Ltd`,
    Location: "Lucknow",
    Type: "Internship",
    Duration: "Jul 2024  - Dec 2024",
    Description: `Worked as a MERN Stack intern at Hanumant Technology Pvt. Ltd., where I gained hands-on experience in full-stack web development. Worked on diverse projects, enhancing my skills in both front-end and back-end development while delivering efficient and innovative web solutions.`
  },
  
];

// Education Details
export const eduDetails = [
  {
    Position: "Master of Computer Applicatons",
    Company: "Khwaja Moinuddin Chishti Language University",
    Location: "Lucknow",
    Type: "Ongoing",
    Duration: "Aug 2024 - Present",
  },
  {
    Position: "Bachelor of Computer Applications",
    Company: `Khwaja Moinuddin Chishti Language University`,
    Location: "Lucknow",
    Type: "Completed",
    Duration: "Sep 2021 - May 2024"
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  node: node,
  express: express,
  mongo: mongo,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Project Details 
export const projectDetails = [
  {
    title: "Take Off Travels",
    image: projectImage1,
    description: `A full-stack travel booking platform where users can explore and book exciting holiday packages, while admins have full control to create, update, and manage all packages. Designed to deliver seamless experience for both travelers and admin staff.`,
    techstack: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS",
    previewLink: "https://www.takeofftravels.co.in/",
  },
  {
    title: "ABIA Fashion",
    image: projectImage2,
    description: `A stunning frontend website for a designer clothing brand that showcases a range of premium women's wear. Built with smooth UI, elegant visuals, and clear navigation to provide an immersive fashion browsing experience.`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://abiafashion.in",
  },
  {
    title: "Golden Leaf Caterers",
    image: projectImage3,
    description: `An elegant catering business website where users can view menus, browse veg/non-veg options, and place bookings for events. Designed to attract local customers with a clean layout, easy info access, and responsive interface.`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://www.goldenleafcaterers.in/",
  },
  {
    title: "Khas Architect Studio",
    image: projectImage4,
    description: `A premium architectural portfolio website that presents services like interior, exterior, and structural design. Clients can view latest works, explore project galleries, and even book architectural consultations online.`,
    techstack: "React.js, Tailwind CSS, Framer Motion",
    previewLink: "https://khasarchitects.in/",
  },
  {
    title: "X Factor Interior",
    image: projectImage5,
    description: `A beautifully structured website for an interior design company that showcases high-end design projects, gallery sections, and booking options for potential clients looking for custom interiors.`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://xfactorinteriors.co.in/",
  },
  {
    title: "KP RETAIL",
    image: projectImage6,
    description: `Corporate website for KP Retail Solution Pvt. Ltd., offering services in signage, interior design, exhibitions, activations, and marketing. Features live chat integration for real-time user engagement.`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://kpretail.in/",
  },
];

// Contact Details
export const contactDetails = {
  email: "mohdshuaib77689@gmail.com",
  phone: "+91 9260967254",
};
