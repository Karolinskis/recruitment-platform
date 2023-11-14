import React from "react";
import { Container, Image } from "react-bootstrap";

export default function MyProfile() {
  const profilePictureUrl =
    "https://www.realmenrealstyle.com/wp-content/uploads/2023/06/Vanity-Glasses.jpg"; // Replace with the actual URL
  const firstName = "John";
  const lastName = "Doe";
  const currentPosition = "Software Engineer";
  const extraInfo = "Passionate about web development and new technologies.";

  return (
    <Container className="mt-5 mx-auto col-md-6 ml-0">
      <div className="text-center mb-4">
        <Image
          src={profilePictureUrl}
          roundedCircle
          width={400}
          height={400}
          alt="Profile Picture"
        />
      </div>
      <h2 className="mb-2">{`${firstName} ${lastName}`}</h2>
      <p className="text-muted mb-3">{currentPosition}</p>
      <p>{extraInfo}</p>
    </Container>
  );
}
