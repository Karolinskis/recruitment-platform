"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    signIn("credentials", { email, password, callbackUrl: "/api/test" });
  };

  return (
    <div className="w-1/2 mx-auto my-32 bg-purple-200 p-12">
      <h1 className="text-3xl mb-10">Prisijungimas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-purple-700 mb-1"
          >
            El. paštas
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
            placeholder="Enter your username"
            required
            onChange={handleEmail}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-purple-700 mb-1"
          >
            Slaptažodis
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
            placeholder="Enter your password"
            required
            onChange={handlePassword}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
