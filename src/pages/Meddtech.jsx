import { useEffect, useState } from "react";

function Meddtech() {
  return (
    <div data-aos="fade-in" className="mt-5 px-5 ">
      <div className="flex justify-center items-center">
        <div data-aos="fade-left" className="w-full ">
          <h2 className="bg-blue-900 text-white w-fit p-2 font-bold rounded shadow-lg transition-all duration-300 hover:scale-105">
            Cyber<span className="text-blue-500">Punk</span> MedTech
          </h2>
          <p className="lg:text-[30px] text-[20px]">
            Securing the Future of Healthcare in Africa <br /> AI-powered
            Cybersecurity for Hospital Systems
          </p>
        </div>
        <div data-aos="fade-right" className="w-full">
          <img
            src="/images/human-looking-dna.jpg"
            alt=""
            className="w-[100%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Meddtech;
