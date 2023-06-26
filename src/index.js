import React from "react";
import {createRoot} from 'react-dom/client';
import {LikeProvider} from "./context/likeContext"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

createRoot(
  document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <LikeProvider>
      <App />
    </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>
)

