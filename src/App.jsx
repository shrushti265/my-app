import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, PlainNav, RequireAuth, Searchbar } from "./components/index";
import { Home, LikedPage, WatchLaterPage, HistoryPage, Playlist, Login, Signup, LandingPage, SingleVideo} from "./pages/index"
import { VideosInPlaylist } from "./pages/playlistPage/videosInPlaylist";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "video-lib";
  }, []);
    
  return (
    <div className="App">
      {pathname === "/login" || pathname === "/signup" ? (
        <PlainNav />
      ):(
        <Navbar />
      )}
      <Searchbar />
      <Routes>
        <Route path="/videos" element={<Home />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/video/:videoId" element={<SingleVideo />} />

        <Route 
        path="/like" 
        element = {
          <RequireAuth>
            <LikedPage />
          </RequireAuth>
        } 
        />
        <Route 
        path="/watchlater" 
        element={
          <RequireAuth>
            <WatchLaterPage />
          </RequireAuth>
        } 
        />
        <Route 
        path="/history" 
        element={
          <RequireAuth>
            <HistoryPage />
          </RequireAuth>
        } 
        />
        <Route 
        path="/playlist" 
        element={
        <RequireAuth>
          <Playlist />
        </RequireAuth>
        }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/playlist/:id" element={<VideosInPlaylist/>}></Route>
      </Routes>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}

export default App;
