import React from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "../src/Api/axios";
import useAuth from "../src/Hooks/useAuth";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

const JobAdsTable = ({ jobAds }) => {
  const { auth } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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


  async function GeneratePDF(name, about, salary) {
    var doc = new jsPDF();

    doc.setFontSize(24);
    doc.text("Job name: " + name, 20, 50);
    doc.text("Description: " + about, 20, 60);
    doc.text("Salary: " + salary, 20, 70);
    doc.addImage("../src/assets/hr.png", "PNG", 15, 15, 15, 15);
    doc.save("job.pdf");
  }
  async function DeleteJobAd(jobId) {
    try {
      await axios.delete(`/api/job-ads/${jobId}`, {
        headers: { Authorization: `Bearer ${auth?.token}` },
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //href={`/jobsad-view/${info.id}`}
  return (

      <>
        {jobAds.map((info) => (
          <tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.about}</td>
            <td>{info.salary}</td>
            <td>
              <Button
                size="sm"
                variant="primary"
                onClick={() => handleViewDetails(info)}

              >
                View
              </Button>{" "}
              <Button
                size="sm"
                variant="warning"
                onClick={() => GeneratePDF(info.name, info.about, info.salary)}
              >
                Export
              </Button>{" "}
              <Button
                size="sm"
                variant="danger"
                onClick={() => DeleteJobAd(info.id)}
                href="/jobsad"
              >
                Delete
              </Button>{" "}
              <Button
                size="sm"
                variant="warning"
                onClick={() => {}}
                href={`/jobsad/edit/${info.id}`}
              >
                Edit
              </Button>{" "}
            </td>
            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detali peržiūra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Display detailed view of the item here */}
                {selectedItem && (
                    <div>
                        <p><b>ID:</b> {selectedItem.id}</p>
                        <p><b>Pavadinimas:</b> {selectedItem.name}</p>
                        <p><b>Aprašymas:</b> {selectedItem.about}</p>
                        <p><b>Atlyginimas:</b> {selectedItem.salary}</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Uždaryti</Button>
            </Modal.Footer>
        </Modal>
          </tr>
        ))}
      </>
      
    
    
  );
};
export default JobAdsTable;
