import { Modal, Button,Image } from "react-bootstrap";

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
                <div className=" py-5 d-grid ">
                  {selectedAlbum.tracks.data.map((track) => (
                    <div className=" py-3 d-flex justify-content-between">
                      <span className="  d-flex justify-content-start" style={{ color: "white" }}>
                        {track.title}
                      </span>
                      <span style={{ color: "white" }}>{track.duration}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
