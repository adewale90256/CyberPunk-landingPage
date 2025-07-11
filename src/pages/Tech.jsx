import React from "react";

function Tech() {
  return (
    <div className="h-screen md:h-[500px] w-full flex flex-col lg:flex-row justify-evenly items-center text-white bg-indigo-500">
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="w-[50%] h-[50%]"
      >
        <img src="/images/tech.jpg" alt="" className="h-full" />
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
        className=" flex flex-col justify-center space-y-3"
      >
        <h1 className="text-4xl font-bold">Our Technologies</h1>
        <p className="font-bold">
          ✅ Backend: Python Django/Flask, PostgreSQL MongoDB
        </p>
        <p className="font-bold">
          ✅ AI: Scikit-learn, TensorFlow Lite for anomaly detection
        </p>
        <p className="font-bold">
          ✅ Frontend: React / Tailwind dashboard for hospital us
        </p>
        <p className="font-bold">
          ✅ Deployment-ready prototype using synthetic data
        </p>
      </div>
    </div>
  );
}

export default Tech;
