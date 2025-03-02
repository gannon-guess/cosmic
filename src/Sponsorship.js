import React from "react";
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import lunarsurface from './images/lunar_surface.jpg';

function Sponsorship() {
    return (
        <div style={{paddingBottom: "90px", position: "relative", backgroundImage: `url(${lunarsurface})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", height: "100vh"}}>
            <div style={{ flex: "1" }}>
            </div>
            <Container className="text-center py-5" style={{ flex: "2.25", padding: "0 0px", backgroundColor: "rgba(255, 255, 255, 0)" }}>
                <div style={{ marginTop: '30px', padding: '0px', border: '1px solid #ddd', borderRadius: '0px', backgroundColor: '#f9f9f9' }}>
                    <h3>WIP</h3>
                </div>
            </Container>
            <div style={{ flex: "1" }}>
            </div>
        </div>
    );
}

export default Sponsorship;