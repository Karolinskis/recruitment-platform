import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

// TODO: Remove this when we have backend
import useAuth from "../src/Hooks/useAuth";

function HomePage() {
  const {setAuth} = useAuth(); // TODO: Remove this when we have backend

  let navigate = useNavigate();
  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <div className="d-flex justify-content-center p-2 m-3">
      <Container>
      <h1 className='text-center'>Sveiki atvykę į darbuotojų paieškos platformą</h1>
      <div className="d-grid gap-2">
      <Button size='lg' onClick={() => {navigate("/login")}}>Prisijungti</Button>
      <Button size='lg' onClick={() => {navigate("/register")}}>Registruotis</Button>
      {/* TODO: Remove everything below here, when we have backend */}
      <Button 
        size='sm' 
        variant="warning" 
        onClick={
          () => {
            const token = 0;
            const roles = 2;
            const email = "email@ktu.lt";
            const password = "password";
            setAuth({email, password, token, roles});
            navigate('/admin/dashboard');
          }
        }>Prisijungti kaip Administratorius
      </Button>
      <Button 
        size='sm' 
        variant="warning" 
        onClick={
          () => {
            const token = 0;
            const roles = 0;
            const email = "email@ktu.lt";
            const password = "password";
            setAuth({email, password, token, roles});
            navigate('/');
          }
        }>Prisijungti kaip Darbuotojas</Button>
      <Button 
        size='sm' 
        variant="warning" 
        onClick={
          () => {
            const token = 0;
            const roles = 1;
            const email = "email@ktu.lt";
            const password = "password";
            setAuth({email, password, token, roles});
            navigate('/');
          }
        }>Prisijungti kaip Darbdavys</Button>
      {/* TODO: Remove everything above here, when we have backend */}
      </div>
      </Container>
      </div>
    </div>
  )
}

export default HomePage