import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import lunarsurface from './images/lunar_surface.jpg';
import schedule from './images/schedule.png';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

// Set up the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Rulebook() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const goToNextPage = (event) => {
        event.preventDefault();
        if (pageNumber < numPages) {
            const scrollY = window.scrollY; // Save current scroll position
            setPageNumber((prev) => prev + 1);
            setTimeout(() => window.scrollTo(0, scrollY), 0); // Restore scroll position after state update
        }
    };

    const goToPreviousPage = (event) => {
        event.preventDefault();
        if (pageNumber > 1) {
            const scrollY = window.scrollY;
            setPageNumber((prev) => prev - 1);
            setTimeout(() => window.scrollTo(0, scrollY), 0);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${lunarsurface})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Ensures footer stays at bottom
                alignItems: "center",
                minHeight: "180vh", // Ensures the whole viewport height is covered
                padding: "0px"
            }}
        >
            <header className="cosmic-background text-white text-center py-4" style={{ backgroundColor: "red", width: "50%", margin: "0 auto", position: "relative" }}>
                <h1>Rulebook</h1>
            </header>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    paddingTop: "0px",
                    height: "180vh",
                    width: "90vw",
                    maxWidth: "50%",
                    overflow: "hidden"
                }}
            >
                <Document
                    file="/files/CoSMiCguidebook-2025-Rev1.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageNumber={pageNumber}
                        height={window.innerHeight * 0.9} // Slightly reduce height for buttons
                    />
                </Document>
                <p style={{ color: "black", marginTop: "0px" }}>
                    Page {pageNumber} of {numPages}
                </p>

                <div style={{ marginBottom: "20px" }}>
                    <Button type="button" onClick={goToPreviousPage} disabled={pageNumber <= 1} variant="secondary" className="me-2">
                        Previous
                    </Button>
                    <Button type="button" onClick={goToNextPage} disabled={pageNumber >= numPages} variant="secondary">
                        Next
                    </Button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <p>
                        Or <a href="/files/CoSMiCguidebook-2025-Rev1.pdf" target="_blank" rel="noopener noreferrer">View Raw PDF Here</a>
                    </p>
                </div>
                <div style={{ marginBottom: "60px" }}>
                    <img src={schedule} alt="Schedule" style={{ width: '100%', maxWidth: '600px'}} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Rulebook;
