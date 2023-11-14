import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import useAuth from "../src/Hooks/useAuth";
function Navigation() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  function refreshPage() {
    window.location.reload(false);
  }
  console.log(auth.roles);
  // Default when not logged in
  let menu = (
    <>
      <Navbar bg="primary" variant="light">
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          as={Button}
        >
          <div className="mx-2 p-2 bg-white rounded">
            <img src="../src/assets/icon.png" width="50" />
          </div>
        </Navbar.Brand>
        <Container>
          <h2 className="text-light">Darbuotojų paieškos platforma</h2>
        </Container>
        <Navbar.Collapse>
          <Button
            className="m-2"
            variant="light"
            onClick={() => {
              navigate("/login");
            }}
          >
            Prisijungti
          </Button>
          <Button
            className="m-2"
            variant="light"
            onClick={() => {
              navigate("/Register");
            }}
          >
            Registruotis
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
  // Worker
  if (auth.roles === 0) {
    menu = (
      <>
        <Navbar bg="primary" variant="light">
          <Navbar.Brand
            onClick={() => {
              navigate("/dashboard");
            }}
            as={Button}
          >
            <div className="mx-2 p-2 bg-white rounded">
              <img src="../src/assets/icon.png" width="50" />
            </div>
          </Navbar.Brand>
          <Container>
            <h2 className="text-light">Sveikas, Darbuotojau</h2>
          </Container>
          <Navbar.Collapse>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/employee/FallowedEmployers");
              }}
            >
              Pamėgti dardaviai
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("offers");
              }}
            >
              Darbo pasiūlymai
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/employee/MyProfile");
              }}
            >
              Paskyra
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/employeeEmployersListPage");
              }}
            >
              Darbdavių sąrašas
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/jobsad");
              }}
            >
              Darbų pridėjimas
            </Button>
            <Button
              className="m-2"
              variant="danger"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              Atsijungimas
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  // Employer
  else if (auth.roles === 1) {
    menu = (
      <>
        <Navbar bg="primary" variant="light">
          <Navbar.Brand
            onClick={() => {
              navigate("/dashboard");
            }}
            as={Button}
          >
            <div className="mx-2 p-2 bg-white rounded">
              <img src="../src/assets/icon.png" width="50" />
            </div>
          </Navbar.Brand>
          <Container>
            <h2 className="text-light">Sveikas, Darbdavy</h2>
          </Container>
          <Navbar.Collapse>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/hire-worker");
              }}
            >
              Hire Worker
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/rate-worker");
              }}
            >
              Rate Worker
            </Button>

            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/check-worker-availability");
              }}
            >
              Check Worker Availability
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/send-email");
              }}
            >
              Send Email to Worker
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/edit-offer");
              }}
            >
              Edit Job Offer
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("jobsAd");
              }}
            >
              View job ads
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("jobsAd/create");
              }}
            >
              Create job ad
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("employer/delete-account");
              }}
            >
              Delete Account
            </Button>
            <Button
              className="m-2"
              variant="danger"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  // Admin
  else if (auth.roles === 2) {
    menu = (
      <>
        <Navbar bg="primary" variant="light">
          <Navbar.Brand
            onClick={() => {
              navigate("/admin/dashboard");
            }}
            as={Button}
          >
            <div className="mx-2 p-2 bg-white rounded">
              <img src="../src/assets/icon.png" width="50" />
            </div>
          </Navbar.Brand>
          <Container>
            <h2 className="text-light">Sveikas, Administratoriau</h2>
          </Container>
          <Navbar.Collapse>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/admin/dashboard");
              }}
            >
              Pagrindinis
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/admin/posts");
              }}
            >
              Visi skelbimai
            </Button>
            <Button
              className="m-2"
              variant="light"
              onClick={() => {
                navigate("/admin/users");
              }}
            >
              Visi vartotojai
            </Button>
            <Button
              className="m-2"
              variant="danger"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              Atsijungti
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }

  return menu;
}

export default Navigation;
