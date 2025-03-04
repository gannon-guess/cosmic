import React from "react";
import {Container, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TeamStatus() {
    return (
        <div className="text-center py-5">
            <h2 className="mb-4">Team Status</h2>
            <Container>
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
                        </tr>
                        <tr>
                            <td>Illinois Robotics in Space</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Iowa State University (Exhibition)</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>New Mexico Institute of Mining and Technology</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>North Dakota State University</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Northeastern University (NU) Lunabotics</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>San Diego State University, Team CREED</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Sonoma State University</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Texas A&M International University - DustyTRON</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>University of Arkansas</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>University of Minnesota</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>University of North Dakota</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Vanderbilt University</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Virginia Tech</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>YSU Lunabotics Team</td>
                            <td>✓</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default TeamStatus;