import React, { useState, useEffect } from 'react';

function JobOffersPage() {
  const [jobOffers, setJobOffers] = useState([
    { id: 1, title: 'Offer 1' },
    { id: 2, title: 'Offer 2' },
    // Add more template offers here
  ]);

  useEffect(() => {
    // Fetch the list of job offers from the backend and set them in the state (in a real application)
  }, []);

  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">List of Job Offers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobOffers.map((offer, index) => (
            <tr key={offer.id}>
              <td>{offer.title}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(offer.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobOffersPage;

