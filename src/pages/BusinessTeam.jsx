import React from "react";

function BusinessTeam() {
  return (
    <div className="h-screen md:h-[500px] w-full flex flex-col lg:flex-row justify-center items-center text-white bg-indigo-500">
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
        className=" px-20 m-5 w-full flex flex-col   space-y-3"
      >
        <h1 className="text-4xl font-bold">Business Model</h1>
        <p className="font-bold">✅ SaaS subscription for hospitals</p>
        <p className="font-bold">
          ✅ One-time deployment and customization fee
        </p>
        <p className="font-bold">
          ✅ Penetration testing and compliance audits
        </p>
        <p className="font-bold">
          ✅ Potential expansion to pharmacy and lab systems
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="px-20 m-5 w-full flex flex-col  space-y-3"
      >
        <h1 className="text-4xl font-bold">Team</h1>
        <p className="font-bold">
          ✅ Godwin Abimbola - Founder & Strategy Lead
        </p>
        <p className="font-bold">
          ✅ Backend Devs, AI Engineer, Product Designer, Compliance Advisor
        </p>
        <p className="font-bold">
          ✅ Diverse, impact-driven, locally based team with global vision
        </p>
      </div>
    </div>
  );
}

export default BusinessTeam;
