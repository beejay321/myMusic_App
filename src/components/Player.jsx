import { Image, Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/styles.css";

const Player = ({ selectedAlbum, selectedSong, playing, setPlaying, previousSong, nextSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    console.log("playsong");
    let audio = new Audio(song.preview);
    audio.play();
    setIsPlaying(true);
  };
  const playPrevious = (song) => {
    console.log("playprevious");
    let audio = new Audio(song.preview);
    audio.play();
    setIsPlaying(true);
  };
  const playNext = (song) => {
    console.log("playnext");
    let audio = new Audio(song.preview);
    audio.play();
    setIsPlaying(true);
  };

  const pauseSong = (song) => {
    console.log("pausesong");
    // setIsPlaying(false);
    let audio = new Audio(song.preview);
    audio.pause();
    setIsPlaying(false);
    setPlaying(false);
  };

  return (
    <>
      <Container fluid className="player py-3 ">
        <Row className="mt-2">
          {selectedAlbum && (
            <>
              <Col xs={3} className="songTitle d-flex  gap-3 align-items-center ">
                <Image className="mx-2" src={selectedAlbum.cover_small} />
                {selectedSong && (
                  <div className="d-grid">
                    <span className="songTitle " style={{ color: "white" }}>
                      {selectedSong.title}
                    </span>
                    <span className="songArtist " style={{ color: "white" }}>
                      {selectedSong.artist.name}
                    </span>
                  </div>
                )}
              </Col>
              <Col xs={7} className=" d-flex pt-1 px-4">
                <div className="playerControls gap-5 d-flex  ">
                  <span>
                    <i className="bi bi-shuffle"></i>
                  </span>{" "}
                  <span onClick={() => playPrevious(previousSong)}>
                    <i className="bi bi-skip-backward-fill"></i>
                  </span>{" "}
                  {playing || isPlaying ? (
                    <span onClick={() => pauseSong(selectedSong)}>
                      <i className="bi bi-pause-circle-fill"></i>
                    </span>
                  ) : (
                    <span onClick={() => playSong(selectedSong)}>
                      <i className="bi bi-play-circle-fill"></i>
                    </span>
                  )}
                  <span onClick={() => playNext(nextSong)}>
                    <i className="bi bi-skip-forward-fill"></i>
                  </span>{" "}
                  <span>
                    <i className="bi bi-arrow-repeat"></i>
                  </span>{" "}
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Player;
