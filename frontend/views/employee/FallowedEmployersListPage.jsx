import React from "react";
import EmployerCard from "../../components/EmployerCard";

const employersData = [
  {
    id: 1,
    picture:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2560/https://www.ioatwork.com/wp-content/uploads/2014/11/pexels-andrea-piacquadio-3760790-scaled.jpg",
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    email: "john.doe@example.com",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    approved: true,
  },
  {
    id: 2,
    picture:
      "https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png",
    firstName: "Styvenas",
    lastName: "Darbas (Džobsas)",
    city: "San Francisco",
    email: "jane.smith@example.com",
    linkedinUrl: "https://www.linkedin.com/in/janesmith/",
    approved: false,
  },
  {
    id: 3,
    picture:
      "https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg",
    firstName: "Billas",
    lastName: "Geitsas",
    city: "Chicago",
    email: "bob.johnson@example.com",
    linkedinUrl: "https://www.linkedin.com/in/bobjohnson/",
    approved: true,
  },
  {
    id: 4,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_Gz5H6mNP92bvJZZvPWFyKTKJdUQz2V1S9hJTZbSiNTPn0vQdjzYc0EMzw40qBzu0c4&usqp=CAU",
    firstName: "Valdemaras",
    lastName: "Rupšys",
    city: "Kazliandija",
    email: "alice.williams@example.com",
    linkedinUrl: "https://www.linkedin.com/in/alicewilliams/",
    approved: false,
  },
  {
    id: 5,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAh_e65rdvx8-pPFbVL4Yp97y4RZ2XGU4-xiD_VAmdEKx3ygucB-JJQ-mV5IogjbR7aI&usqp=CAU",
    firstName: "Adnrius ",
    lastName: "Tatauskas",
    city: "Seattle",
    email: "charlie.brown@example.com",
    linkedinUrl: "https://www.linkedin.com/in/charliebrown/",
    approved: true,
  },
  // Add data for more employers as needed
];

export default function FallowedWorkersListPage() {
  return (
    <div>
      <h1>Pamėgtų darbdavių sąrašas:</h1>
      {employersData.map((employer) => (
        <EmployerCard
          key={employer.id}
          picture={employer.picture}
          firstName={employer.firstName}
          lastName={employer.lastName}
          city={employer.city}
          email={employer.email}
          linkedinUrl={employer.linkedinUrl}
          approved={employer.approved}
        />
      ))}
    </div>
  );
}
