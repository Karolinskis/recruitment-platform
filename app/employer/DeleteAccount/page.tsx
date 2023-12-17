"use client";
import { useState } from 'react';

const DeleteEmployerAccount: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClose = () => setShowConfirmation(false);
  const handleShow = () => setShowConfirmation(true);

  const deleteAccount = async () => {
    console.log('Account deletion initiated');
    handleClose();
    // Implement the logic to delete the account from the backend
    // Redirect or update UI after deletion
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        <h1 className="text-gray-800 text-xl font-bold mb-4 text-center">Trinti paskyrą</h1>
        <button
          onClick={handleShow}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 transition-colors focus:outline-none"
        >
          Trinti
        </button>

        {showConfirmation && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 border w-96 shadow-lg rounded-md bg-white">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Patvirtinti paskyros trynimą</h3>
              <p className="text-sm text-gray-500 mb-6">
                Ar tikrai norite ištrinti paskyrą? Šio veiksmo anuliuoti negalima.
              </p>
              <div className="flex justify-end">
                <button
                  id="cancel-btn"
                  className="bg-gray-200 text-gray-800 rounded px-4 py-2 hover:bg-gray-300 focus:outline-none mr-2"
                  onClick={handleClose}
                >
                  Atšaukti
                </button>
                <button
                  id="delete-btn"
                  className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700 focus:outline-none"
                  onClick={deleteAccount}
                >
                  Taip, ištrinti
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteEmployerAccount;

