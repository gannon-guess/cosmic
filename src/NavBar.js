import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { discord_link } from "./constants.js";

import './components/Global.css';
import './components/NavBar.css';

import CosmicLogo from './images/cosmic_logo.png';

// Module for navigating between the web pages
const NavBar = () => {
    return (
        <Navbar className="cosmic-header" variant="dark" expand="lg">
            <Container fluid className="position-relative">
                {/* Left: Logo and Brand */}
                <div className="d-flex align-items-center" style={{ marginLeft: "10px" }}>
                    <img src={CosmicLogo} alt="Cosmic Logo" style={{ width: "75px" }} />
                </div>

                <Navbar.Collapse id="navbar-nav" className="w-100 d-flex justify-content-center">
                    {/* Center: Navigation Links */}
                    <Nav className="d-flex align-items-center">
                        <Nav.Item className="d-flex align-items-center">
                            <Link className="nav-link" to="/" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                Home
                            </Link>
                            <span className="divider">|</span>
                            <Link className="nav-link" to="/faq" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                FAQ
                            </Link>
                            <span className="divider">|</span>
                            <Link className="nav-link" to="/sponsor" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                Sponsorship
                            </Link>
                            <span className="divider">|</span>
                            <Link className="nav-link" to="/rulebook" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                Rulebook
                            </Link>
                            <span className="divider">|</span>  
                            <Link className="nav-link" to="/livestream" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                Livestream
                            </Link>
                            <span className="divider">|</span>  
                            <Link className="nav-link" to="/teamstatus" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "1.5rem" }}>
                                Team Status
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

                {/* Right: Discord Button (Absolutely Positioned) */}
                <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}>
                    <Nav>
                        <Nav.Item>
                        <Navbar.Brand style={{ fontFamily: 'SpaceAge' }}>CoSMiC</Navbar.Brand>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <i className="cosmic-icon bi bi-discord discord-icon"></i>
                            </a>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;
