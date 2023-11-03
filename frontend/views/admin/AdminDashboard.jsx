import React, { useState, useEffect } from "react";

import { Badge, Button, Form, InputGroup } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import useAuth from "../../src/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashBoard() {
    const { auth } = useAuth();
    const Navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
    };

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
    <div className="container bg-white rounded text-center">
      <h1>Administratoriaus skydelis</h1>
      <p className="text-danger">{errMsg}</p>
      <div className="mx-auto w-25">
        <div className="row">
          <Stack direction="horizontal" gap={2}>
            <h2>
              Nekorektiškos paskyros <Badge variant="danger">10</Badge>
            </h2>
            <Button variant="secondary" onClick={() => Navigate("/admin/offending-content")}>Peržiūrėti</Button>
          </Stack>
        </div>
        <div className="row">
          <Stack direction="horizontal" gap={2}>
            <h2>
              Nekorektiški skelbimai <Badge variant="danger">10</Badge>
            </h2>
            <Button variant="secondary" onClick={() => Navigate("/admin/offending-content")}>Peržiūrėti</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
  
  
}
export default AdminDashBoard;