import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

const Home = () => {
  const [artist, setArtist] = useState();
  const [query, setQuery] = useState("eminem");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const getArtist = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
        console.log(response);
        if (response.ok) {
          let result = await response.json();
          console.log(result.data);
          setArtist(result.data);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getArtist("query");
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="mt-4 mx-5 ">
          {artist &&
            artist.map((album) => (
              <Col xs={10} sm={6} md={6} lg={4} xl={4} className="my-3  d-flex justify-content-center ">
                <div className="coverDiv">
                  <Image className="cover d-flex justify-content-center" src={album.album.cover_big} rounded onClick={() => setModalShow(true)} />
                </div>
              </Col>
            ))}
        </Row>
        <ImageModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
};
export default Home;
