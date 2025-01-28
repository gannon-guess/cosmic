import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./Views.js"
import NavBar from "./NavBar.js";
import Main from "./Main.js"
import FAQ from "./FAQ.js"
import Footer from "./Footer.js"

import "./components/Global.css";

function App()
{
    // we need a viewer to pick which  page to display at any given time
    const [viewer, setViewer] = useState(View.MAIN); // 

    // we display the page based on viewer for module, single page development
    return(
        <BrowserRouter>
            <NavBar />
            <main>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="faq" element={<FAQ />} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
        
    );
}

export default App;