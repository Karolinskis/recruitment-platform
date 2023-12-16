"use client";
import React, { useState } from 'react';

// Define the worker interface for TypeScript
interface Worker {
  id: number;
  name: string;
  available: boolean;
}

function CheckWorkerAvailability() {
  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, name: 'Worker A', available: true },
    { id: 2, name: 'Worker B', available: false },
    // ... other workers
  ]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-gray-800 text-2xl font-bold mb-4 text-center">Worker Availability</h1>
        <div className="overflow-x-auto mt-6">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                <th className="px-4 py-2 bg-gray-200">Name</th>
                <th className="px-4 py-2 bg-gray-200">Availability</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {workers.map(worker => (
                <tr className="hover:bg-gray-100 border-b border-gray-200" key={worker.id}>
                  <td className="px-4 py-4">{worker.name}</td>
                  <td className="px-4 py-4">{worker.available ? 'Available' : 'Not Available'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CheckWorkerAvailability;

