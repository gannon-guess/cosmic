import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import View from "./Views";
import { discord_link, changeView } from "./constants.js";

import './components/NavBar.css';

// Module for navigating between the web pages
const NavBar = ({ viewer, setViewer }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>CoSMiC</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between">
                    {/* Centered Navigation Links */}
                    <Nav className="mx-auto align-items-center">
                        <Nav.Item className="d-flex align-items-center">
                            <button
                                className="nav-button"
                                onClick={() => changeView(viewer, setViewer, View.MAIN)}
                            >
                                Home
                            </button>
                            <span className="divider">|</span>
                            <button
                                className="nav-button"
                                onClick={() => changeView(viewer, setViewer, View.SIGNUP)}
                            >
                                Signup
                            </button>
                            <span className="divider">|</span>
                            <button
                                className="nav-button"
                                onClick={() => changeView(viewer, setViewer, View.FAQ)}
                            >
                                FAQ
                            </button>
                        </Nav.Item>
                    </Nav>

                    {/* Discord Button aligned to the far right */}
                    <Nav>
                        <Nav.Item>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <i
                                    className="bi bi-discord"
                                    style={{ fontSize: "30px", marginLeft: "20px" }}
                                ></i>
                            </a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
