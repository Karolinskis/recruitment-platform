import React from "react";
import JobOffer from "../../components/JobOffer";

const JobOffersPage = () => {
  const handleAccept = () => {
    // Logic for accepting the job offer
    console.log("Job offer accepted!");
  };

  const handleReject = () => {
    // Logic for rejecting the job offer
    console.log("Job offer rejected!");
  };

  return (
    <div>
      <h2>Darbo pasiūlymai</h2>
      <JobOffer
        title="Software Developer"
        date="2023-12-01"
        description="Exciting opportunity for a software developer!"
        onAccept={handleAccept}
        onReject={handleReject}
      />
      {/* Add more JobOffer components as needed */}
    </div>
  );
};

export default JobOffersPage;
