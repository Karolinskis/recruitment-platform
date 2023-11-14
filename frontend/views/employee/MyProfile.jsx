import React from "react";
import MyProfile from "../../components/MyProfile";
import EmployeeSkillsCard from "../../components/EmployeeSkillCard";
import { Container, Row, Col } from "react-bootstrap";
import AddSkillCard from "../../components/SkillsManagementCard";

export default function MyAccountProfile() {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "RESTful API"];
  const languages = ["German", "Latvian", "French", "Spanish", "Chinese"];
  const otherSkills = [
    "Project Management",
    "UI/UX Design",
    "Agile Methodology",
    "Git",
  ];

  const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...languages,
    ...otherSkills,
  ];

  return (
    <Container fluid>
      <Row>
        {/* Left side - MyProfile */}
        <Col md={4} className="bg-light p-4">
          <MyProfile />
        </Col>

        {/* Right side - EmployeeSkillsCard components */}
        <Col md={8} className="bg-light p-4">
          <EmployeeSkillsCard title="Frontend Skills" skills={frontendSkills} />
          <EmployeeSkillsCard title="Backend Skills" skills={backendSkills} />
          <EmployeeSkillsCard title="Languages" skills={languages} />
          <EmployeeSkillsCard title="Other Skills" skills={otherSkills} />
          {/* Add Skill Button */}
          <AddSkillCard />
        </Col>
      </Row>
    </Container>
  );
}
