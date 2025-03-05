import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import lunarsurface from './images/lunar_surface.jpg';

import { Button } from 'react-bootstrap';

function FAQ({ setPage }) {
    const [questions, setQuestions] = useState([]);

    // we need a function for returning to main
    const onMain = () => {
        setPage("MAIN");
    };

    // we obtain the FAQ questions when this function is called
    useEffect(() => {
        const fetchData = async () => {
            const someResponse = await fetch("./faq.json");
            const data = await someResponse.json();

            // we set questions variable based on the json so that they can be displayed
            setQuestions(data);
            console.log(data);
        };
        fetchData();
    }, []);

    // here we map the FAQ data to their own cells for display
    const listQuestions = questions.map((question, index) => (
        <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"  // Expand the first item by default

                >
                    <strong>{question.question}</strong>
                </button>
            </h2>
            <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse`} // Show the first item by default
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
            >
                <div className="accordion-body">
                    {question.answer}
{question.image && <img src={question.image} alt={question.image} style={{ width: '100%', marginTop: '10px' }} />}
                </div>
            </div>
        </div>
    ));


    return (
        <div style={{ paddingBottom: "90px", position: "relative", backgroundImage: `url(${lunarsurface})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", height: "100vh" }}>
            <div style={{ flex: "1" }}>
            </div>
            <div style={{ flex: "2.25", padding: "0 0px", backgroundColor: "rgb(255, 255, 255)" }}>
                {/* Header Section */}
                <header className="cosmic-background text-white text-center py-4" style={{ margin: "0 auto" }}>
                    <h1>Frequently Asked Questions</h1>
                </header>
                <main className="container my-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            {/* FAQ Section */}
                            <div className="accordion" id="faqAccordion">
                                {listQuestions}
                            </div>
                            {/* Button to return to main page */}
                            <div className="text-center mt-4" style={{ marginBottom: "20px" }}>
                                <Button onClick={onMain} variant="danger">
                                    Back to Main Page
                                </Button>
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

export default FAQ;