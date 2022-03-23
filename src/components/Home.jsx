import { Container, Row, Col, Image, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

const Home = () => {
  const [artist, setArtist] = useState([]);
  const [query, setQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(artist[0]);

  useEffect(() => {
    const onLoad = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`);
        if (response.ok) {
          let result = await response.json();
          setArtist(result.data);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    onLoad();
  }, []);

  const getArtist = async (query) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        let result = await response.json();
        setArtist(result.data);
      }
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  const getAlbum = async (album) => {
    let id = album.album.id;

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/` + id);
      if (response.ok) {
        let result = await response.json();
        setSelectedAlbum(result);
      }
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  const handleSelectedAlbum = (album, index) => {
    setModalShow(true);
    getAlbum(album);
  };

  return (
    <>
      <Container fluid>
        <Form className="d-flex mx-3 py-3">
          <FormControl type="search" placeholder="Search By Artist" className="me-2" aria-label="Search" value={query} onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} />
          <Button onClick={() => getArtist(query)} variant="outline-success">
            Search
          </Button>
        </Form>

        <Row className=" m-1 ">
          {artist &&
            artist.map((album) => (
              <Col xs={10} sm={6} xl={4} className="my-1  px-0 d-flex justify-content-center ">
                <div className="coverDiv">
                  <Image className="cover d-flex justify-content-center" src={album.album.cover_big} rounded onClick={() => handleSelectedAlbum(album)} />
                </div>
              </Col>
            ))}
        </Row>

        <ImageModal show={modalShow} onHide={() => setModalShow(false)} selectedAlbum={selectedAlbum} />
      </Container>
    </>
  );
};
export default Home;
