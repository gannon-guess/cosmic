import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}
export default App;
