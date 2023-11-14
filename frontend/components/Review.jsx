import React from "react";
import { Card } from "react-bootstrap";

const Review = ({ reviewerName, comment, type }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{reviewerName}</Card.Title>
        <Card.Text>
          <strong>Comment:</strong> {comment}
        </Card.Text>
        <Card.Text>
          <strong>Type:</strong> {type}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
