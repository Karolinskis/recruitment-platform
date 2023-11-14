import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../src/Api/axios';

function CreateAccountPage() {
  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [pwdr, setPwdr] = useState('');
  const [firstname, setName] = useState('');
  const [lastname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  let navigate = useNavigate();
  useEffect(()=>{
    setErrMsg('')
  },[username, password, pwdr,email]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!==pwdr){
      setErrMsg('Passwords dont match');
      return;
    }
    try{
      const response = await axios.post('/api/register',
      JSON.stringify({
        firstname, lastname,
        username, password,
        email
        }),
        {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
        });
      navigate("/login");
    }
    catch(err){
      if(!err?.response){
        setErrMsg('No server response');
      }else if(err.response?.status===409){
        setErrMsg(err.response.data.message);
      }else{
        setErrMsg('Something wrong');
      }
    }
    

  }

  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <h1 className="text-center">Susikurkite paskyrą</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-3" controlId="UserType">
            <Form.Label as="legend">Pasirinkite vaidmenį:</Form.Label>
            <Form.Check
              type="radio"
              label="Darbdavys"
              name="userType"
              id="employer"
              onChange={() => setUserType('employer')}
            />
            <Form.Check
              type="radio"
              label="Darbuotojas"
              name="userType"
              id="employee"
              onChange={() => setUserType('employee')}
            />
          </Form.Group>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Vardas</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Įveskite vardą"
              onChange={(event) => setName(event.target.value)}
              />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Pavardė</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Įveskitę pavardę"
              onChange={(event) => setSurname(event.target.value)}
              />
          </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mb-3" controlId="Gender">
          <Form.Label>Lytis</Form.Label>
          <Form.Select
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Pasirinkite lytį</option>
            <option value="male">Vyras</option>
            <option value="female">Moteris</option>
            <option value="other">Kita</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>Miestas</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="City"
            onChange={(event) => setCity(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>El.paštas</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Įveskite el. paštą"
            onChange={(event) => setPostalCode(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>Telefono numeris</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Įveskite telefono numerį"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>Slaptažodis</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Įveskite slaptažodį"
            onChange={(event) => setPwd(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>Pakartokite slaptažodį</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Dar kartą įveskite slaptažodį"
            onChange={(event) => setConfirmPwd(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>Gimimo data</Form.Label>
          <Form.Control
            required
            type="date"
            onChange={(event) => setBirthdate(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Register">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Įveskite LinkedIn URL"
            onChange={(event) => setLinkedinUrl(event.target.value)}
          />
        </Form.Group>

        <Button className="mb-3" type="submit">Registruotis</Button>
      </Form>
      <p className='text-danger'>{errMsg}</p>
    </div>
  );
}

export default CreateAccountPage