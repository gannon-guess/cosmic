import React from "react";
import { Table, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./Footer";
import lunarsurface from './images/lunar_surface.jpg';

function Sponsorship() {
    return (
        <div style={{ paddingBottom: "90px", position: "relative", backgroundImage: `url(${lunarsurface})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", height: "140vh" }}>
            <div style={{ flex: "1" }}></div>
            <div style={{ flex: "2.25", padding: "0 0px", backgroundColor: "rgb(255, 255, 255)" }}>
                <header className="cosmic-background text-white text-center py-4" style={{ margin: "0 auto" }}>
                    <h1>Sponsorship</h1>
                </header>
                <main className="container my-5" style={{ flex: "1" }}>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <Card className="text-dark mb-3" style={{ padding: "20px", borderRadius: "0px" }}>
                                <Card.Body>
                                    <h2 className="mb-3">Collegiate Space Mining Competition</h2>
                                    <p>Iowa State University | May 21 - 24</p>
                                    <p>The Collegiate Space Mining Competition is a premier event in Ames, Iowa, bringing together top collegiate teams to tackle challenges in space resource extraction and robotics.</p>
                                </Card.Body>
                            </Card>
                            
                            <h3 className="mt-4">Sponsorship Tiers</h3>
                            <Table striped bordered hover className="mt-3">
                                <thead>
                                    <tr className="text-warning">
                                        <th>Tier</th>
                                        <th>Benefits</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cosmic Sponsor</td>
                                        <td>Company Name in Competition, 4 Banquet Tickets, Networking Table, Recognition on Banner & Programs, Logo on Livestream</td>
                                        <td>$15,000</td>
                                    </tr>
                                    <tr>
                                        <td>Galactic Sponsor</td>
                                        <td>Company Name on Regolith/Robot Pit, 4 Banquet Tickets, Networking Table, Recognition on Banner & Programs, Logo on Livestream</td>
                                        <td>$10,000</td>
                                    </tr>
                                    <tr>
                                        <td>Nebular Sponsor</td>
                                        <td>Company Name on Awards, 2 Banquet Tickets, Recognition on Banner & Programs, Logo on Livestream</td>
                                        <td>$5,000</td>
                                    </tr>
                                    <tr>
                                        <td>Solar Sponsor</td>
                                        <td>Recognition on Banner & Programs, Logo on Livestream</td>
                                        <td>$2,500</td>
                                    </tr>
                                    <tr>
                                        <td>Lunar Sponsor</td>
                                        <td>Recognition on Programs</td>
                                        <td>$500</td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                            <h3 className="mt-4">Response Form</h3>
                            <p>To sponsor, contact <a href="mailto:csmc_isu@iastate.edu" className="text-warning">csmc_isu@iastate.edu</a> or mail to:</p>
                            <p>2505 University Blvd, P.O. Box 2230, Ames, IA 50010-2230</p>
                            <Button href="/files/sponsorship.pdf" variant="danger" className="mt-3" style={{ fontWeight: "bold",  padding: "10px 20px" }}>Become a Sponsor</Button>
                        </div>
                    </div>
                </main>
            </div>
            <div style={{ flex: "1" }}></div>

            <Footer />
        </div>
    );
}

export default Sponsorship;
