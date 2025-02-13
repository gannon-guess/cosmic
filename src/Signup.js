import React from "react";
import { Button, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { signup_url } from "./constants.js";

function Signup() {
    return (
        <div className=" text-center py-5">
            <h2 className="mb-4">Sign Up for CoSMiC</h2>
            <Button 
                href={signup_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                size="lg" 
                className="px-4 py-2"
            >
                <i className="bi bi-pencil-square me-2"></i> Open Google Signup Form
            </Button>
            <>
            </>

        </div>
    );
}

export default Signup;