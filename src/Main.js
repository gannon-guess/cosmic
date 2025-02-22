import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

// import View from "./Views.js";
import { discord_link, changeView } from "./constants.js";
import { Button } from 'react-bootstrap';

import "./components/Global.css";
import "./components/Main.css";
import "./components/Fonts.css";
import { signup_url } from "./constants.js";

import arena1 from './images/arena1.png';
import arena2 from './images/arena2.png';
import howe from './images/howe.jpeg';
import howe_basement from './images/howe_basement.png';
import filter from './images/filter.jpeg';
import mask from './images/mask.jpeg';
import ppe from './images/ppe.jpeg';
import schedule from './images/schedule.png';
import sictr from './images/sictr.jpeg';
import sictr_floorplan from './images/sictr_floorplan.png';


// module for the main page
function Main( { viewer, setViewer } ) {
    const campus_content = [
        { image: howe, text: "Howe Hall" },
        // { image: howe_basement, text: "This is some text for image 2." },
        { image: howe_basement, text: "Howe Hall Floor Plan" },
        { image: sictr, text: "Student Innovation Center" },
        // { image: sictr_floorplan, text: "This is some text for image 3." },
        { image: sictr_floorplan, text: "Student Innnovation Center Floor Plan" }
    ];
    const schedule_content = [
        { image: schedule, text: "Event Schedule" }
    ];
    
    const floorplan_content = [
        { image: howe_basement, text: "Howe Hall Floor Plan" },
        { image: sictr_floorplan, text: "Student Innnovation Center" }
    ];

    return (
        <div style={{paddingBottom: "90px"}}> 
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

                        <div>
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
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <h3>Rule Book</h3>
                            <a href="/files/CoSMiCguidebook-2025-Rev1.pdf" target="_blank" rel="noopener noreferrer">
                                Open CoSMiC Rulebook
                            </a>
                        </div>
                        {/* <embed src="/files/CoSMiCguidebook-2025-Rev1.pdf" width="500" height="375" type="application/pdf"></embed> */}

                        <div style={{marginTop:'30px'}}>
                            <h3 >Connect With Us</h3>
                            <p>If you have any questions, feel free to join our official Discord channel.</p>

                        </div>
                        
                        <h3>Schedule</h3>
                        <div className="content-image">
                            
                            <img src={schedule} alt={`Schedule`} />
                        </div>
                        
                        {/* Discord Icon Link */}
                        {/* <a href={discord_link} target="_blank" rel="noopener noreferrer">
                            <i className="cosmic-icon bi bi-discord" style={{ fontSize: '50px', marginLeft: '20px'}}></i>
                        </a> */}
                        <div style={{padding: '30px'}}>
                            <h3>CoSMiC Facilities</h3>
                            {campus_content.map((item, index) => (
                                <div
                                    className={`content-section ${index % 2 === 0 ? "left-right" : "right-left"}`}
                                    key={index}
                                >
                                    <div className="content-text">
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="content-image">
                                        <img src={item.image} alt={`Image ${index + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main