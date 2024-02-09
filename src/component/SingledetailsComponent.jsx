import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

const DetailsComponent = (details) => {
  let ico = `http://openweathermap.org/img/w/${details.data.weather[0].icon}.png`;
  return (
    <>
      <Col
        xs={12}
        sm={8}
        md={6}
        lg={3}
        className="d-flex justify-content-center m-5"
      >
        <Card className="scale w-75 h-100">
          <Card.Img variant="top" src={ico} />
          <Card.Body>
            <Card.Title className="text-center">
              {details.data.name}, {details.data.sys.country}
            </Card.Title>
            <Card.Text>{details.data.weather[0].description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Temperatura minima: {details.data.main.temp_min} °C
            </ListGroup.Item>
            <ListGroup.Item>
              Temperatura massima: {details.data.main.temp_max} °C
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="d-flex justify-content-center">
            <Card.Link className="btn  btn-primary">
              <i className="bi bi-ticket-detailed"></i>
            </Card.Link>

            <Card.Link className="btn  btn-warning">
              <i className="bi bi-star"></i>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DetailsComponent;
