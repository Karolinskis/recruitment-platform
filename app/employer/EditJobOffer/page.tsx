"use client";
import React, { useState, useEffect } from 'react';

// Define the interface for Job Offers
interface JobOffer {
  id: number;
  title: string;
}

function JobOffersPage() {
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([
    { id: 1, title: 'Offer 1' },
    { id: 2, title: 'Offer 2' },
    // Add more template offers here
  ]);

  useEffect(() => {
    // Fetch the list of job offers from the backend and set them in the state (in a real application)
  }, []);

  // Placeholder for edit handler
  const handleEdit = (id: number) => {
    console.log('Edit offer with id:', id);
    // Implement the edit logic or redirect to edit page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-gray-800 text-2xl font-bold mb-4 text-center">List of Job Offers</h1>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {jobOffers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {offer.title}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {/* Since we are not really implementing the edit functionality,
                        this button is disabled to indicate it's not functional yet. */}
                    <button
                      onClick={() => handleEdit(offer.id)}
                      className="text-white py-1 px-3 rounded bg-blue-500 hover:bg-blue-600 focus:outline-none"
                      disabled
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobOffersPage;

