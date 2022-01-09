import React from "react";

import styled from "styled-components";
import Image from "next/image";
import { Heading2 } from "../../pages/_app";
import { Col, Row } from "react-bootstrap";

const MaskImage = "/images/mask.png";
const SocialDistanceImage = "/images/social-distance.png";
const NamasteImage = "/images/namaste.png";
const HandWashImage = "/images/hand-wash.png";

export const CovidText = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: underline;
  font-family: Quicksand, sans-serif;
  text-align: center;
`;
const Section = styled.section`
  width: 70%;
  margin: 0 auto;
`;
const Header = styled.p`
  @media (max-device-width: 640px) {
    font-size: 12px;
  }
`;
const Protocol = styled(Row)`
  @media (max-device-width: 640px) {
    font-size: 12px;
  }
`;

export const CovidInfoComponent = () => (
  <Section className="mt-3" data-aos="fade-up">
    <div className="d-flex justify-content-center">
      <Heading2>Informasi</Heading2>
    </div>
    <div>
      <Header className="text-center">
        Guna mencegah penyebaran COVID-19, diharapkan bagi tamu undangan unntuk
        mematuhi protokol kesehatan di bawah ini:
      </Header>
      <Protocol className="gy-0">
        <Col className="text-center">
          <Image src={MaskImage} alt="masker" width={80} height={80} />
          <br />
          <span>Gunakan Masker</span>
        </Col>
        <Col className="text-center">
          <Image
            src={SocialDistanceImage}
            alt="distance"
            width={80}
            height={80}
          />
          <br />
          <span>Jaga Jarak</span>
        </Col>
      </Protocol>
      <Protocol className="gy-0 mt-4">
        <Col className="text-center">
          <Image src={NamasteImage} alt="namaste" width={80} height={80} />
          <br />
          <span>Tidak Bersalaman</span>
        </Col>
        <Col className="text-center">
          <Image src={HandWashImage} alt="hand-wash" width={80} height={80} />
          <br />
          <span>Gunakan Handsanitizer</span>
        </Col>
      </Protocol>
    </div>
  </Section>
);
