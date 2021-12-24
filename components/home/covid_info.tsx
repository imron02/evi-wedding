import React from "react";

import styled from "styled-components";
import Image from "next/image";
import {Heading2} from '../../pages/_app';
import {Col, Row} from 'react-bootstrap';

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

export const CovidInfoComponent = () => (
  <Section className="mt-3" data-aos="fade-up">
    <div className="d-flex justify-content-center">
      <Heading2>Informasi</Heading2>
    </div>
    <div>
      <CovidText>Protokol Covid-19</CovidText>
      <p className="text-center">
        Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami
        harapkan kedatangan para tamu undangan agar menjalankan protokol yang
        berlaku.
      </p>
      <Row className="gy-5">
        <Col sm={6} md={6} className="text-center">
          <Row>
            <Col sm={12}>
              <Image src={MaskImage} alt="masker" width={80} height={80} />
            </Col>
            <Col sm={12}>
              Wajib menggunakan masker
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={6} className="text-center">
          <Row>
            <Col sm={12}>
              <Image src={SocialDistanceImage} alt="distance" width={80} height={80} />
            </Col>
            <Col>
              Saling Menjaga Jarak di Dalam Acara
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="gy-5 mt-2">
        <Col sm={6} md={6} className="text-center">
          <Row>
            <Col sm={12}>
              <Image src={NamasteImage} alt="namaste" width={80} height={80} />
            </Col>
            <Col sm={12}>
              Menggunakan salam namastee sebagai ganti berjabat tangan
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={6} className="text-center">
          <Row>
            <Col sm={12}>
              <Image src={HandWashImage} alt="hand-wash" width={80} height={80} />
            </Col>
            <Col>
              Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Section>
);
