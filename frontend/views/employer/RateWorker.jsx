import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

function WorkerRatings() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Worker A', rating: 3 },
    { id: 2, name: 'Worker B', rating: 4 },
    // ...other workers
  ]);

  const handleRatingChange = (id, newRating) => {
    setWorkers(workers.map(worker => 
      worker.id === id ? { ...worker, rating: newRating } : worker
    ));
    // TODO: Implement the logic to submit this change to the backend
  };

  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Rate Your Workers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Submit Rating</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(worker => (
            <tr key={worker.id}>
              <td>{worker.name}</td>
              <td>
                <Form.Control
                  as="select"
                  value={worker.rating}
                  onChange={(e) => handleRatingChange(worker.id, e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </td>
              <td>
                <Button onClick={() => alert(`Rating for ${worker.name} submitted!`)}>Submit Rating</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WorkerRatings;

