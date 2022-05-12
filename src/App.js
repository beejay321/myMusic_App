import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Album from "./components/Album";
import Sidebar from "./components/Sidebar";
import "./App.css";



const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="d-flex">
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
            {/* <Sidebar /> */}
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
