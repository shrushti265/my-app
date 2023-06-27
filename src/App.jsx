import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Searchbar } from "./components/index";
import { Home, LikedPage, WatchLaterPage} from "./pages/index"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/like" element = {<LikedPage />}></Route>
        <Route path="/watchlater" element={<WatchLaterPage />} />
      </Routes>
    </div>
  );
}

export default App;
