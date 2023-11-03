import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function HomePage() {
  let navigate = useNavigate();
  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <div className="d-flex justify-content-center p-2 m-3">
      <Container>
      <h1 className='text-center'>Sveiki atvykę į darbuotojų paieškos platformą</h1>
      <div className="d-grid gap-2">
      <Button size='lg' onClick={() => {navigate("/login")}}>Prisijungti</Button>
      <Button size='lg' onClick={() => {navigate("/register")}}>Registruotis</Button>
      </div>
      </Container>
      </div>
    </div>
  )
}

export default HomePage