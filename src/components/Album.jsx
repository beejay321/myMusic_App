import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Player from "./Player";

const Album = (props) => {
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedSong, setSelectedSong] = useState("");
  const [previousSong, setPreviousSong] = useState("");
  const [nextSong, setNextSong] = useState("");
  const [playing, setPlaying] = useState(false);

  let match = useMatch("/album/:id");

  let id = match.params.id;
  useEffect(() => {
    const getAlbum = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        if (response.ok) {
          let result = await response.json();
          console.log(result);
          setSelectedAlbum(result);
          setSelectedSong(result.tracks.data[0]);
        }
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    getAlbum();
  }, [id]);

  const playSong = (track, index) => {
    console.log(track, index);
    setSelectedSong(track);
    console.log("playsong");
    let audio = new Audio(track.preview);
    audio.play();
    setPlaying(true);
    getPreviousSong(track, index);
    getNextSong(track, index);
  };

  const getPreviousSong = (track, index) => {
    console.log(selectedAlbum.tracks.data[index]);
    if (selectedAlbum.tracks.data[index] === track && index > 0) {
      console.log(selectedAlbum.tracks.data[index - 1]);
      setPreviousSong(selectedAlbum.tracks.data[index - 1]);
    }else (setPreviousSong(track))
  };
  const getNextSong = (track, index) => {
    console.log(selectedAlbum.tracks.data[index]);
    if (selectedAlbum.tracks.data[index] === track) {
      console.log(selectedAlbum.tracks.data[index + 1]);
      setNextSong(selectedAlbum.tracks.data[index + 1]);
    }
  };

  return (
    <>
      {selectedAlbum && (
        <>
          <Container fluid style={{ background: "rgb(48, 47, 47)" }}>
            <Container className=" px-5 ">
              <Row className=" py-5 ">
                <Col xs={3}>
                  <div className="coverDiv">
                    <Image className="cover" src={selectedAlbum.cover_big} />
                  </div>{" "}
                </Col>
                <Col xs={8}>
                  <h4 className=" albumTitle pt-3 px-3 " style={{ color: "white" }}>
                    {selectedAlbum.title}
                  </h4>
                  <span className=" albumTitle pt-3 px-3 " style={{ color: "white" }}>
                    {selectedAlbum.tracks.data.length} songs
                  </span>
                  {/* <span className=" albumTitle pt-3 px-3 " style={{ color: "white" }}>
                  {Math.floor(selectedAlbum.duration / 60)} : {selectedAlbum.duration - Math.floor(selectedAlbum.duration / 60) * 60}
                  </span> */}
                </Col>
              </Row>
              <Row className=" py-3 ">
                <Col xs={1}>
                  <h5 className=" pt-3 px-3 " style={{ color: "white" }}>
                    #
                  </h5>{" "}
                </Col>
                <Col xs={6}>
                  <h5 className=" pt-3 px-3 " style={{ color: "white" }}>
                    Title
                  </h5>
                </Col>
                <Col xs={3}>
                  <h5 className=" pt-3 px-3 " style={{ color: "white" }}>
                    Duration
                  </h5>
                </Col>
              </Row>
              <div className=" py-3  ">
                {selectedAlbum.tracks.data.map((track, index) => (
                  <Row key={index} className=" tableBorders py-1" onClick={() => playSong(track, index)}>
                    <Col xs={1}>
                      <p className="  px-3 " style={{ color: "white" }}>
                        <i className="bi bi-heart"></i>
                      </p>{" "}
                    </Col>
                    <Col xs={6}>
                      <p className="  px-3 " style={{ color: "white" }}>
                        {track.title_short}
                      </p>
                    </Col>

                    <Col xs={3}>
                      <p className="  px-3 " style={{ color: "white" }}>
                        {Math.floor(track.duration / 60)} : {track.duration - Math.floor(track.duration / 60) * 60}
                      </p>
                    </Col>
                  </Row>
                ))}
              </div>
            </Container>
          </Container>

          <Player selectedAlbum={selectedAlbum} selectedSong={selectedSong} playing={playing} setPlaying={setPlaying} nextSong={nextSong} previousSong={previousSong} />
        </>
      )}
    </>
  );
};

export default Album;
