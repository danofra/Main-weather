import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

function LoginComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Accedi</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Entra nel nostro mondo!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mx-3 px-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Inserisci E-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Inserisci Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Aspetta, sei un umano?" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Accedi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginComponent;
