import React from "react";

function Solution() {
  return (
    <div className="h-screen md:h-[500px] w-full flex flex-col lg:flex-row justify-evenly items-center text-white bg-indigo-500">
      <div className="w-[50%] h-[50%]">
        <img
          data-aos="fade-bottom"
          src="/images/solution.jpg"
          alt=""
          className="h-[350px] w-full"
        />
      </div>

      <div data-aos="fade-up" className=" px-5 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Our Solution</h1>
        <p className="font-bold">
          Cyberpunk MedTech is a cybersecurity system designed for African
          hospital
        </p>
        <p className="font-bold">Core features:</p>
        <p>__ Role-based access control</p>
        <p>__ AES encryption for patient data</p>
        <p>__ AI anomaly detection engine</p>
        <p>__ Real-time access logs and alerts</p>
      </div>
    </div>
  );
}

export default Solution;
