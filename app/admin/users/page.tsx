"use client"
import React, { useEffect } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
  id_Skelbimo_anketa: string;
}

const AllUsers = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    fetch("/api/user/all")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  const isBlocked = (blokavimo_pabaiga: string) => {
    const blockEndTime = new Date(blokavimo_pabaiga);
    const currentTime = new Date();
    return blockEndTime > currentTime;
  };

  const getFormattedDate = (date: string) => {
    const dateObject = new Date(date);
    return `${dateObject.getFullYear()}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${('0' + dateObject.getDate()).slice(-2)}`;
  };

  function exportData(item: any) {
    const json = JSON.stringify(item);
    const blob = new Blob([json], {type: 'application/json'});
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'userData.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const removeUser = (id: string) => {
    fetch(`/api/user/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP Klaida! Statusas: ${res.status}`);
      }
      setUsers(users.filter(user => user.id_Naudotojas !== id));
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Visi vartotojai</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontSize: '0.9674rem'}}>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>ID</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Rolė</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Vardas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Pavardė</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Lytis</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Miestas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>El. Paštas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Tel. Numeris</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Gimimo data</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>LinkedIn</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Sukūrimo data</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Patvirtinta</th>
              <th className='px-4 py-2' style={{backgroundColor: '#f8f8f8'}}>Užblokuotas</th>
              <th className="px-4 py-2" style={{backgroundColor: '#f8f8f8'}}>Veiksmai</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {users.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">{item.id_Naudotojas}</td>
                  <td className="px-4 py-4">{item.role}</td>
                  <td className="px-4 py-4">{item.vardas}</td>
                  <td className="px-4 py-4">{item.pavarde}</td>
                  <td className="px-4 py-4">{item.lytis}</td>
                  <td className="px-4 py-4">{item.miestas}</td>
                  <td className="px-4 py-4 flex justify-center items-center">
                    <a href={`mailto:${item.el_pastas}`} target="_blank" rel="noopener noreferrer">
                      {item.el_pastas}
                    </a>
                  </td>
                  <td className="px-4 py-4">{item.tel_numeris}</td>
                  <td className="px-4 py-4">{getFormattedDate(item.gimimo_data)}</td>
                  <td className="px-4 py-4 flex justify-center items-center">
                    <a href={item.linkedin_url} target='_blank' rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </td>
                  <td className="px-4 py-4">{getFormattedDate(item.paskyros_sukurimo_data)}</td>
                  <td className="px-4 py-4">{Boolean(item.patvirtintas) ? "Taip" : "Ne"}</td>
                  <td className="px-4 py-4">{Boolean(isBlocked(item.blokavimo_pabaiga)) ? "Taip" : "Ne"}</td>
                  <td className="px-4 py-4">
                    {/* TODO: THIS NEEDS CHANGING */}
                    <Link href={`/admin/users/edit?id=${item.id_Naudotojas}`}>
                      <p className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">Redaguoti</p>
                    </Link>
                    <Link href={`/admin/users/block?id=${item.id_Naudotojas}`}>
                      <p className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">Blokuoti</p>
                    </Link>
                    <p className="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-block" onClick={() => exportData(item)}>Eksportuoti</p>
                    <p className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block" onClick={() => removeUser(item.id_Naudotojas)}>Ištrinti</p>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;