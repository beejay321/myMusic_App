import { Container, Row, Col, Image, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import Category from "./Category";

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
            <Button className="searchBtn" onClick={() => search(query)} variant="outline-success">
              Search
            </Button>
          </Form>
        </Row>
        <Row className="m-1">
          {albumsLoaded && <Category title="Search Results" searchResult={artist} />}
          <Category title="ROCK" genre="Rock" />
          <Category title="AFRO" genre="Afro" />
          <Category title="REGGAE" genre="Reggae" />
        </Row>
      </Container>
    </>
  );
};
export default Home;
