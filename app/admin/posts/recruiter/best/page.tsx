"use client"
import React, { useEffect } from 'react';
import Link from "next/link";

interface RecruiterPost {
  id_Darbo_skelbimas: string;
  pavadinimas: string;
  aprasymas: string;
  data: string;
  trukme: string;
  atlyginimas: string;
}

const RecruiterPosts = () => {
  const [recruiterPosts, setRecruiterPosts] = React.useState<RecruiterPost[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const removePost = (id: string) => {
    fetch(`/api/posts/recruiter/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP Klaida! Statusas: ${res.status}`);
      }
      setRecruiterPosts(recruiterPosts.filter(post => post.id_Darbo_skelbimas !== id));
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    fetch("/api/posts/recruiter")
      .then(res => res.json())
      .then(data => setRecruiterPosts(data))
      .catch(err => console.log(err));
  }, []);

  recruiterPosts.sort((a, b) => b.atlyginimas - a.atlyginimas);
  
  const topElements = recruiterPosts.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Darbdavių skelbimai</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Pavadinimas..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: '0.9674rem'}}>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>ID</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Pavadinimas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Aprašymas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Data</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Trukmė</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Atlyginimas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Veiksmai</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {topElements.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">{item.id_Darbo_skelbimas}</td>
                  <td className="px-4 py-4">{item.pavadinimas}</td>
                  <td className="px-4 py-4">{item.aprasymas}</td>
                  <td className="px-4 py-4">{item.data}</td>
                  <td className="px-4 py-4">{item.trukme}</td>
                  <td className="px-4 py-4">{item.atlyginimas}</td>
                  <td className="px-4 py-4">
                    {/* TODO: THIS NEEDS CHANGING */}
                    <Link href={`/admin/posts/recruiter/edit?id=${item.id_Darbo_skelbimas}`}>
                      <p className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">Redaguoti</p>
                    </Link>
                    <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block" onClick={() => removePost(item.id_Darbo_skelbimas)}>Ištrinti</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterPosts;