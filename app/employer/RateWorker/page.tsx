"use client";
import React, { useState } from 'react';

// Define the Worker type for TypeScript
interface Worker {
  id: number;
  name: string;
  rating: number;
}

function WorkerRatings() {
  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, name: 'Worker A', rating: 3 },
    { id: 2, name: 'Worker B', rating: 4 },
    // ...other workers
  ]);

  const handleRatingChange = (id: number, newRating: number) => {
    setWorkers(workers.map(worker =>
      worker.id === id ? { ...worker, rating: newRating } : worker
    ));
    // TODO: Implement the logic to submit this change to the backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Rate Your Workers</h1>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Rating
                </th>
                <th scope="col" className="py-3 px-6">
                  Submit Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {workers.map(worker => (
                <tr key={worker.id} className="bg-white border-b">
                  <td className="py-4 px-6">{worker.name}</td>
                  <td className="py-4 px-6">
                    <select
                      value={worker.rating}
                      onChange={(e) => handleRatingChange(worker.id, parseInt(e.target.value))}
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
                      onClick={() => alert(`Rating for ${worker.name} submitted!`)}
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Submit Rating
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

export default WorkerRatings;

