import React from "react";
import {Container, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import lunarsurface from './images/lunar_surface.jpg';

function TeamStatus() {
    return (
        <div style={{ paddingBottom: "90px", position: "relative", display: "flex", flexDirection: "column", minHeight: "100vh", backgroundImage: `url(${lunarsurface})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <header className="cosmic-background text-white text-center py-4" style={{ backgroundColor: "red", width: "50%", margin: "0 auto" }}>
                <h1>Team Status</h1>
            </header>
            <div className="text-center" style={{ flex: "1", width: "50%", margin: "0 auto", marginTop: "0px" }}>
                <Container style={{ marginBottom: '50px' }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Application</th>
                                <th>PoL Due 3/31</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bradley University</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Illinois Robotics in Space</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Iowa State University (Exhibition)</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>New Mexico Institute of Mining and Technology</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>North Dakota State University</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Northeastern University (NU) Lunabotics</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>San Diego State University, Team CREED</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sonoma State University</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Texas A&M International University - DustyTRON</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>University of Arkansas</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>University of Minnesota</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>University of North Dakota</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vanderbilt University</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Virginia Tech</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>YSU Lunabotics Team</td>
                                <td>✓</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
}

export default TeamStatus;