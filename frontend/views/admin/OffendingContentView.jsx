import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Form, InputGroup } from "react-bootstrap";
import useAuth from "../../src/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OffendingContentView() {
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
    <div className="container bg-white rounded">
        <h1>Įžeidžiantys pranešimai / paskyros</h1>
        <p className="text-danger">{errMsg}</p>
        <Table responsive>
            <thead>
                <tr>
                    <th>Tipas</th>
                    <th>Pavidinimas</th>
                    <th>Priežastis</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pranešimas</td>
                    <td>Great Job Come here!</td>
                    <td>Necenzūriniai žodžiai</td>
                    <td>
                        <Button variant="info" onClick={() => setFilter("")}> Peržiūrėti </Button>
                        <Button variant="danger" onClick={() => setFilter("")}> Ištrinti </Button>
                        <Button variant="secondary" onClick={() => setFilter("")}> Ignoruoti </Button>

                    </td>
                </tr>
                <tr>
                    <td>Paskyra</td>
                    <td>Vardenis123</td>
                    <td>Necenzūriniai žodžiai</td>
                    <td>
                        <Button variant="info" onClick={() => setFilter("")}> Peržiūrėti </Button>
                        <Button variant="danger" onClick={() => setFilter("")}> Ištrinti </Button>
                        <Button variant="secondary" onClick={() => setFilter("")}> Ignoruoti </Button>

                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}
export default OffendingContentView;