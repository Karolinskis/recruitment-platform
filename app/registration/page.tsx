import React from 'react';
import Link from 'next/link';

export default function Registration() {
    return (
        <div className="w-1/2 mx-auto my-32 bg-green-200 p-12">
            <h1 className="text-3xl mb-10">Registracija</h1>
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="role"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Rolė
                    </label>
                    <select
                        id="role"
                        name="role"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        required
                    >
                        <option value="darbuotojas">Darbuotojas</option>
                        <option value="darbdavys">Darbdavys</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Vardas
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite vardą"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="secondName"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Pavardė
                    </label>
                    <input
                        type="text"
                        id="secondName"
                        name="secondName"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite pavardę"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="birthDate"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Gimimo data
                    </label>
                    <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="gender"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Lytis
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        required
                    >
                        <option value="male">Vyras</option>
                        <option value="female">Moteris</option>
                        <option value="other">Kitas</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Elektroninio pašto adresas
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite elektroninio pašto adresą"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Miestas
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite miestą"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Telefonas
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite telefono numerį"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="linkedinUrl"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite LinkedIn URL"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Slaptažodis
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Įveskite slaptažodį"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-semibold text-green-700 mb-1"
                    >
                        Patvirtinti slaptažodį
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
                        placeholder="Patvirtinkite slaptažodį"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition duration-300"
                >
                    Registruotis
                </button>
            </form>
            <p className="mt-4">
                Jau turite paskyrą?{' '}
                <Link href="/login">
                    <span className="text-green-600 hover:underline">Prisijungimas</span>
                </Link>
            </p>
        </div>
    );
}