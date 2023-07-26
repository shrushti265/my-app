import React from "react";
import { createRoot } from "react-dom/client";
import {
  FilterProvider,
  HistoryContextProvider,
  LikeProvider,
  StoreProvider,
  PlaylistProvider,
  AuthProvider,
} from "./context/index";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WatchLaterProvider } from "./context/index";
// import landing1 from "./images/landing-1.png"
// export{logo,landing1}

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <PlaylistProvider>
        <FilterProvider>
          <StoreProvider>
            <LikeProvider>
              <WatchLaterProvider>
                <HistoryContextProvider>
                  <App />
                </HistoryContextProvider>
              </WatchLaterProvider>
            </LikeProvider>
          </StoreProvider>
        </FilterProvider>
      </PlaylistProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
