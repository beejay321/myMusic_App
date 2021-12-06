import { Image, Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/styles.css";

const Player = ({ selectedAlbum, selectedSong }) => {
  const [playing, setPlaying] = useState(false);

  const playSong = (song) => {
    console.log("playsong");
    let audio = new Audio(song.preview);
    audio.play();
    setPlaying(true);
  };
  const pauseSong = (song) => {
    console.log("pausesong");
    setPlaying(false);
  };

  return (
    <div>
      <Container>
        <Row className="">
          {selectedAlbum && (
            <>
              <Col xs={4} className="songTitle d-flex  gap-3 align-items-center ">
                <Image className="" src={selectedAlbum.cover_small} />
                {selectedSong && (
                  <p className=" " style={{ color: "white" }}>
                    {selectedSong.title}
                  </p>
                )}
              </Col>
              <Col xs={4} className=" d-flex pt-2 px-5">
                <div className="playerControls gap-5 d-flex  ">
                  <span>
                    <i className="bi bi-shuffle"></i>
                  </span>{" "}
                  <span>
                    <i className="bi bi-skip-backward-fill"></i>
                  </span>{" "}
                  {playing ? (
                    <span onClick={() => pauseSong(selectedSong)}>
                      <i className="bi bi-pause-circle-fill"></i>
                    </span>
                  ) : (
                    <span onClick={() => playSong(selectedSong)}>
                      <i className="bi bi-play-circle-fill"></i>
                    </span>
                  )}
                  <span>
                    <i className="bi bi-skip-forward-fill"></i>
                  </span>{" "}
                  <span>
                    <i className="bi bi-arrow-repeat"></i>
                  </span>{" "}
                </div>
              </Col>
              <Col xs={3}></Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Player;
