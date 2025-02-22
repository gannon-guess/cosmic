import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import View from "./Views";
import { discord_link, changeView } from "./constants.js";

import './components/Global.css';
import './components/NavBar.css';

import CosmicLogo from './images/cosmic_logo.png';
const signup_url = "https://forms.gle/o7JiHavvevEPctW96";

// Module for navigating between the web pages
const NavBar = () => {
    return (
        <Navbar className="cosmic-header" variant="dark" expand="lg">
            
            <Container style={{marginLeft: "10px"}}>
                <img src={CosmicLogo} alt="Cosmic Logo" style={{width: "75px", marginRight: "200px"}}/>
                
                <Navbar.Brand style={{ fontFamily: 'SpaceAge' }}>CoSMiC</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between">
                    {/* Centered Navigation Links */}
                    <Nav className="mx-auto align-items-center">
                        <Nav.Item className="d-flex align-items-center">
                            <Link className="nav-link" to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                                Home
                            </Link>

                            <span className="divider">|</span>
                            {/* <a
                                href={signup_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "#FFFFFF" }}
                            >
                                Sign Up
                            </a> */}

                            <Link className="nav-link" to="/signup" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                                Sign Up
                            </Link>

                            <span className="divider">|</span> 

                            <Link className="nav-link" to="/tourism" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                                Ames Tourism
                            </Link>

                            <span className="divider">|</span>

                            <Link className="nav-link" to="/faq" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                                FAQ
                            </Link>
                            
                        </Nav.Item>
                    </Nav>

                    {/* Discord Button aligned to the far right */}
                    <Nav>
                        <Nav.Item>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <i
                                    className="cosmic-icon bi bi-discord"
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
