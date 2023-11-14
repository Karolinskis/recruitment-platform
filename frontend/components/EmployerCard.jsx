import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const EmployerCard = ({
  picture,
  firstName,
  lastName,
  city,
  email,
  linkedinUrl,
  approved,
}) => {
  return (
    <Card className="mb-3">
      {/* Make the picture a clickable link */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <Card.Img
          variant="top"
          src={picture}
          alt={`${firstName} ${lastName}`}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      </a>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
          {/* Love (followed) or Broken Heart (unfollowed) icon */}
          <FontAwesomeIcon
            icon={approved ? faHeart : faHeartBroken}
            style={{ color: "red" }}
          />
        </div>
        <Card.Text>
          <strong>City:</strong> {city}
        </Card.Text>
        <Card.Text>
          <strong>Email:</strong> {email}
        </Card.Text>
        <Card.Text>
          <strong>LinkedIn:</strong>{" "}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            {linkedinUrl}
          </a>
        </Card.Text>
        <Card.Text>
          <strong>Status:</strong> {approved ? "Approved" : "Pending Approval"}
        </Card.Text>
        {approved && (
          <img src="green_tick.jpg" alt="Approved" width="20" height="20" />
        )}
        {approved}
      </Card.Body>
    </Card>
  );
};

export default EmployerCard;
