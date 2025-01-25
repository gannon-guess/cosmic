import React from "react";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import View from "./Views.js";

import { changeView } from "./constants.js";

// This defines the google doc to be embedded for the user to fill out
const signup_url = "https://forms.gle/o7JiHavvevEPctW96";

function Signup({ viewer, setViewer }) {

    return (
        <div> 
            <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="container p-5 bg-white shadow-lg rounded">
                    <h1 className="text-center mb-4 text-primary">CoSMiC Signup</h1>

                    <a
                        href={signup_url}
                        target="_blank" // Opens link in a new tab
                        rel="noopener noreferrer" // Prevents security risks
                        >
                        Signup Form
                    </a>

                    {/* DOES NOT WORK BECAUSE OUR FORM REQUIRES FILE UPLOAD
                        LEAVING IN CASE WORK AROUND IS FOUND
                    */}
                    {/* Google Form Embedded in an iframe */}
                    {/* <div className="embed-responsive embed-responsive-16by9 mb-4">
                        <iframe 
                            src={signup_url} 
                            width="100%" 
                            height="600" 
                            frameBorder="0" 
                            marginHeight="0" 
                            marginWidth="0"
                            title="CoSMiC Signup Form"
                            className="embed-responsive-item rounded"
                        >
                            Loading…
                        </iframe>
                    </div> */}

                    {/* Back to Main Page Button */}
                    <div className="text-center">
                        <Button onClick={() => changeView(viewer, setViewer, View.MAIN)} variant="primary" className="mt-4">
                            <i className="bi bi-arrow-left-circle me-2"></i>Back to Main Page
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;