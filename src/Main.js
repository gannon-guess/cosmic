import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

// import View from "./Views.js";

import "./components/Global.css";
import "./components/Main.css";
import "./components/Fonts.css";

import howe from './images/howe.jpeg';
import lunarsurface from './images/lunar_surface.jpg';
import howe_basement from './images/howe_basement.png';
import schedule from './images/schedule.png';
import sictr from './images/sictr.jpeg';
import sictr_floorplan from './images/sictr_floorplan.png';

// Import the model-viewer script
import { useEffect } from 'react';

// module for the main page
function Main({ viewer, setViewer }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        document.head.appendChild(script);
    }, []);

    const campus_content = [
        { image: howe, text: "Howe Hall" },
        { image: howe_basement, text: "Howe Hall Floor Plan" },
        { image: sictr, text: "Student Innovation Center" },
        { image: sictr_floorplan, text: "Student Innnovation Center Floor Plan" }
    ];

    return (
        <div className="background-image" style={{ paddingBottom: "90px", position: "relative", display: "flex" }}>
            {/* Left and Right Image Section */}
            <div style={{ flex: "1" }}>
            </div>

            {/* Center Content Section */}
            <div style={{ flex: "2.25", padding: "0 0px", backgroundColor: "rgb(255, 255, 255)" }}>
                {/* Header Section */}
                <header className="cosmic-background text-white text-center py-4" style={{ fontFamily: 'SpaceAge', margin: "0 auto" }}>
                    <h1>Collegiate Space Mining Competition</h1>
                </header>

                {/* Main Content Section */}
                <main className="container my-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h2 style={{ fontSize: '1.5em' }}>What is CoSMiC?</h2>
                            <p style={{ fontSize: '1.2em' }}>
                                The Collegiate Space Mining Competition, or CoSMiC, is an oportunity for schools in the US to compete head-to-head in a national lunar robot competition. This competition will be hosted on Iowa State University's campus from May 21 to 24, 2025. </p>

                            <p style={{ fontSize: '1.2em' }}>
                                The competition will consist of 15 teams each granted two 30 minute runs to mine and transport lunar regolith in a simulated lunar environment.
                            </p>

                            <div>
                                <h3 style={{ fontSize: '1.5em' }}>How to Attend</h3>
                                <p style={{ fontSize: '1.2em' }}>
                                    The competition dates are May 22nd to May 24th on Iowa State University's Campus. We would like to invite you to attend as a spectator on site or via livestream. To view the livestream navigate to the Livestream tab at the top of the site.
                                </p>

                            </div>
                            {/* Add the 3D model viewer */}
                            <div style={{ marginTop: '30px', marginBottom: '50px' }}>
                                <h3 style={{ fontSize: '1.4em' }}>Arena Design</h3>
                                <model-viewer src="/files/arena.glb"
                                    alt="3D Model"
                                    auto-rotate
                                    camera-controls
                                    style={{ width: '100%', height: '600px', backgroundColor: 'lightgrey' }}>
                                </model-viewer>
                            </div>

                            {/* Option to embed rulebook in page */}
                            {/* <embed src="/files/CoSMiCguidebook-2025-Rev1.pdf" width="500" height="375" type="application/pdf"></embed> */}

                            <div style={{ marginTop: '30px' }}>
                                <h3 style={{ fontSize: '1.4em' }}>Connect With Us</h3>
                                <p style={{ fontSize: '1.2em' }}>If you have any questions, feel free to join our official Discord channel.</p>

                            </div>

                            <h3 style={{ fontSize: '1.4em' }}>Schedule</h3>
                            <div className="content-image">
                                <img src={schedule} alt={`Schedule`} />
                            </div>
                            <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                                <h3 style={{ fontSize: '1.4em' }}>Rule Book</h3>
                                <a href="/files/CoSMiCguidebook-2025-Rev1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                    Open CoSMiC Rulebook
                                </a>
                            </div>
                            {/* Discord Icon Link */}
                            {/* <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <i className="cosmic-icon bi bi-discord" style={{ fontSize: '50px', marginLeft: '20px'}}></i>
                            </a> */}
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.4em' }}>CoSMiC Facilities</h3>
                                {campus_content.map((item, index) => (
                                    <div
                                        className={`content-section ${index % 2 === 0 ? "left-right" : "right-left"}`}
                                        key={index}
                                    >
                                        <div className="content-text">
                                            <p style={{ fontSize: '1.2em' }}>{item.text}</p>
                                        </div>
                                        <div className="content-image">
                                            <img src={item.image} alt={`${index + 1}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </main>
            </div>

            <div style={{ flex: "1" }}>
            </div>
        </div>
    );
}

export default Main