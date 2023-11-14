import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function SkillsManagementCard({
  onAddSkillClick,
  onEditSkillsClick,
}) {
  const [isAddSkillHovered, setIsAddSkillHovered] = useState(false);
  const [isEditSkillsHovered, setIsEditSkillsHovered] = useState(false);

  return (
    <Container className="mt-5 mx-auto col-md-12">
      <div className="flex space-x-8">
        {/* Add Skill Button */}
        <Button
          className={`flex-grow p-4 rounded-lg transition-all duration-300 ${
            isAddSkillHovered ? "bg-gray-300" : "bg-gray-200"
          }`}
          onMouseEnter={() => setIsAddSkillHovered(true)}
          onMouseLeave={() => setIsAddSkillHovered(false)}
          onClick={onAddSkillClick}
        >
          <h2 className="mb-4">Add Skill</h2>
        </Button>

        {/* Edit Skills Button */}
        <Button
          className={`flex-grow p-4 rounded-lg transition-all duration-300 ${
            isEditSkillsHovered ? "bg-gray-300" : "bg-gray-200"
          }`}
          onMouseEnter={() => setIsEditSkillsHovered(true)}
          onMouseLeave={() => setIsEditSkillsHovered(false)}
          onClick={onEditSkillsClick}
        >
          <h2 className="mb-4">Edit Skills</h2>
        </Button>
      </div>
    </Container>
  );
}
