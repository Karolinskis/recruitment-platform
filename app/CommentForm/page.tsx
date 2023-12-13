"use client";
import { atsiliepimai } from "@prisma/client";
import axios from "axios";

const COMMENT_FORM_ULR = "/api/FeedbackForEmployer";

export default function CommentForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    // Todo

    // Pakeisti hardcode

    const atsiliepimas = {
      aprasymas: String(event.target.description.value),
      tipas: Boolean(event.target.type.value),
      fk_Naudotojasid_Naudotojas: 1, /// Sender
      fk_darbuotojas: 1, // Receiver
    };

    const response = await axios.post(
      COMMENT_FORM_ULR,
      JSON.stringify(atsiliepimas),
      { headers: { "Content-type": "application/json" } }
    );

    if (response.status !== 200) {
      alert("Kazkas nepavyko!");
    }
  }

  return (
    <div>
      <form
        className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="Atsiliepimas"
            className="block text-gray-700 font-semibold mb-2"
          >
            Atsiliepimas
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Atsiliepimas"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tipas"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tipas
          </label>
          <select
            id="type"
            name="type"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
