import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <MyNav />
        <Home />
      </Router>
    </>
  );
};

export default App;
