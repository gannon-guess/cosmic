import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./Views.js";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import FAQ from "./FAQ.js";
import Footer from "./Footer.js";
import Signup from "./Signup.js";
import Tourism from "./Tourism.js";

import "./components/Global.css";

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="tourism" element={<Tourism/>} />
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
