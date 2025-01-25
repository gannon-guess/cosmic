import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Button } from 'react-bootstrap';
import View from "./Views.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

function FAQ({ viewer, setViewer }) {
    const [questions, setQuestions] = useState([]);

    // we need a function for returning to main
    const onMain = () => {
        setViewer(View.MAIN);
    };

    // we obtain the FAQ questions when this function is called
    useEffect(()=>{
        const fetchData = async () => {
            const someResponse = await fetch("./faq.json");
            const data = await someResponse.json();
            
            // we set questions variable based on the json so that they can be displayed
            setQuestions(data);
            console.log(data);
        };
        fetchData();
    },[]);

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
                    aria-controls={`collapse${index}`}
                >
                    {question.question}
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
                </div>
            </div>
        </div>
    ));
    

    return (
        <div>
            <NavBar
                viewer={viewer}
                setViewer={setViewer}
            />
            <div className="container my-5">
                <h1 className="text-center mb-4">Frequently Asked Questions</h1>

                {/* FAQ Section */}
                <div className="accordion" id="faqAccordion">
                    {listQuestions}
                </div>

                {/* Button to return to main page */}
                <div className="text-center mt-4">
                    <Button onClick={onMain} variant="secondary">
                        Back to Main Page
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FAQ;