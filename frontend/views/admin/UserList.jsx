import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import useAuth from "../../src/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostsList() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const { auth } = useAuth();
    const Navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
    };

    /**
     * Sets the selected item and shows the modal.
     * @param {Object} item - The item to be selected.
     * @returns {void}
     */
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

    const [users, setUsers] = useState([
        {
            id: 1,
            type:"Paskyra",
            name: "Vardenis",
            surname: "Pavardenis",
            gender: "Vyras",
            email: "test@test.lt",
            phone: "861234567",
            birthDate: "1990-01-01",
            linkedIn: "https://www.linkedin.com/",
            accountCreationDate: "2021-01-01",
            isVerified: true,
            bannedUntil: "2021-01-01",
            reason: "Necenzūriniai žodžiai",
        },
        {
            id: 2,
            type:"Paskyra",
            name: "Vardenė",
            surname: "Pavardenė",
            gender: "Moteris",
            email: "test@test.lt",
            phone: "861234567",
            birthDate: "1990-01-01",
            linkedIn: "https://www.linkedin.com/",
            accountCreationDate: "2021-01-01",
            isVerified: true,
            bannedUntil: "2021-01-01",
            reason: "Necenzūriniai žodžiai",
        },
    ]);

    const contentData = users;

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
        <h1>Visi vartotojai</h1>
        <p className="text-danger">{errMsg}</p>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Vardas</th>
                    <th>Pavardė</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {contentData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>
                            <Button variant="info" onClick={() => handleViewDetails(item)}> Peržiūrėti </Button>
                            <Button variant="danger" onClick={() => handleDelete(item.id)}> Ištrinti </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detali peržiūra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Display detailed view of the item here */}
                {selectedItem && (
                    <div>
                        <p><b>Vardas:</b> {selectedItem.name}</p>
                        <p><b>Pavardė:</b> {selectedItem.surname}</p>
                        <p><b>Lytis:</b> {selectedItem.gender}</p>
                        <p><b>El. paštas:</b> {selectedItem.email}</p>
                        <p><b>Telefono numeris:</b> {selectedItem.phone}</p>
                        <p><b>Gimimo data:</b> {selectedItem.birthDate}</p>
                        <p><b>LinkedIn:</b> {selectedItem.linkedIn}</p>
                        <p><b>Sukūrimo data:</b> {selectedItem.accountCreationDate}</p>
                        <p><b>Patvirtinta:</b> {selectedItem.isVerified ? 'Taip' : 'Ne'}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Uždaryti</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}
export default PostsList;