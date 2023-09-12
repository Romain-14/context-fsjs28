import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./store/user/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContextProvider>
        
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserContextProvider>
);
