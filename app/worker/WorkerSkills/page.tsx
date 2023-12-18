'use client'

import React, { useState } from 'react';

// Define the Igudziai type for TypeScript
interface Igudziai {
  pavadinimas: string;
  sertifikatas: string;
}

const IgudziaiForm: React.FC = () => {
  const [igudziai, setIgudziai] = useState<Igudziai>({
    pavadinimas: '',
    sertifikatas: '',
  });
  const [submittedIgudziai, setSubmittedIgudziai] = useState<Igudziai | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIgudziai((prevIgudziai) => ({
      ...prevIgudziai,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation example: Check if Pavadinimas and Sertifikatas contain only letters and spaces
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(igudziai.pavadinimas) || !regex.test(igudziai.sertifikatas)) {
      setValidationError('Pavadinimas ir Sertifikatas turi būti sudaryti tik iš raidžių ir tarpų.');
      return;
    }

    // TODO: Implement the logic to submit the igudziai data to the backend
    console.log('Igudziai submitted:', igudziai);
    setSubmittedIgudziai({ ...igudziai });
    setValidationError(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Įgūdžių įvedimas</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="pavadinimas" className="block text-gray-700 text-sm font-bold mb-2">
              Pavadinimas
            </label>
            <input
              type="text"
              id="pavadinimas"
              name="pavadinimas"
              value={igudziai.pavadinimas}
              onChange={handleInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sertifikatas" className="block text-gray-700 text-sm font-bold mb-2">
              Sertifikatas
            </label>
            <input
              type="text"
              id="sertifikatas"
              name="sertifikatas"
              value={igudziai.sertifikatas}
              onChange={handleInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {validationError && (
            <p className="text-red-500 text-sm mb-4">{validationError}</p>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Išsaugoti
            </button>
          </div>
        </form>

        {submittedIgudziai && (
          <div className="mt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Įvesti igūdžiai</h2>
            <p>
              Pavadinimas: {submittedIgudziai.pavadinimas}, Sertifikatas: {submittedIgudziai.sertifikatas}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IgudziaiForm;
