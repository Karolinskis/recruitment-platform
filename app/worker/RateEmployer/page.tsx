"use client";
import React, { useState } from 'react';

// Define the Worker type for TypeScript
interface Employer {
  id: number;
  name: string;
  rating: number;
}

function EmployerRatings() {
  const [employers, setEmployers] = useState<Employer[]>([
    { id: 1, name: 'Darbdavys A', rating: 3 },
    { id: 2, name: 'Darbdavys B', rating: 4 },
    // ...other workers
  ]);

  const handleRatingChange = (id: number, newRating: number) => {
    setEmployers(employers.map(employer =>
      employer.id === id ? { ...employer, rating: newRating } : employer
    ));
    // TODO: Implement the logic to submit this change to the backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Darbdavių vertinimas</h1>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Vardas
                </th>
                <th scope="col" className="py-3 px-6">
                  Įvertinimas
                </th>
                <th scope="col" className="py-3 px-6">
                  Pateikti įvertinimą
                </th>
              </tr>
            </thead>
            <tbody>
              {employers.map(employer => (
                <tr key={employer.id} className="bg-white border-b">
                  <td className="py-4 px-6">{employer.name}</td>
                  <td className="py-4 px-6">
                    <select
                      value={employer.rating}
                      onChange={(e) => handleRatingChange(employer.id, parseInt(e.target.value))}
                      className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => alert(`Rating for ${employer.name} submitted!`)}
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Pateikti įvertinimą
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

export default EmployerRatings;

