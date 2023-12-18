"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'

interface RecruiterPost {
    id_Darbo_skelbimas: string;
    pavadinimas: string;
    aprasymas: string;
    data: string;
    trukme: string;
    atlyginimas: string;
  }

const editPostPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [recruiterPosts, setRecruiterPosts] = React.useState<RecruiterPost>();
  const [error, setError] = React.useState<string | null>();
  const [successMessage, setSuccessMessage] = React.useState<string | null>();

  useEffect(() => {
    fetch(`/api/posts/recruiter/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          throw new Error(`Nerastas skelbimas su ID:${id}`);
        }
        setRecruiterPosts(data);
      })
      .catch(err => setError(err.message));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecruiterPosts({
      ...recruiterPosts,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(recruiterPosts);
    fetch(`/api/posts/recruiter/${id}`, {
      method: 'PUT',
      body: JSON.stringify(recruiterPosts),
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
        <h1 className="text-3xl font-bold mb-4 text-center">Redaguoti skelbimą</h1>
        {successMessage && 
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          <span className="block sm:inline"> {successMessage}</span>
        </div>
        }
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pavadinimas">
                Pavadinimas:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="name" 
                name="pavadinimas" 
                value={recruiterPosts?.pavadinimas} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aprasymas">
                Aprašymas:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="name" 
                name="aprasymas" 
                value={recruiterPosts?.aprasymas} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="atlyginimas">
                Atlyginimas:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="number" 
                name="atlyginimas" 
                value={recruiterPosts?.atlyginimas} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="data">
                Data:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="date" 
                name="data" 
                value={formatDate(recruiterPosts?.data)} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="trukme">
                Trukmė:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="date" 
                name="trukme" 
                value={formatDate(recruiterPosts?.trukme)} 
                onChange={handleChange} 
              />
            </div>
            
          </div>
          
        </div>
        <div className="flex items-center justify-between">
          <input 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            
            type="submit" 
            value="Keisti" 
          />
        </div>
      </form>
    </div>
  );
}

export default editPostPage
