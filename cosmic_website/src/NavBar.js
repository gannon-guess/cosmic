import React from "react";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import View from "./Views";

import { discord_link, changeView } from "./constants.js";

// module for navigating  between the web pages
const NavBar = ({ viewer, setViewer }) => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand >
                    CoSMiC
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            {/* Home Button */}
                            <Button 
                                variant="outline-light" 
                                className="me-2"
                                onClick={() => changeView(viewer, setViewer, View.MAIN)}
                            >
                                Home
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            {/* Signup Button */}
                            <Button 
                                variant="outline-light" 
                                className="me-2"
                                onClick={() => changeView(viewer, setViewer, View.SIGNUP)}
                            >
                                Signup
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            {/* FAQ Button */}
                            <Button 
                                variant="outline-light" 
                                className="me-2"
                                onClick={() => changeView(viewer, setViewer, View.FAQ)}
                            >
                                FAQ
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-discord" style={{ fontSize: '30px', marginLeft: '20px', marginTop: "90px" }}></i>
                            </a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
