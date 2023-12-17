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

const blockUserPage = () => {
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

        // Get the selected block length in days
        const blockLengthInDays = e.currentTarget.elements['block-length'].value;

        // Calculate the block end date
        const blockEndTime = new Date();
        blockEndTime.setDate(blockEndTime.getDate() + parseInt(blockLengthInDays));

        const updatedUser = {
            ...user,
            blokavimo_pabaiga: blockEndTime.toISOString()
        };

        fetch(`/api/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            setSuccessMessage('Vartotojo blokavimo laikas sėkmingai pakeistas!');
        })
        .catch(err => setError(err.message));
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
                <h1 className="text-3xl font-bold mb-4 text-center">Blokuoti vartotoją</h1>
                {successMessage &&
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                        <span className="block sm:inline"> {successMessage}</span>
                    </div>
                }
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vardas">
                            Vardas
                        </label>
                        <p className="p-2 bg-gray-200 rounded" id="vardas">{user?.vardas}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pavarde">
                            Pavardė
                        </label>
                        <p className="p-2 bg-gray-200 rounded" id="pavarde">{user?.pavarde}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="el_pastas">
                            El. paštas
                        </label>
                        <p className="p-2 bg-gray-200 rounded" id="el_pastas">{user?.el_pastas}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="block-length">
                            Blokavimo trukmė
                        </label>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="block-length"
                            value={user?.blokavimo_pabaiga}
                        >
                            <option value="1">1 diena</option>
                            <option value="3">3 dienos</option>
                            <option value="7">1 savaitė</option>
                            <option value="30">1 mėnuo</option>
                            <option value="365">1 metai</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Blokuoti
                </button>
            </form>
        </div>
    );

}

export default blockUserPage;