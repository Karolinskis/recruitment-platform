'use client'


// LikedEmployersPage.tsx

import React, { useState, useEffect } from 'react';

interface YourEmployerType {
  id: number;
  name: string;
  // Add other fields as needed
}

const LikedEmployersPage: React.FC = () => {
  const [likedEmployers, setLikedEmployers] = useState<YourEmployerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const workerId = 1; // Replace with the actual worker ID

  useEffect(() => {
    const fetchLikedEmployers = async () => {
      try {
        const response = await fetch(`/api/likedEmployers?workerId=${workerId}`);
        const data: YourEmployerType[] = await response.json();

        setLikedEmployers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchLikedEmployers();
  }, [workerId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Pamėgti darbdaviai</h1>

        {loading && <p>Kraunama...</p>}

        {error && <p className="text-red-500">Error: {error.message}</p>}

        {likedEmployers.length > 0 && (
          <ul className="list-disc pl-4">
            {likedEmployers.map((employer) => (
              <li key={employer.id} className="mb-2">{employer.name}</li>
              // Display other information as needed
            ))}
          </ul>
        )}

        {likedEmployers.length === 0 && !loading && <p>Nerasta darbdavių</p>}
      </div>
    </div>
  );
};

export default LikedEmployersPage;
