import { Modal, Button } from "react-bootstrap";

const ImageModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div style={{ background: "rgb(48, 47, 47)" }}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
              Album List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-grid justify-content-center"></Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
