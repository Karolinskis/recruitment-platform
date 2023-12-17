"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'

interface User {
  id_Naudotojas: string;
  role: string;
  vardas: string;
  pavarde: string;
  lytis: string;
  miestas: string;
  el_pastas: string;
  tel_numeris: string;
  gimimo_data: string;
  linkedin_url: string;
  paskyros_sukurimo_data: string;
  patvirtintas: boolean;
  blokavimo_pabaiga: string;
}

const editUserPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [user, setUser] = React.useState<User>();
  const [error, setError] = React.useState<string | null>();
  const [successMessage, setSuccessMessage] = React.useState<string | null>();

  useEffect(() => {
    fetch(`/api/user/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          throw new Error(`Nerastas vartotojas su ID:${id}`);
        }
        setUser(data);
      })
      .catch(err => setError(err.message));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    fetch(`/api/user/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      setSuccessMessage('Duomenys sėkmingai pakeisti!');
    })
    .catch(err => {
      console.log(err);
      setSuccessMessage(null);
    });
  };

  const formatDate = (date: string) => {
    const dateObject = new Date(date);
    return `${dateObject.getFullYear()}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${('0' + dateObject.getDate()).slice(-2)}`;
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Klaida!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center">Redaguoti vartotoją</h1>
        {successMessage && 
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          <span className="block sm:inline"> {successMessage}</span>
        </div>
        }
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vardas">
                Vardas:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="name" 
                name="vardas" 
                value={user?.vardas} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pavarde">
                Pavardė:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="surname" 
                name="pavarde" 
                value={user?.pavarde} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lytis">
                Lytis:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="gender" 
                name="lytis" 
                value={user?.lytis} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="el_pastas">
                El. Paštas:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="email" 
                name="el_pastas" 
                value={user?.el_pastas} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel_numeris">
                Tel. Numeris:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="tel" 
                name="tel_numeris" 
                value={user?.tel_numeris} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gimimo_data">
                Gimimo data:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date" 
                name="gimimo_data" 
                value={formatDate(user?.gimimo_data)} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin_url">
                LinkedIn:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="url" 
                name="linkedin_url" 
                value={user?.linkedin_url} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <span className="block text-gray-700 text-sm font-bold mb-2">Patvirtintas:</span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    className="form-radio text-blue-500 h-5 w-5" 
                    name="patvirtintas" 
                    value="true" 
                    checked={user?.patvirtintas === true} 
                    onChange={handleChange} 
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input 
                    type="radio" 
                    className="form-radio text-blue-500 h-5 w-5" 
                    name="patvirtintas" 
                    value="false" 
                    checked={user?.patvirtintas === false} 
                    onChange={handleChange} 
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <input 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            disabled={!user}
            type="submit" 
            value="Keisti" 
          />
        </div>
      </form>
    </div>
  );
}

export default editUserPage
