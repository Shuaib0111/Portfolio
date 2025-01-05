// Logo images
import logogradient from "./assets/logo.jpg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile-image.png";
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
import projectImage3 from "./assets/projects/project3.jpeg";
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
    title: "JOB PORTAL",
    image: projectImage1,
    description: `A job portal built with the MERN stack, offering role-based access for admins to manage job listings and user details, while users can post jobs and apply for openings.`,
    techstack: "React.js, Node.js, Express.js, MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/Internship_Project",
  },
  {
    title: "News Website",
    image: projectImage2,
    description: `A news website built with React, fetching global news via API, with search and category browsing features for an interactive experience.`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/React-Projects",
  },
  {
    title: "Ochi Website Front-end Replication",
    image: projectImage3,
    description: `A React-based front-end replica of the Ochi website with GSAP animations and advanced scrolling effects using Locomotive Scroll.`,
    techstack: "React.js, Tailwind CSS, Locomotive",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/OCHI_website_front-end_replication",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage4,
    description: `A JavaScript-based Tic Tac Toe game, providing a simple and engaging two-player experience with dynamic gameplay.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/Basic-Front-End-Projects/tree/main/Tic%20Tac%20Toe",
  },
  {
    title: "Todo List",
    image: projectImage5,
    description: `Built a To-Do list app using React Context API for managing tasks with real-time updates.`,
    techstack: "React.js , Tailwind CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/Context-API-Projects",
  },
  {
    title: "Digital Clock",
    image: projectImage6,
    description: `Created a digital clock using HTML, CSS, and JavaScript to display real-time time with dynamic updates every second.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Shuaib0111/Basic-Front-End-Projects/tree/main/Digital%20Clock",
  },
];

// Contact Details
export const contactDetails = {
  email: "mohdshuaib77689@gmail.com",
  phone: "+91 9260967254",
};
