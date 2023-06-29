import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Navbar, Searchbar } from "./components/index";
import { Home, LikedPage, WatchLaterPage, HistoryPage, Playlist, Login, Signup} from "./pages/index"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/like" element = {<LikedPage />}></Route>
        <Route path="/watchlater" element={<WatchLaterPage />} />
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
