'use client'
import React, { useState } from 'react';

interface User {
  vardas?: string;
  pavarde?: string;
  lytis?: string;
  miestas?: string;
  el_pastas?: string;
  tel_numeris?: string;
  gimimo_data?: string; // Change to the appropriate type for date input
  linkedin_url?: string;
  // Add more fields as needed
}

interface ProfileProps {
  user: User;
  editing: boolean;
  onSave: (updatedData: Partial<User>) => void;
  onCancel: () => void;
  onEdit: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, editing, onSave, onCancel, onEdit }) => {
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onSave(formData);
  };

  const handleChange = (field: keyof User, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {editing ? 'Redaguoti profilį' : 'Profilis'}
        </h1>
        <form>
          {Object.keys(user).map((field) => (
            <div key={field} className="mb-4">
              <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === 'gimimo_data' && editing ? (
                <input
                  type="date"
                  id={field}
                  value={formData[field as keyof User] || ''}
                  onChange={(e) => handleChange(field as keyof User, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              ) : editing ? (
                <input
                  type="text"
                  id={field}
                  value={formData[field as keyof User] || ''}
                  onChange={(e) => handleChange(field as keyof User, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              ) : (
                <p>{user[field as keyof User]}</p>
              )}
            </div>
          ))}
          {editing ? (
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Išsaugoti
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Atšaukti
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Redaguoti
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

// Usage
const HomePage = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState<User>({
    vardas: 'John',
    pavarde: '',
    lytis: '',
    miestas: '',
    el_pastas: '',
    tel_numeris: '',
    gimimo_data: '',
    linkedin_url: '',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = (updatedData: Partial<User>) => {
    // Check for empty fields
    const hasEmptyFields = Object.values(updatedData).some((value) => value === '');

    if (hasEmptyFields) {
      // Display an error message or take appropriate action
      alert('Užpildykite visus laukus');
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        ...updatedData,
      }));
      setEditing(false);
    }
  };

  return (
    <Profile
      user={user}
      editing={editing}
      onSave={handleSave}
      onCancel={() => setEditing(false)}
      onEdit={handleEditClick}
    />
  );
};

export default HomePage;
