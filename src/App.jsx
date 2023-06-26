import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Searchbar } from "./components/index";
import { Home } from "./pages/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
