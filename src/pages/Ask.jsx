import React from "react";

function Ask() {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="h-screen md:h-[500px] bg-cover text-white flex  items-center"
        style={{ backgroundImage: 'url("/images/ask.jpg")' }}
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="text-2xl flex flex-col b p-5 rounded  m-5"
        >
          <h1 className="text-4xl font-bold mb-4">Ask</h1>
          <p className="font-bold">Seeking $50,000 grant/funding for:</p>
          <p className="font-bold">
            Finalizing deployment in 3-5 hospitals pilot.
          </p>
          <p className="font-bold"> Certification and audit NDPR, HIPAA</p>
          <p className="font-bold">Scaling infrastructure and support.</p>
        </div>
      </div>
    </div>
  );
}

export default Ask;
