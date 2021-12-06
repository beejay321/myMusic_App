import { Image, Container, Row, Col } from "react-bootstrap";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/styles.css";

const Player = () => {
  return (
    <div>
      <Container>
        <Row className="">
          <>
            <Col xs={4} className="songTitle d-flex  gap-3 align-items-center ">
              <Image className="" src="" />
              <p style={{ color: "white" }}>song title</p>
            </Col>
            <Col xs={4} className=" d-flex pt-2 px-5">
              <div className="playerControls gap-5 d-flex  ">
                <i class="bi bi-shuffle"></i>
                <i class="bi bi-skip-backward-fill"></i>
                <i class="bi bi-play-circle-fill"></i> <i class="bi bi-pause-circle-fill"></i>
                <i class="bi bi-skip-forward-fill"></i>
                <i class="bi bi-arrow-repeat"></i>
              </div>
            </Col>
            <Col xs={3}></Col>
          </>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
