import React from "react";
import { Arrow } from "../assets/svgs/icons/arrow";

const Footer = () => {
  return (
    <div className="bg-black px-8 py-10 mt-8 flex w-full text-white">
      <section className="space-y-16 md:space-y-40 w-full">
        <div>
          <p className="text-xl sm:text-2xl mb-4">Let's create something amazing</p>
          <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Arrow />
            <p className="text-4xl sm:text-5xl md:text-6xl">hellotalhashahid.designs</p>
          </div>
        </div>
        <p className="flex text-2xl sm:text-3xl md:text-4xl font-medium justify-end">© T ~ S</p>
      </section>
    </div>
  );
};

export default Footer;
