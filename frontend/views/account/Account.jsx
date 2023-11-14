import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from '../../src/Hooks/useAuth';
import { Table } from 'react-bootstrap';

function AccountPage() {
  const {auth} = useAuth();
  const [data, setData] = useState('null');
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5183/account/view',{
        headers:{
          'Authorization':`Bearer ${auth?.token}`,
        },
      })
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);


  
  let navigate = useNavigate();
  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Paskyros puslapis</h1>
      <br/>
      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/CV")}}>CV įkėlimas</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/import")}}>Importuoti duomenis iš LinkedIn</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/passwordChange")}}>Pakeisti slaptažodį</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/edit")}}>Redaguoti paskyrą</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/deleteUser")}}>Ištrinti paskyrą</Button>
      <br/><br/>

      <h1 className="text-center">Jūsų duomenys</h1>
      <Table striped border hover >
        <tbody>
          <tr>
            <td>Vardas</td>
            <td>{data.firstName}</td>
          </tr>
          <tr>
            <td>Pavardė</td>
            <td>{data.lastName}</td>
          </tr>
          <tr>
            <td>Lytis</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>Miestas</td>
            <td>{data.city}</td>
          </tr>
          <tr>
            <td>Elektroninis paštas</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Telefono numeris</td>
            <td>{data.phoneNumber}</td>
          </tr>
          <tr>
            <td>Gimimo data</td>
            <td>{data.birthdayDate}</td>
          </tr>
          <tr>
            <td>LinkedIn profilio URL</td>
            <td>{data.linkedin}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AccountPage
