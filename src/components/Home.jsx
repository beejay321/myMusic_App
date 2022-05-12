import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Category from "./Category";
import Search from "./Search";

const Home = () => {
  const [artist, setArtist] = useState([]);
  const [query, setQuery] = useState("");
  const [albumsLoaded, setAlbumsLoaded] = useState(false);

  const search = async (query) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        let result = await response.json();
        console.log(result.data);
        let albums = result.data.slice(0, 24);
        setArtist(albums);
        setAlbumsLoaded(true);
      }
    } catch (error) {
      console.log("This is the error", error);
    }
  };

  return (
    <>
     
      <Container fluid className="homeBox">
        <Row className=" searchDiv d-flex justify-content-end">
          <Search query={query} setQuery={setQuery} search={search} />
        </Row>
        <Row className="home ">
          <Col>
            <Row className="m-1 categoryRows">
              {albumsLoaded && <Category title="Search Results" searchResult={artist} />}
              <Category title="ROCK" genre="Rock" />
              <Category title="AFRO" genre="Afro" />
              <Category title="REGGAE" genre="Reggae" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
