import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import View from "./Views.js";
import { discord_link, changeView } from "./constants.js";
import { Button } from 'react-bootstrap';

import "./components/Global.css";
import "./components/Fonts.css";
import { signup_url } from "./constants.js";

// module for the main page
function Main( { viewer, setViewer } ) {
    

    return (
        <div> 
            {/* Header Section */}
            <header className="cosmic-background text-white text-center py-4" style={{ fontFamily: 'SpaceAge' }}>
                <h1>Collegiate Space Mining Competition</h1>
            </header>

            {/* Main Content Section */}
            <main className="container my-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2>About CoSMiC</h2>
                        <p>
                            The Collegiate Space Mining Competition, or CoSMiC, is an oportunity for schools in the US to compete head-to-head in a national lunar robot competition. This competition will be hosted at Iowa State University from May 21 to 24, 2025.
                        </p>

                        <h3>How to Participate</h3>
                        <p>
                            To sign up for CoSMiC, please fill out our Google form.
                        </p>
                        
                        <div>
                            <Button 
                                onClick={() => window.open(signup_url, '_blank')} 
                                variant="primary" 
                                className="mt-4"
                            >
                                Sign Up
                            </Button>
                        </div>

                        <h3 style={{marginTop:'30px'}}>Connect With Us</h3>
                        <p>If you have any questions, feel free to join our official Discord channel.</p>
                        
                        {/* Discord Icon Link */}
                        {/* <a href={discord_link} target="_blank" rel="noopener noreferrer">
                            <i className="cosmic-icon bi bi-discord" style={{ fontSize: '50px', marginLeft: '20px'}}></i>
                        </a> */}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main