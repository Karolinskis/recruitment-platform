"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";

interface JobSeekerPosts {
  id_Skelbimo_anketa: string;
  pavadinimas: string;
  aprasymas: string;
  valandinis_atlyginimas: string;
  validuota: boolean;
}

const JobSeekerPosts = () => {
  const [jobSeekerPosts, setjobSeekerPosts] = React.useState<JobSeekerPosts[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

const removePost = (id: string) => {
  fetch(`/api/posts/job-seeker/${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP Klaida! Statusas: ${res.status}`);
    }
    setjobSeekerPosts(jobSeekerPosts.filter(post => post.id_Skelbimo_anketa !== id));
  })
  .catch(err => console.log(err));
};



  useEffect(() => {
    fetch("/api/posts/job-seeker")
      .then(res => res.json())
      .then(data => setjobSeekerPosts(data))
      .catch(err => console.log(err));
  }, []);


  jobSeekerPosts.sort((a, b) => b.valandinis_atlyginimas - a.valandinis_atlyginimas);
  
  const topElements = jobSeekerPosts.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Geriausi darbuotojų skelbimai</h1>
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
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Valandinis atlyginimas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>validuota</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Veiksmai</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {topElements.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">{item.id_Skelbimo_anketa}</td>
                  <td className="px-4 py-4">{item.pavadinimas}</td>
                  <td className="px-4 py-4">{item.aprasymas}</td>
                  <td className="px-4 py-4">{item.valandinis_atlyginimas}</td>
                  <td className="px-4 py-4">{item.validuota ? "Taip" : "Ne"}</td>
                  <td className="px-4 py-4">
                    {/* TODO: THIS NEEDS CHANGING */}
                    <Link href={`/admin/posts/job-seeker/edit?id=${item.id_Skelbimo_anketa}`}>
                      <p className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">Redaguoti</p>
                    </Link>
                    <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block" onClick={() => removePost(item.id_Skelbimo_anketa)}>Ištrinti</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobSeekerPosts;