import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ genre, title, searchResult }) => {
  const [artist, setArtist] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const onMount = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}`);
        if (response.ok) {
          let result = await response.json();
          console.log(result.data);
          let albums = result.data.slice(0, 12);
          setArtist(albums);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    onMount();
  }, []);

  const handleSelectedAlbum = (album) => {
    navigate(`/album/${album.album.id}`, { replace: true });
  };

  return (
    <>
      <Container fluid className="home">
        {searchResult && (
          <Row className="m-1 py-3" style={{ minHeight: "200px" }}>
            <h1 style={{ color: "white" }}>{title} </h1>
            {searchResult.map((album, i) => (
              <Col key={i} xs={8} sm={6} md={4} lg={3} xl={2} className="my-1  px-0 d-grid justify-content-center ">
                <div className="albumDiv mx-1" onClick={() => handleSelectedAlbum(album)}>
                  <Image className="cover " src={album.album.cover_big} rounded />
                  <p className="coverTitle px-2  py-3 ">{album.album.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        )}
        <Row className="m-1 py-5" style={{ minHeight: "800px" }}>
          <h1 style={{ color: "white" }}>{title} </h1>
          {artist &&
            artist.map((album, i) => (
              <Col key={i} xs={8} sm={6} md={4} lg={3} xl={2} className="my-1  px-0 d-grid justify-content-center ">
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
export default Category;
