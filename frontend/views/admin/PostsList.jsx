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

    const [posts, setPosts] = useState([
        {
            id: 1,
            type: "Pranešimas",
            title: "Great Job Come here!",
            date: "2021-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies ac risus vitae commodo. Etiam.",
            wage: 10,
            length: "2022-01-01"
        },
        {
            id: 2,
            type: "Pranešimas",
            title: "Great Job",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at orci eget est ornare pellentesque.",
            wage: 20,
            length: "2022-01-01"
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
        <h1>Visi pranešimai</h1>
        <p className="text-danger">{errMsg}</p>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pavadinimas</th>
                    <th>Aprašymas</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {contentData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
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
                        <p><b>ID:</b> {selectedItem.id}</p>
                        <p><b>Pavadinimas:</b> {selectedItem.title}</p>
                        <p><b>Aprašymas:</b> {selectedItem.description}</p>
                        <p><b>Atlyginimas:</b> {selectedItem.wage}</p>
                        <p><b>Trukmė:</b> {selectedItem.length}</p>
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