import React from "react";

function Problem() {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="h-screen md:h-[500px] bg-cover text-white flex flex-col lg:flex-row justify-evenly items-center"
        style={{ backgroundImage: 'url("/images/prob.jpg")' }}
      >
        <div>
          <h1 className="text-4xl font-bold">The Problem</h1>
        </div>
        <div className="text-2xl  p-5 rounded shadow-lg">
          <p className="font-bold">
            African hospitals are rapidly digitizing patient data.
          </p>
          <p className="font-bold">Lack of security infrastructure leads to:</p>
          <p>__Ransomware attacks</p>
          <p>__Insider data breaches</p>
          <p>__Non-compliance with NDPR, HIPAA.</p>
          <p className="font-bold">
            Patients are at risk due to poor data protection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Problem;
