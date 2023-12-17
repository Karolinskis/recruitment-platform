"use client";
import React, { useState } from 'react';

// Define the Freelancer interface for TypeScript
interface Freelancer {
  id: number;
  name: string;
  skills: string;
}

function HireFreelancer() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([
    { id: 1, name: 'Darbuotojas A', skills: 'WEB dev' },
    { id: 2, name: 'Darbuotojas B', skills: 'Grafinis dizainas' },
    // ... other freelancers
  ]);
  const [success, setSuccess] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState<Freelancer | null>(null);

  const offerHire = (freelancer: Freelancer) => {
    console.log(`Offer sent to ${freelancer.name}`);
    setSelectedFreelancer(freelancer);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Samdyti darbuotoją</h1>
        <div className="mb-4 overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Vardas
                </th>
                <th scope="col" className="py-3 px-6">
                  Sugebėjimai
                </th>
                <th scope="col" className="py-3 px-6">
                  Veiksmas
                </th>
              </tr>
            </thead>
            <tbody>
              {freelancers.map(freelancer => (
                <tr key={freelancer.id} className="bg-white border-b">
                  <td className="py-4 px-6">{freelancer.name}</td>
                  <td className="py-4 px-6">{freelancer.skills}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => offerHire(freelancer)}
                      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Samdyti
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {success && selectedFreelancer && (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
            You have successfully offered to hire {selectedFreelancer.name}!
          </div>
        )}
      </div>
    </div>
  );
}

export default HireFreelancer;

