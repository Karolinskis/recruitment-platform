"use client"
import React, { useEffect } from 'react';
import Link from "next/link";

const OffendingJobSeekerPosts = () => {
  const [offendingJobSeekerPosts, setOffendingJobSeekerPosts] = React.useState([]);

  useEffect(() => {
    fetch("/api/posts/job-seeker/offending")
      .then(res => res.json())
      .then(data => setOffendingJobSeekerPosts(data))
      .catch(err => console.log(err));
  }, []);



  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Nekorektiški darbuotojų skelbimai</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: '0.9674rem'}}>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>ID</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Pavadinimas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Aprašymas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Valandinis atlyginimas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Validuota</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Veiksmai</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {offendingJobSeekerPosts.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">{item.id_Skelbimo_anketa}</td>
                  <td className="px-4 py-4">{item.pavadinimas}</td>
                  <td className="px-4 py-4">{item.aprasymas}</td>
                  <td className="px-4 py-4">{item.valandinis_atlyginimas}</td>
                  <td className="px-4 py-4">{item.validuota ? "Taip" : "Ne"}</td>
                  <td className="px-4 py-4">
                    <Link href={`/admin/offending-content/job-seeker-posts/${item.id_Skelbimo_anketa}`}>
                      <p className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">Validuoti</p>
                    </Link>
                    <Link href={`/admin/offending-content/job-seeker-posts/${item.id_Skelbimo_anketa}`}>
                      <p className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block">Ištrinti</p>
                    </Link>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffendingJobSeekerPosts;