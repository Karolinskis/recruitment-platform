import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import useAuth from '../src/Hooks/useAuth';
function Navigation() {
  const {auth} = useAuth();
  const navigate = useNavigate()
  function refreshPage() {
    window.location.reload(false);
  }
  let menu = (
    <>
      <Navbar bg="primary" variant="light">
      <Navbar.Brand onClick={() => {navigate("/")}} as={Button}>
        <div className="mx-2 p-2 bg-white rounded">
          <img
            src="../src/assets/icon.png"
            width="50"/>
          </div>
      </Navbar.Brand>
      <Container>
        <h2 className='text-light'>Darbuotojų paieškos platforma</h2>
      </Container>
      <Navbar.Collapse >
        <Button className='m-2' variant="light" onClick={() => {navigate("/login")}}>Prisijungti</Button>
        <Button className='m-2' variant="light" onClick={() => {navigate("/Register")}}>Registruotis</Button>
      </Navbar.Collapse>
      </Navbar>
    </>);
  if(auth.roles === 0){
    menu =( 
    <>
    <Navbar bg="primary" variant="light">
      <Navbar.Brand onClick={() => {navigate("/dashboard")}} as={Button}>
        <div className="mx-2 p-2 bg-white rounded">
          <img src="../src/assets/icon.png" width="50"/>
        </div>
      </Navbar.Brand>
      <Container>
        <h2 className='text-light'>Welcome Candidate</h2>
      </Container>
      <Navbar.Collapse >
        <Button className='m-2' variant="light" onClick={() => {navigate("/account")}}>Account</Button>
        <Button className='m-2' variant="light" onClick={() => {navigate("/jobsad")}}>JobAds</Button>
        <Button className='m-2' variant="danger" onClick={refreshPage}>Logout</Button>
      </Navbar.Collapse>
      </Navbar>
    </>)
  }
  else if(auth.roles === 1){
    menu =(<>
    <Navbar bg="primary" variant="light">
    <Navbar.Brand onClick={() => {navigate("/dashboard")}} as={Button}>
      <div className="mx-2 p-2 bg-white rounded">
        <img src="../src/assets/icon.png" width="50"/>
      </div>
    </Navbar.Brand>
    <Container>
      <h2 className='text-light'>Sveikas, Darbdavi</h2>
    </Container>
    <Navbar.Collapse >
      <Button className='m-2' variant="light" onClick={() => {navigate("/account")}}>Account</Button>
      <Button className='m-2' variant="light" onClick={() => {navigate("/applications")}}>Applications</Button>
      <Button className='m-2' variant="danger" onClick={refreshPage}>Logout</Button>
    </Navbar.Collapse>
    </Navbar>
  </>)}
  else if(auth.roles === 2){
    menu =(<>
    <Navbar bg="primary" variant="light">
    <Navbar.Brand onClick={() => {navigate("/dashboard")}} as={Button}>
      <div className="mx-2 p-2 bg-white rounded">
        <img
          src="../src/assets/icon.png"
          width="50"/>
        </div>
    </Navbar.Brand>
    <Container>
      <h2 className='text-light'>Sveikas, Administratoriau</h2>
    </Container>
    <Navbar.Collapse >
      <Button className='m-2' variant="light" onClick={() => {navigate("/account")}}>Account</Button>
      <Button className='m-2' variant="light" onClick={() => {navigate("/createAccount")}}>Create Recruiter Account</Button>
      <Button className='m-2' variant="light" onClick={() => {navigate("/dashboard")}}>Home</Button>
      <Button className='m-2' variant="light" onClick={() => {navigate("/jobsad")}}>JobAds</Button>
      <Button className='m-2' variant="light" onClick={() => {navigate("/jobsad/create")}}>Create JobsAd</Button>
      <Button className='m-2' variant="danger" onClick={refreshPage}>Logout</Button>

    </Navbar.Collapse>
    </Navbar>
  </>)
    
  }
  else if (auth.roles === 3) {
    menu = (
        <>
            <Navbar bg="primary" variant="light">
                <Navbar.Brand onClick={() => {navigate("/dashboard")}} as={Button}>
                    <div className="mx-2 p-2 bg-white rounded">
                        <img
                            src="../src/assets/icon.png"
                            width="50"/>
                    </div>
                </Navbar.Brand>
                <Container>
                    <h2 className='text-light'>Employer Actions</h2>
                </Container>
                <Navbar.Collapse>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/hire-worker")}}>Hire Worker</Button>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/rate-worker")}}>Rate Worker</Button>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/check-worker-availability")}}>Check Worker Availability</Button>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/send-email")}}>Send Email to Worker</Button>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/edit-offer")}}>Edit Job Offer</Button>
                    <Button className='m-2' variant="light" onClick={() => {navigate("employer/delete-account")}}>Delete Account</Button>
                    <Button className='m-2' variant="danger" onClick={refreshPage}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

  return (
      menu
    );
  }
  
  export default Navigation;

