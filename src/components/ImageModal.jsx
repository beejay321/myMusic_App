import { Modal, Image, Table } from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/styles.css";
import Player from "./Player";

const ImageModal = ({ show, onHide, selectedAlbum }) => {
  const [selectedSong, setSelectedSong] = useState(selectedAlbum ? selectedAlbum.tracks.data[0] : "");

  // useEffect(() => {
  //   console.log(selectedSong);
  // }, []);

  return (
    <>
      {selectedAlbum && (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <div style={{ background: "rgb(48, 47, 47)" }}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
                Album List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-grid justify-content-center">
              <>
                <Image className="d-block w-100" src={selectedAlbum.cover_big} />
                <div className=" py-3 d-grid ">
                  <Table striped bordered hover>
                    <tbody className="tableBorders">
                      {selectedAlbum.tracks.data.map((track, index) => (
                        <tr key={index} className=" tableBorders py-3" onClick={() => setSelectedSong(track)}>
                          <td className="px-3 py-3 tableBorders" style={{ color: "white" }}>
                            <i className="bi bi-heart"></i>
                          </td>
                          <td className="py-3 tableBorders" style={{ color: "white" }}>
                            {track.title}
                          </td>
                          <td className="py-3 px-3" style={{ color: "white" }}>
                            {Math.floor(track.duration / 60)} : {track.duration - Math.floor(track.duration / 60) * 60}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </>
            </Modal.Body>
            <hr style={{ color: "white" }} />
            <div className="d-flex px-3 py-2 ">
              <Player selectedAlbum={selectedAlbum} selectedSong={selectedSong} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default ImageModal;
