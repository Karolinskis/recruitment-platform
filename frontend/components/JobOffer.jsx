import React from "react";
import { Card, Button } from "react-bootstrap";

const JobOffer = ({ title, date, description, onAccept, onReject }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {date}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {description}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="success" onClick={onAccept}>
            Accept
          </Button>
          <Button variant="danger" onClick={onReject}>
            Reject
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobOffer;
