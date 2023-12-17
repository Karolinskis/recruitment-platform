"use client"
import React, { useEffect } from 'react';
import Link from "next/link";

const Dashboard = () => {
    const [offendingUsers, setOffendingUsers] = React.useState([]);
    const [offendingRecruiterPosts, setOffendingRecruiterPosts] = React.useState([]);
    const [offendingJobSeekerPosts, setOffendingJobSeekerPosts] = React.useState([]);

    useEffect(() => {
        fetch("/api/user/offending")
            .then(res => res.json())
            .then(data => setOffendingUsers(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch("/api/posts/recruiter/offending")
            .then(res => res.json())
            .then(data => setOffendingRecruiterPosts(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch("/api/posts/job-seeker/offending")
            .then(res => res.json())
            .then(data => setOffendingJobSeekerPosts(data))
            .catch(err => console.log(err));
    }, []);

    const offendingUserProfilesCount = offendingUsers.length;
    const offendingRecruiterPostsCount = offendingRecruiterPosts.length;
    const offendingJobSeekerPostsCount = offendingJobSeekerPosts.length;
    const offendingContentCount = offendingUserProfilesCount + offendingRecruiterPostsCount + offendingJobSeekerPostsCount;

    const getCardColor = (count: number) => {
        if (count >= 10) return "bg-red-300";
        if (count >= 5) return "bg-yellow-200";
        return "bg-green-200";
    };

    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Administratoriaus skydelis</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-screen-md mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            <Link href="/admin/users">
              <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Visos paskyros</p>
            </Link>
            <Link href="/admin/posts/recruiter">
              <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Visi darbdavių skelbimai</p>
            </Link>
            <Link href="/admin/posts/job-seeker">
              <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Visi darbuotojų skelbimai</p>
            </Link>
          </div>


          <div className={`border border-gray-200 rounded p-2 flex flex-col items-center justify-center ${getCardColor(offendingContentCount)}`}>
            <h2 className="text-gray-500">Iš viso rasta nekorektiškų duomenų</h2>
            <p className="text-2xl font-bold">{offendingContentCount}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={`border border-gray-200 rounded p-3 flex flex-col items-center space-y-4 ${getCardColor(offendingUserProfilesCount)}`}>
              <h2 className="text-gray-500 flex-grow">Nekorektiškos paskyros</h2>
              <p className="text-2xl font-bold">{offendingUserProfilesCount}</p>
              <Link href="/admin/users/offending">
                <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Peržiūrėti</p>
              </Link>
            </div>
            <div className={`border border-gray-200 rounded p-3 flex flex-col items-center space-y-4 ${getCardColor(offendingRecruiterPostsCount)}`}>
              <h2 className="text-gray-500 flex-grow">Nekorektiški darbdavių skelbimai</h2>
              <p className="text-2xl font-bold mt-auto">{offendingRecruiterPostsCount}</p>
              <Link href="/admin/posts/recruiter/offending" className="mt-auto">
                <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Peržiūrėti</p>
              </Link>
            </div>
            <div className={`border border-gray-200 rounded p-3 flex flex-col items-center space-y-4 ${getCardColor(offendingJobSeekerPostsCount)}`}>
              <h2 className="text-gray-500 flex-grow">Nekorektiški darbuotojų skelbimai</h2>
              <p className="text-2xl font-bold mt-auto">{offendingJobSeekerPostsCount}</p>
              <Link href="/admin/posts/job-seeker/offending" className="mt-auto">
                <p className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Peržiūrėti</p>
              </Link>
            </div>
          </div>
        </div>


      </div>
    );
};

export default Dashboard;