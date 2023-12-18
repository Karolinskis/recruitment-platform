"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'

interface post {
    id_Skelbimo_anketa: number;
    pavadinimas: string;
    aprasymas: string;
    valandinis_atlyginimas: number;
    validuota: boolean;
  }

const JobSeekerPostForm = () => {

    const [formData, setFormData] = React.useState<post>();
    const [error, setError] = React.useState<string | null>();
    const [successMessage, setSuccessMessage] = React.useState<string | null>();
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('/api/posts/job-seeker/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP Klaida! Statusas: ${response.status}`);
      }

      const result = await response.json();
      //console.log('New JobSeekerPost:', result.atsiliepimai);
      // Handle success, e.g., redirect or update state
    } catch (error) {
      console.error('Error adding JobSeekerPost:', error);
      // Handle errors, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        ID:
        <input type="number" name="id_Skelbimo_anketa" onChange={handleInputChange} />
        </label>
        <br />
        <label>
        Pavadinimas:
        <input type="text" name="pavadinimas" onChange={handleInputChange} />
        </label>
        <br />
        <label>
        Aprasymas:
        <input type="text" name="aprasymas" onChange={handleInputChange} />
        </label>
        <br />
        <label>
        Valandinis Atlyginimas:
        <input type="number" name="valandinis_atlyginimas" onChange={handleInputChange} />
        </label>
        <br />
        {/* Add input fields for the remaining parameters */}
        <button type="submit">Submit</button>
    </form>
  );
};

export default JobSeekerPostForm;