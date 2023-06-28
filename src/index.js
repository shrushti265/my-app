import React from "react";
import { createRoot } from "react-dom/client";
import { HistoryContextProvider, LikeProvider, StoreProvider } from "./context";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./context";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
      <LikeProvider>
        <WatchLaterProvider>
          <HistoryContextProvider>
            <App />
          </HistoryContextProvider>
        </WatchLaterProvider>
      </LikeProvider>
      </StoreProvider>
    </Router>
  </React.StrictMode>
);
