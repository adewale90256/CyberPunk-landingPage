import React from "react";

function Why() {
  return (
    <div>
      <div
        className="h-screen md:h-[500px] bg-cover text-white flex justify-end items-center"
        style={{ backgroundImage: 'url("/images/why.jpg")' }}
      >
        <div
          data-aos="fade-up"
          className="text-2xl flex flex-col b p-5 rounded shadow-lg m-5  max-w-md"
        >
          <h1 className="text-4xl font-bold mb-4">Why Now</h1>
          <p className="font-bold">
            Rise in ransomware and digital threats post-COVID
          </p>
          <p className="font-bold">
            Increased government and donor interest in health data protection.
          </p>
          <p className="font-bold">NDPR enforcement is growing in Nigeria.</p>
          <p className="font-bold">
            Hospitals need affordable, scalable protection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
