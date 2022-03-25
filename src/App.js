import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Album from "./components/Album";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/album/:id" element={<Album />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
