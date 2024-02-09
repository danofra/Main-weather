import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const CardComponent = (city) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  let ico = `http://openweathermap.org/img/w/${city.data.weather[0].icon}.png`;
  return (
    <>
      <Col
        xs={12}
        sm={8}
        md={6}
        lg={3}
        className="d-flex justify-content-center m-5"
      >
        <Card className="scale w-75 h-100 d-flex flex-column justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={ico}
            style={{ height: "100px", width: "100px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">
              {city.data.name}, {city.data.sys.country}
            </Card.Title>
            <Card.Text>{city.data.weather[0].description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Temperatura minima: {city.data.main.temp_min} °C
            </ListGroup.Item>
            <ListGroup.Item>
              Temperatura massima: {city.data.main.temp_max} °C
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="d-flex justify-content-center">
            <Card.Link className="btn  btn-primary" onClick={handleShowModal}>
              <i className="bi bi-ticket-detailed"> Dettagli</i>
            </Card.Link>
            <Card.Link className="btn  btn-warning">
              <i className="bi bi-star"> Preferito</i>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      {/* Modal 1: Details*/}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{city.data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            src={ico}
            className="text-center"
            style={{ height: "100px", width: "100px" }}
          />
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Descrizione: {city.data.weather[0].description}
            </ListGroup.Item>
            <ListGroup.Item>Latitudine: {city.data.coord.lat} °</ListGroup.Item>
            <ListGroup.Item>
              Longitudine: {city.data.coord.lon} °
            </ListGroup.Item>
          </ListGroup>
          <Card.Text className="h3 text-center text-primary">
            Specifiche
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Temperatura: {city.data.main.temp} °C
            </ListGroup.Item>
            <ListGroup.Item>
              Temperatura minima: {city.data.main.temp_min} °C
            </ListGroup.Item>
            <ListGroup.Item>
              Temperatura massima: {city.data.main.temp_max} °C
            </ListGroup.Item>
            <ListGroup.Item>
              Pressione: {city.data.main.pressure} nPa
            </ListGroup.Item>
            <ListGroup.Item>
              Udimità: {city.data.main.temp_max} %
            </ListGroup.Item>
            <ListGroup.Item>
              Velocità del vento: {city.data.wind.speed} km/h
            </ListGroup.Item>
            <ListGroup.Item>
              Direzione del vento: {city.data.wind.deg} deg
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="d-flex justify-content-around mt-3">
            <Card.Link className="btn btn-primary">
              <i className="bi bi-ticket-detailed"> Dettagli</i>
            </Card.Link>
            <Card.Link className="btn btn-warning">
              <i className="bi bi-star"> Preferiti</i>
            </Card.Link>
          </Card.Body>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardComponent;
