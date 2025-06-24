import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import gsap from "gsap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;

  const toggleClass = () => setIsOpen(!isOpen);

  useEffect(() => {
    gsap.from(".logo", {
      opacity: 0,
      duration: 2,
      delay: 1,
    });
  }, []);

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center py-2 md:py-8">
        <NavLink to="/">
          <img className="w-18 h-24 logo" src={logos.logogradient} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-black dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`
          md:flex md:items-center md:space-x-5 md:mr-10
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-[500px] py-4' : 'max-h-0'}
          md:max-h-full md:py-0
        `}
      >
        {/* Links */}
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto text-center dark:text-light-content font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/technologies", label: "Technologies" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to} className="text-xl py-2 md:py-0 relative group">
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent font-semibold border-b-2 border-gray-600 dark:border-gray-500"
                    : "text-black dark:text-white transition duration-200 hover:bg-gradient-to-r hover:from-black hover:to-gray-700 hover:bg-clip-text hover:text-transparent"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="flex justify-center md:justify-start md:items-center my-5 md:my-0 md:space-x-5 md:ml-5 gap-4 md:gap-1">
          {/* LinkedIn */}
          <li className="relative group">
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <svg
                className="fill-black dark:fill-white transition duration-300 group-hover:shadow-md group-hover:shadow-gray-700 hover:scale-110 rounded-full"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0.6C7.05 0.6 0.6 7.05 0.6 15C0.6 22.95 7.05 29.4 15 29.4C22.95 29.4 29.4 22.95 29.4 15C29.4 7.05 22.95 0.6 15 0.6ZM11.475 20.9685H8.559V11.5845H11.475V20.9685ZM10 10.4325C9.078 10.4325 8.4825 9.78 8.4825 8.973C8.4825 8.15 9.096 7.5165 10.0365 7.5165C10.977 7.5165 11.553 8.15 11.571 8.973C11.571 9.78 10.977 10.4325 10 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
          </li>

          {/* GitHub */}
          <li className="relative group">
            <a href={github} target="_blank" rel="noreferrer noopener">
              <svg
                className="fill-black dark:fill-white transition duration-300 group-hover:shadow-md group-hover:shadow-gray-700 hover:scale-110 rounded-full"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.713 0 0 6.713 0 15c0 6.638 4.294 12.244 10.256 14.231.75.131 1.031-.319 1.031-.712 0-.356-.019-1.537-.019-2.793-3.769.694-4.744-0.918-5.044-1.762-.169-.431-.9-1.762-1.537-2.118-.525-.281-1.275-.975-.019-.994 1.181-.019 2.025 1.088 2.306 1.537 1.35 2.269 3.506 1.631 4.368 1.238.131-0.975.525-1.631.956-2.006-3.338-.375-6.825-1.668-6.825-7.406 0-1.631.581-2.981 1.537-4.031-.15-.375-.675-1.912.15-3.975 0 0 1.256-.394 4.125 1.537 1.2-.337 2.475-.506 3.75-.506s2.55.169 3.75.506c2.869-1.931 4.125-1.537 4.125-1.537.825 2.063.3 3.6.15 3.975.956 1.05 1.537 2.4 1.537 4.031 0 5.737-3.487 7.031-6.825 7.406.544.469 1.012 1.369 1.012 2.775 0 2.006-.019 3.619-.019 4.125 0 .394.281.844 1.031.712C25.706 27.243 30 21.637 30 15c0-8.287-6.713-15-15-15z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
