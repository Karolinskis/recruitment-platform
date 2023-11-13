import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../src/Hooks/useAuth';

function EditAccountPage() {

  const [user, setUser] = useState({});
  const {auth} = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:5183/account/edit', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${auth?.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
      navigate("/account");
  };

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Paskyros redagavimas</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Vardas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Įveskitę vardą"
            value={user.firstname}
            onChange={(event) => setUser({ ...user, firstname: event.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSurname">
          <Form.Label>Pavardė</Form.Label>
          <Form.Control
            type="text"
            placeholder="Įveskitę pavardę"
            value={user.lastname}
            onChange={(event) => setUser({ ...user, lastname: event.target.value })}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGender">
        <Form.Label>Lytis</Form.Label>
        <Form.Control
         as="select"
         value={user.gender}
         onChange={(event) => setUser({ ...user, gender: event.target.value })}
  >
        <option value="male">Vyras</option>
        <option value="female">Moteris</option>
        <option value="other">Kita</option>
        </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>Miestas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Įveskite miestą"
            value={user.city}
            onChange={(event) => setUser({ ...user, city: event.target.value })}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Elektroninis paštas</Form.Label>
        <Form.Control
          type="email"
          placeholder="Įveskite el. paštą"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Telefono numeris</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Įveskite telefono numerį"
            value={user.phoneNumber}
            onChange={(event) => setUser({ ...user, phoneNumber: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBirthdayDate">
          <Form.Label>Gimimo data</Form.Label>
          <Form.Control
            type="date"
            value={user.birthdayDate}
            onChange={(event) => setUser({ ...user, birthdayDate: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLinkedIn">
          <Form.Label>LinkedIn Profilio URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Įveskitę LinkedIn profilio URL"
            value={user.linkedin}
            onChange={(event) => setUser({ ...user, linkedin: event.target.value })}
          />
        </Form.Group>


        <Button className="mb-3" variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default EditAccountPage