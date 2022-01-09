import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Heading2 } from "../../pages/_app";
import Lightbox from "react-image-lightbox";

const LeavesLeftImage = "/images/leaves-left.png";
const LeavesRightImage = "/images/leaves-right.png";
const FiveR = "/images/adat-1.jpeg";
const FiveR1 = "/images/adat-2.jpeg";
const FiveR2 = "/images/adat-3.jpeg";
const FiveR3 = "/images/adat-4.jpeg";
const FiveR4 = "/images/pdu-1.jpeg";
const FiveR5 = "/images/pdu-2.jpeg";
const FiveR6 = "/images/pdu-3.jpeg";
const FiveR7 = "/images/pdu-4.jpeg";

const galleries = [
  FiveR,
  FiveR1,
  FiveR2,
  FiveR3,
  FiveR4,
  FiveR5,
  FiveR6,
  FiveR7,
];

const Section = styled.section`
  background-color: rgba(109, 148, 142, 0.2);
  padding-top: 8rem;
  padding-bottom: 10rem;
`;

export const GalleryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <Section id="gallery">
        <div
          className="d-flex justify-content-center mb-4"
          data-aos="flip-left"
        >
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
              data-aos-delay={(index + 1) * 100}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                alt={gallery}
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
      {isOpen && (
        <Lightbox
          mainSrc={galleries[photoIndex]}
          nextSrc={galleries[(photoIndex + 1) % galleries.length]}
          prevSrc={
            galleries[(photoIndex + galleries.length - 1) % galleries.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex(
              (photoIndex + galleries.length - 1) % galleries.length
            );
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % galleries.length);
          }}
        />
      )}
    </>
  );
};
