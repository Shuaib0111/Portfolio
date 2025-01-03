import React, { useEffect } from "react";
import { contactDetails } from "../Details";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;
  useEffect(()=>{
    gsap.from("h1",{
      opacity: 0,
      duration: 2,
      delay: 1
    });
    gsap.from(".email",{
      y: "-40%",
      opacity: 0,
      duration: 1,
      delay: 0.5
    });
    gsap.from(".phone",{
      y: "40%",
      opacity: 0,
      duration: 1,
      delay: 1
    });
  },[])
  return (
    <main className="relative bottom-20 container mx-auto max-width section">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any queries please drop a mail
      </h1>
      <h3 className="email text-center text-2xl md:text-3xl lg:text-3xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="phone text-center text-2xl md:text-3xl lg:text-3xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
