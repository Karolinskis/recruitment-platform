"use client";
import React, { useEffect, useState } from 'react';

interface Worker {
  id: number;
  name: string;
  busyDates: { start: string; end: string | null }[];
}

function CheckWorkerAvailability() {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      try {
        const response = await fetch('/api/employer/CheckWorkerAvailability');
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-gray-800 text-2xl font-bold mb-4 text-center">Darbuotojų užimtumas</h1>
        <div className="overflow-x-auto mt-6">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                <th className="px-4 py-2 bg-gray-200">Vardas</th>
                <th className="px-4 py-2 bg-gray-200">Užimtumas</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {workers.map(worker => (
                <tr className="hover:bg-gray-100 border-b border-gray-200" key={worker.id}>
                  <td className="px-4 py-4">{worker.name}</td>
                  <td className="px-4 py-4">
                    {worker.busyDates.length === 0 ? 
                      'Laisvas' : 
                      worker.busyDates.map((date, index) => (
                        <div key={index}>
                          {date.start} to {date.end || 'Indefinite'}
                        </div>
                      ))
                    }
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

export default CheckWorkerAvailability;

