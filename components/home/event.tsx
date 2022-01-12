import React from "react";
import Image from "next/image";
import { Button, Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const FlowerImage = "/images/flower.png";

const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
`;
const CardBox = styled(Card)`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const CardSubtitle = styled(Card.Subtitle)`
  font-family: "Quicksand Bold Oblique";
`;
const BtnMap = styled(Button)`
  cursor: pointer;
  background: #f5e2e4;
  color: black;
  font-weight: 700;
  border: none;
  font-size: 20px;
  border-radius: 20px;
`;

export const EventComponent = () => (
  <section id="event" className="mt-4">
    <div className="d-flex align-items-center flex-column mb-5">
      <Image src={FlowerImage} alt="Flower" width={250} height={100} />
    </div>
    <Row className="g-0 justify-content-center mt-5 text-center px-2">
      <Col lg={5} className="pb-2">
        <CardBox>
          <Card.Body>
            <Card.Title>
              <Heading2>Akad Nikah</Heading2>
            </Card.Title>
            <CardSubtitle className="my-3">
              Sabtu, 5 Maret 2022
              <br />
              08.00 - 09:00 WIB
            </CardSubtitle>
            <Card.Text>
              Yon Arhanud 1 Kostrad Pakualam, Serpong Utara, Tangerang, Banten
              15325
            </Card.Text>
          </Card.Body>
        </CardBox>
      </Col>
      <Col lg={{ span: 5, offset: 1 }}>
        <CardBox>
          <Card.Body>
            <Card.Title>
              <Heading2>Resepsi</Heading2>
            </Card.Title>
            <CardSubtitle className="my-3">
              Sabtu, 5 Maret 2022
              <br />
              10.00 - 17:00 WIB
            </CardSubtitle>
            <Card.Text>
              Yon Arhanud 1 Kostrad Pakualam, Serpong Utara, Tangerang, Banten
              15325
            </Card.Text>
          </Card.Body>
        </CardBox>
      </Col>
    </Row>
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <BtnMap variant="secondary">
        <a
          href="https://goo.gl/maps/jN6Xa8YQZbiycAkv8"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          rel="noreferrer"
        >
          Buka Google Map
        </a>
      </BtnMap>
      <BtnMap variant="secondary mt-4">
        <a
          href="http://instagram.com/_u/eviidaamalia"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          rel="noreferrer"
        >
          Live streaming
        </a>
      </BtnMap>
    </div>
  </section>
);
