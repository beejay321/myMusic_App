import { Modal, Image, Table, Button } from "react-bootstrap";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/styles.css";
import Player from "./Player";

const ImageModal = ({ show, onHide, selectedAlbum }) => {
 
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div style={{ background: "rgb(48, 47, 47)" }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
              Album List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-grid justify-content-center">
            {selectedAlbum && (
              <>
                <Image className="d-block w-100" src={selectedAlbum.cover_big} />
                <div className=" py-3 d-grid ">
                  <Table striped bordered hover>
                    <tbody className="tableBorders">
                      {selectedAlbum.tracks.data.map((track) => (
                        <tr className=" tableBorders py-3" >
                          <td className="px-3 py-3 tableBorders" style={{ color: "white" }}>
                            <i class="bi bi-heart"></i>
                          </td>
                          <td className="py-3 tableBorders" style={{ color: "white" }}>
                            {track.title}
                          </td>
                          <td className="py-3 px-3" style={{ color: "white" }}>
                            {track.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </>
            )}
          </Modal.Body>
          
          <Modal.Footer ><Button onClick={onHide}>Close</Button></Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
