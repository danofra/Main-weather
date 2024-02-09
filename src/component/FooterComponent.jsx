import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../data/img/footer.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";

function FooterComponent() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-start align-items-center">
          <Col
            sm={6}
            md={2}
            className="d-flex justify-content-start p-0 offset-2"
          >
            <div className="p-2">
              <i className="fs-3 bi bi-facebook"></i>
            </div>
            <div className="p-2">
              <i className="fs-3 bi bi-instagram"></i>
            </div>
            <div className="p-2">
              <i className="fs-3 bi bi-twitter-x"></i>
            </div>
            <div className="p-2">
              <i className="fs-3 bi bi-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-start align-items-center">
          <Col sm={6} md={2}>
            <Image src={Footer} width={"100%"} />
          </Col>
          <Col sm={6} md={2}>
            <p>Home</p>
            <p>Città</p>
            <p>Contatti</p>
          </Col>
          <Col sm={6} md={2}>
            <p>Accedi</p>
            <p>Cookie</p>
            <p>Legal Notices</p>
          </Col>
        </Row>
        <div className="p-2 text-center bg-body-tertiary">
          <p>
            By Liborio Daniele Frasca &copy; 2023-{new Date().getFullYear()}{" "}
          </p>
        </div>
      </Container>
    </>
  );
}
export default FooterComponent;
