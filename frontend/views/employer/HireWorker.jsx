import React, { useState } from 'react';
import { Button, Table, Alert } from 'react-bootstrap';

function HireFreelancer() {
  const [freelancers, setFreelancers] = useState([
    { id: 1, name: 'Freelancer A', skills: 'Web Development' },
    { id: 2, name: 'Freelancer B', skills: 'Graphic Design' },
    // ... other freelancers
  ]);
  const [success, setSuccess] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  const offerHire = freelancer => {
    // This function would be expanded to actually send the offer
    console.log(`Offer sent to ${freelancer.name}`);
    setSelectedFreelancer(freelancer);
    setSuccess(true);
  };

  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Hire a Freelancer</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {freelancers.map(freelancer => (
            <tr key={freelancer.id}>
              <td>{freelancer.name}</td>
              <td>{freelancer.skills}</td>
              <td>
                <Button onClick={() => offerHire(freelancer)}>Hire</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {success && (
        <Alert variant="success">
          You have successfully offered to hire {selectedFreelancer?.name}!
        </Alert>
      )}
    </div>
  );
}

export default HireFreelancer;

