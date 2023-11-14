import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form, InputGroup } from "react-bootstrap";
import JobAdsTable from "../../components/JobAdsTable";
import useAuth from "../../src/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function JobAdsPage() {
  const { auth } = useAuth();
  const Navigate = useNavigate();
  const [jobAds, setJobAds] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [filteredAds, setFilteredAds] = useState([]);
  const [filter, setFilter] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth.token}`,
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
};

/**
 * Closes the modal.
 */
const handleCloseModal = () => {
    setShowModal(false);
};

const [posts, setPosts] = useState([
    {
        id: 1,
        name: "Junior programų inžinierius",
        salary: "10",
        about: "C# backend"
        
    },
    {
        id: 2,
        name: "Junior testavimo inžinierius",
        salary: "10",
        about: "Java"
    },
]);

const contentData = posts;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5183/api/job-ads", { headers })
  //     .then((res) => {
  //       setJobAds(res.data);
  //       setFilteredAds(res.data);
  //     })
  //     .catch((res) => {
  //       setErrMsg(res);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (filter === "") {
  //     setFilteredAds(jobAds);
  //     return;
  //   }

  //   setFilteredAds(jobAds.filter((x) => x.about.includes(filter)));
  // }, [filter]);

  return (
    <div className="container bg-white rounded">
      <h1>Jobs List</h1>
      <p className="text-danger">{errMsg}</p>
      <>
        <Form.Label>Filter by description:</Form.Label>
        <InputGroup className="w-25">
          <Form.Control
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <Button variant="secondary" onClick={() => setFilter("")}>
            X
          </Button>
        </InputGroup>
  </>
      <Table responsive>
        <thead>
          <tr>
            {/* hardcoded*/}
            <th>#</th>
            <th>Name</th>
            <th>Salary</th>
            <th>About</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <JobAdsTable jobAds={posts} />
          
        </tbody>
      </Table>



      {/*<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detali peržiūra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Display detailed view of the item here
          {selectedItem && (
              <div>
                  <p><b>ID:</b> {selectedItem.id}</p>
                  <p><b>Pavadinimas:</b> {selectedItem.name}</p>
                  <p><b>Atlyginimas:</b> {selectedItem.wage}</p>
                  <p><b>Aprašymas:</b> {selectedItem.about}</p>
              </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Uždaryti</Button>
        </Modal.Footer>
      </Modal>*/}
    </div>
  );
}

export default JobAdsPage;
