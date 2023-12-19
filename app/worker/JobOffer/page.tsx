'use client'

// Import necessary dependencies
import React, { useState } from 'react';

// Define the DarboPasiulymas type for TypeScript
interface DarboPasiulymas {
  pavadinimas: string;
  data: string; // Change to the appropriate date type if needed
  aprasymas: string;
  priimtas: boolean;
}

const DarboPasiulymasForm: React.FC = () => {
  const [darboPasiulymas, setDarboPasiulymas] = useState<DarboPasiulymas>({
    pavadinimas: '',
    data: '',
    aprasymas: '',
    priimtas: false,
  });
  const [submittedDarboPasiulymas, setSubmittedDarboPasiulymas] = useState<DarboPasiulymas | null>(null);

  const handleAccept = () => {
    // TODO: Implement logic for accepting the darboPasiulymas
    console.log('DarboPasiulymas accepted:', darboPasiulymas);
    setSubmittedDarboPasiulymas({ ...darboPasiulymas, priimtas: true });
  };

  const handleReject = () => {
    // TODO: Implement logic for rejecting the darboPasiulymas
    console.log('DarboPasiulymas rejected:', darboPasiulymas);
    setSubmittedDarboPasiulymas({ ...darboPasiulymas, priimtas: false });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Darbo Pasiūlymo Peržiūra</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="pavadinimas" className="block text-gray-700 text-sm font-bold mb-2">
              Pavadinimas
            </label>
            <p>{darboPasiulymas.pavadinimas}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 text-sm font-bold mb-2">
              Data
            </label>
            <p>{darboPasiulymas.data}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="aprasymas" className="block text-gray-700 text-sm font-bold mb-2">
              Aprašymas
            </label>
            <p>{darboPasiulymas.aprasymas}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="priimtas" className="block text-gray-700 text-sm font-bold mb-2">
              Priimtas
            </label>
            <p>{darboPasiulymas.priimtas ? 'Taip' : 'Ne'}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleAccept}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Priimti
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Atmesti
            </button>
          </div>
        </form>

        {submittedDarboPasiulymas && (
          <div className="mt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Peržiūrėti darbo pasiūlymą</h2>
            <p>
              Pavadinimas: {submittedDarboPasiulymas.pavadinimas}, Data: {submittedDarboPasiulymas.data}, Aprašymas: {submittedDarboPasiulymas.aprasymas}, Priimtas: {submittedDarboPasiulymas.priimtas ? 'Taip' : 'Ne'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DarboPasiulymasForm;
