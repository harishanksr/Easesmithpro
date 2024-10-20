import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

// Creating the root for rendering the App component
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App wrapped in BrowserRouter for routing
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
