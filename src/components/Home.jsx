import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-4 mx-5 ">
          <Col className="my-3  d-flex justify-content-center ">
            <div className="">
              <Image className="cover d-flex justify-content-center" src="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
