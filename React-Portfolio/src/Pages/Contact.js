import React, { useEffect } from "react";
import { contactDetails } from "../Details";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;

  useEffect(() => {
    gsap.from("h1", {
      opacity: 0,
      duration: 2,
      delay: 1,
    });
    gsap.from(".email", {
      y: "-40%",
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(".phone", {
      y: "40%",
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);

  return (
    <main className="relative container mx-auto max-width section px-4 sm:px-8 py-6">
      {/* Main Heading */}
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mb-4">
        For any queries, please drop a mail
      </h1>

      {/* Email Section */}
      <h3 className="email text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gradient font-medium sm:font-semibold mb-2">
        <a href={`mailto:${email}`} className="break-words">
          {email}
        </a>
      </h3>

      {/* Separator */}
      <span className="text-center text-content text-sm sm:text-base font-light block mb-2">
        or
      </span>

      {/* Phone Section */}
      <h3 className="phone text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gradient font-medium sm:font-semibold">
        <a href={`tel:${phone}`} className="break-words">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
