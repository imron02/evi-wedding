import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap';

const LeavesLeftImage = "/images/leaves-left.png";
const LeavesRightImage = "/images/leaves-right.png";
const FiveR = "/images/5R.jpg";
const FiveR1 = "/images/5R-1.jpg";
const FiveR2 = "/images/5R-2.jpg";
const FiveR3 = "/images/5R-3.jpg";
const FiveR4 = "/images/5R-4.jpg";
const FiveR5 = "/images/5R-5.jpg";

const galleries = [FiveR, FiveR1, FiveR2, FiveR3, FiveR4, FiveR5];

const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
  margin-top: 1.5rem;
  @media (max-device-width: 640px) {
    font-size: 2rem;
  }
`;
const Section = styled.section`
  background-color: rgba(109, 148, 142, 0.2);
  padding-top: 8rem;
  padding-bottom: 10rem;
`;

export const GalleryComponent = () => (
  <Section id="gallery">
    <div className="d-flex justify-content-center mb-4" data-aos="flip-left">
      <div className="d-none d-lg-block">
        <Image
          alt="leaves-left"
          src={LeavesLeftImage}
          width={100}
          height={100}
        />
      </div>
      <Heading2>Our Gallery</Heading2>
      <div className="d-none d-lg-block">
        <Image
          alt="leaves-right"
          src={LeavesRightImage}
          width={100}
          height={100}
        />
      </div>
    </div>
    <Row className="g-0 justify-content-center">
      {galleries.map((gallery, index) => (
        <Col
          xs={6}
          md={3}
          key={index}
          className="py-2 px-2"
          data-aos="zoom-in"
          data-aos-delay={(index + 1) * 100}>
          <Image
            alt="5R"
            src={gallery}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            className="rounded"
            quality={60}
          />
        </Col>
      ))}
    </Row>
  </Section>
);
