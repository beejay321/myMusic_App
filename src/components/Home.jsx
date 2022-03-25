import { Container, Row, Col, Image, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [artist, setArtist] = useState([]);
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const onMount = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=rock`);
        if (response.ok) {
          let result = await response.json();
          console.log(result.data);
          setArtist(result.data);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    onMount();
  }, []);

  const search = async (query) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        let result = await response.json();
        console.log(result.data);
        setArtist(result.data);
      }
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  const handleSelectedAlbum = (album) => {
    navigate(`/album/${album.album.id}`, { replace: true });
  };

  return (
    <>
      <Container fluid className="home">
        <Row className="d-flex justify-content-end">
          <Form className="search d-flex mx-2 py-3  ">
            <FormControl
              type="search"
              placeholder="What are you looking for?"
              className="searchForm me-2 "
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())}
            />
            <Button className="searchBtn " onClick={() => search(query)} variant="outline-success">
              Search
            </Button>
          </Form>
        </Row>
        <Row className=" m-1 ">
          {artist &&
            artist.map((album, i) => (
              <Col key={i} xs={10} sm={6} xl={2} className="my-1  px-0 d-grid justify-content-center ">
                <div className="albumDiv mx-1" onClick={() => handleSelectedAlbum(album)}>
                  <Image className="cover " src={album.album.cover_big} rounded />
                  <p className="coverTitle px-2  py-3 ">{album.album.title}</p>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default Home;
