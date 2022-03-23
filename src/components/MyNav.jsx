import { Navbar, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>MyMusic</Navbar.Brand>
          </Link>{" "}
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
