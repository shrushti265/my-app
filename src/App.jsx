import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Searchbar } from "./components/index";
import { Home, LikedPage, WatchLaterPage, HistoryPage, Playlist} from "./pages/index"


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
      </Routes>
    </div>
  );
}

export default App;
