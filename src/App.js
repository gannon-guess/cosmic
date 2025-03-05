import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import FAQ from "./FAQ.js";
import Footer from "./Footer.js";
import Signup from "./Signup.js";
import Tourism from "./TeamStatus.js";
import Livestream from "./Livestream.js";
import TeamStatus from "./TeamStatus.js"; 
import Rulebook from "./Rulebook.js";

import "./components/Global.css";
import Sponsorship from "./Sponsorship.js";
import lunarsurface from './images/lunar_surface.jpg';
import earth_from_moon from './images/earth_from_moon.jpg';

function App() {
    useEffect(() => {
        if (window.location.search) {
            const path = window.location.search.replace('?', '');
            window.history.replaceState(null, '', path);
        }

        // Preload background images
        const images = [lunarsurface, earth_from_moon];
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <div className="app-container">
            <HashRouter basename="/">
                <NavBar />
                <div className="content-wrapper">
                    <main className="main-content">
                        <Routes>
                            <Route index element={<Main />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="faq" element={<FAQ />} />
                            <Route path="tourism" element={<Tourism />} />
                            <Route path="livestream" element={<Livestream />} />
                            <Route path="teamstatus" element={<TeamStatus />} />
                            <Route path="rulebook" element={<Rulebook />} />
                            <Route path="sponsor" element={<Sponsorship />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
