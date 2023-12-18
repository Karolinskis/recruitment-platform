"use client";
// /pages/EditJobOfferPage.tsx
import React, { useState, useEffect } from 'react';

interface JobOffer {
  id: number;
  pavadinimas: string;
  aprasymas?: string | null;
}

function JobOffersPage() {
    const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    async function fetchJobOffers() {
      try {
        const response = await fetch(`/api/employer/${1}/EditJobOffer/`);
        if (!response.ok) {
          throw new Error('Problem fetching job offers');
        }
        const data = await response.json();
        setJobOffers(data);
      } catch (error) {
        console.error('Error fetching job offers:', error);
      }
    }
    
    fetchJobOffers();
  }, []);

    const handleEdit = async (offerId:number) => {
  // Find the offer to edit
  const offerToEdit = jobOffers.find((offer) => offer.id === offerId);
  if (!offerToEdit) return;

  // Prompt for new values
  const newTitle = prompt('Enter new title:', offerToEdit.pavadinimas ?? '') ?? '';
  const newDescription = prompt('Enter new description:', offerToEdit.aprasymas ?? '') ?? '';

  // Update offer via API
  try {
    const response = await fetch(`/api/employer/${offerId}/EditJobOffer/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pavadinimas: newTitle,
        aprasymas: newDescription,
      }),
    });

    if (!response.ok) {
      throw new Error('Problem updating job offer');
    }

    // Update local state
    setJobOffers(currentOffers =>
      currentOffers.map((offer) =>
        offer.id === offerId ? { ...offer, pavadinimas: newTitle, aprasymas: newDescription } : offer
      )
    );
  } catch (error) {
    console.error('Error updating job offer:', error);
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-gray-800 text-2xl font-bold mb-4 text-center">Darbo pasiūlymai</h1>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Pavadinimas
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Aprašymas
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Veiksmai
                </th>
              </tr>
            </thead>
            <tbody>
              {jobOffers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {offer.pavadinimas}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {offer.aprasymas || ''}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => handleEdit(offer.id)}
                      className="text-white py-1 px-3 rounded bg-blue-500 hover:bg-blue-600 focus:outline-none"
                    >
                      Koreguoti
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

