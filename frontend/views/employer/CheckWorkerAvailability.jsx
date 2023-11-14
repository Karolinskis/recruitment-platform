import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function CheckWorkerAvailability() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Worker A', available: true },
    { id: 2, name: 'Worker B', available: false },
    // ... other workers
  ]);

  // Simulate checking availability
  const checkAvailability = (id) => {
    // Placeholder logic to toggle availability
    setWorkers(workers.map(worker => 
      worker.id === id ? { ...worker, available: !worker.available } : worker
    ));
    // TODO: Implement actual logic to check availability from the backend
  };

  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Worker Availability</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Availability</th>
            <th>Check Availability</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(worker => (
            <tr key={worker.id}>
              <td>{worker.name}</td>
              <td>{worker.available ? 'Available' : 'Not Available'}</td>
              <td>
                <Button onClick={() => checkAvailability(worker.id)}>
                  Check
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CheckWorkerAvailability;

