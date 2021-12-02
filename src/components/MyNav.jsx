import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>MusicApp</Navbar.Brand>
        </Link>{" "}
        <Form className="d-flex ">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <button>Search</button>
        </Form>
      </Container>
    </Navbar>
  </>
);

export default MyNav;
