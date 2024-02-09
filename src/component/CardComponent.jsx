import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardComponent = (city) => {
  let ico = `http://openweathermap.org/img/w/${city.data.weather[0].icon}.png`;
  const [details, setDetails] = useState("");
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
          <Card.Body
            className="d-flex justify-content-center"
            onChange={(e) => setDetails(e.target.value)}
          >
            <Link to={`/${details}`} className="btn  btn-primary card-link ">
              <i className="bi bi-ticket-detailed"></i>
            </Link>
            <Card.Link className="btn  btn-warning">
              <i className="bi bi-star"></i>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
