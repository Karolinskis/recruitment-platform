import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import useAuth from "../../src/Hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function OffendingContent() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const { auth } = useAuth();
    const Navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");
    const params = useParams();

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

    /**
     * Handles the delete action for a specific item.
     * @param {number} itemId - The ID of the item to be deleted.
     * @returns {void}
     */
    const handleDelete = (itemId) => {
        const isConfirmed = window.confirm("Ar tikrai norite ištrinti šį įrašą?");
        if (isConfirmed) {
            // TODO: Perform delete action
        }
    }

    /**
     * Handles the ignore action for a specific item.
     * @param {number} itemId - The ID of the item to ignore.
     * @returns {void}
     */
    const handleIgnore = (itemId) => {
        const isConfirmed = window.confirm("Ar tikrai norite ignoruoti šį įrašą?");
        if (isConfirmed) {
            // TODO: Perform ignore action
        }
    }

    const [posts, setPosts] = useState([
        {
            id: 1,
            type: "Pranešimas",
            title: "Great Job Come here!",
            date: "2021-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies ac risus vitae commodo. Etiam.",
            wage: 10,
            length: "2022-01-01",
            reason: "Necenzūriniai žodžiai",
        },
        {
            id: 2,
            type: "Pranešimas",
            title: "Great Job",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at orci eget est ornare pellentesque.",
            wage: 20,
            length: "2022-01-01",
            reason: "Necenzūriniai žodžiai",
        },
    ]);

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

    const contentData = params.type === 'users' ? users : posts;

    // const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${auth.token}`,
    // };

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
        <h1>Įžeidžiantys pranešimai / paskyros</h1>
        <p className="text-danger">{errMsg}</p>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pavadinimas</th>
                    <th>Aprašymas</th>
                    <th>Priežastis</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {contentData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title || item.name}</td>
                        <td>{item.description || item.surname}</td>
                        <td>{item.reason}</td>
                        <td>
                            <Button variant="info" onClick={() => handleViewDetails(item)}> Peržiūrėti </Button>
                            <Button variant="danger" onClick={() => handleDelete(item.id)}> Ištrinti </Button>
                            <Button variant="secondary" onClick={() => handleIgnore(item.id)}> Ignoruoti </Button>
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
                        <p><b>ID:</b> {selectedItem.id}</p>
                        {/* User */}
                        {params.type === 'users' && (
                            <>
                                <p><b>Vardas:</b> {selectedItem.name}</p>
                                <p><b>Pavardė:</b> {selectedItem.surname}</p>
                                <p><b>Lytis:</b> {selectedItem.gender}</p>
                                <p><b>El. paštas:</b> {selectedItem.email}</p>
                                <p><b>Telefono numeris:</b> {selectedItem.phone}</p>
                                <p><b>Gimimo data:</b> {selectedItem.birthDate}</p>
                                <p><b>LinkedIn:</b> {selectedItem.linkedIn}</p>
                                <p><b>Sukūrimo data:</b> {selectedItem.accountCreationDate}</p>
                                <p><b>Patvirtinta:</b> {selectedItem.isVerified ? 'Taip' : 'Ne'}</p>

                                <p><b>Priežastis:</b> {selectedItem.reason}</p>

                            </>
                        )}
                        {/* Post */}
                        {params.type === 'posts' && (
                            <>
                                <p><b>Pavadinimas:</b> {selectedItem.title}</p>
                                <p><b>Aprašymas:</b> {selectedItem.description}</p>
                                <p><b>Atlyginimas:</b> {selectedItem.wage}</p>
                                <p><b>Trukmė:</b> {selectedItem.length}</p>
                                <p><b>Priežastis:</b> {selectedItem.reason}</p>
                            </>
                        )}
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
export default OffendingContent;