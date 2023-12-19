'use client'



export default function login() {
  return (
    <div className="w-1/2 mx-auto my-32 bg-purple-200 p-12">
      <h1 className="text-3xl mb-10">Prisijungimas</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-purple-700 mb-1"
          >
            El.paštas
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
            placeholder="Įveskitę vardą"
            required
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
            placeholder="Įveskitę slaptažodį"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition duration-300"
        >
          Prisijungti
        </button>
        <div className="mt-4 text-center">
        Naujas vartotojas?{' '}
        <a href="/registration" className="text-purple-700 font-semibold">
          Registruokitės čia
        </a>
      </div>
      </form>
    </div>
  );
}
