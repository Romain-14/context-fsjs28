import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextGlobalProvider from "./Context/Index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextGlobalProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextGlobalProvider>
);
