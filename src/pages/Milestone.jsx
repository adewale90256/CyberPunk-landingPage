import React from "react";

function Milestone() {
  return (
    <div>
      <div
        className="h-screen md:h-[500px] bg-cover text-white flex flex-col lg:flex-row justify-center items-center"
        style={{ backgroundImage: 'url("/images/milestone.jpg")' }}
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="text-2xl flex flex-col b p-5 rounded  m-5 "
        >
          <h1 className="text-4xl font-bold mb-4">Traction & Milestones</h1>
          <li>Internal prototype complete</li>
          <li>Dashboard with logs, user roles, and encrypted records live</li>
          <li>Engagement with compliance advisors for NDPR readiness</li>
          <li>Team assembled: AI, Backend, Design, Legal, Product</li>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="text-2xl flex flex-col b p-5 rounded  m-5 "
        >
          <h1 className="text-4xl font-bold mb-4">Market Opportunity</h1>
          <li>Over 30,000 hospitals and clinics in Africa</li>
          <li>Increasing regulation around data security</li>
          <li>Potential SaaS revenue: $200 - $2,000/hospital/month</li>
          <li>First-mover advantage in local AI-powered MedTech security</li>
        </div>
      </div>
    </div>
  );
}

export default Milestone;
