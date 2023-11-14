import React from "react";
import { Container, Badge } from "react-bootstrap";

export default function EmployeeSkillCard({ title, skills }) {
  return (
    <Container className="mt-5 mx-auto col-md-12">
      <h2 className="mb-4">{title}</h2>
      <div className="d-flex flex-wrap">
        {skills.map((skill, index) => (
          <Badge key={index} pill variant="primary" className="m-1">
            {skill}
          </Badge>
        ))}
      </div>
    </Container>
  );
}
