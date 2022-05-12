import { Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          let albums = result.data;
          // let albums = result.data.slice(0, 12);
          setArtist(albums);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    onMount();
  }, [genre]);

  const handleSelectedAlbum = (album) => {
    navigate(`/album/${album.album.id}`, { replace: true });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {searchResult && (
        <Row className="m-1 py-3 " style={{ minHeight: "300px" }}>
          <h1 style={{ color: "white" }}>{title} </h1>
          <Slider {...settings}>
            {searchResult.map((album, i) => (
              <Col key={i} xs={8} sm={6} md={4} lg={3} xl={2} className=" ">
                <div className="albumDiv mx-1 my-2" onClick={() => handleSelectedAlbum(album)}>
                  <Image className="cover " src={album.album.cover_big || "http://via.placeholder.com/80"} />
                </div>
                <div className="albumTitle mx-1">
                  <p className="coverTitle px-2  py-3 ">{album.album.title}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
      )}

      <h1 style={{ color: "white" }}>{title} </h1>
      <Slider {...settings}>
        {artist &&
          artist.map((album, i) => (
            <Col key={i} xs={8} sm={6} md={4} lg={3} xl={2} className=" ">
              <div className="albumDiv mx-1 my-2" onClick={() => handleSelectedAlbum(album)}>
                <Image className="cover " src={album.album.cover_big || "http://via.placeholder.com/80"} />
              </div>
              <div className="albumTitle mx-1">
                <p className="coverTitle px-2  py-3 ">{album.album.title}</p>
              </div>
            </Col>
          ))}
      </Slider>
    </>
  );
};
export default Category;
