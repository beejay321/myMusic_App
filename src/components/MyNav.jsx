import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img alt="music_icon" src={logo} width="50" className="d-inline-block align-top mx-2 py-1 " />
              {/* MyMusic */}
            </Navbar.Brand>
          </Link>{" "}
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
