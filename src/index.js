import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js';
import "./components/Global.css";

// obtain the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// we need to call the App to render the initial page
root.render(
    <div>
        <App />
    </div>
);