import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { Heading2 } from "../../pages/_app";

const LeavesLeftImage = "/images/leaves-left.png";
const LeavesRightImage = "/images/leaves-right.png";
const SingleBoy = "/images/Single-Boy.jpg";
const SingleGirl = "/images/Single-Girl.jpg";

const Section = styled.section`
  background-color: rgba(109, 148, 142, 0.2);
  padding-top: 8rem;
  padding-bottom: 10rem;
`;
const Name = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
  margin-top: 1.5rem;
  line-height: 20px;
  @media (max-device-width: 640px) {
    font-size: 1.2rem;
  }
`;
const NameDesc = styled.h2`
  font-size: 16px;
  @media (max-device-width: 640px) {
    font-size: 14px;
  }
`;
const CircleImage = styled.div`
  width: 270px;
  height: 270px;
  overflow: hidden;
  position: relative;
  margin: 3rem auto;
  border-radius: 50%;
  background-color: #ecf0f1;
  box-shadow: 0 1rem 1.25rem rgb(0 0 0 / 23%);
`;

export const BrideComponent = () => (
  <Section id="couple">
    <div className="d-flex justify-content-center mb-4" data-aos="flip-left">
      <div className="d-none d-lg-block">
        <Image
          alt="leaves-left"
          src={LeavesLeftImage}
          width={100}
          height={100}
        />
      </div>
      <Heading2>Groom & Bride</Heading2>
      <div className="d-none d-lg-block">
        <Image
          alt="leaves-right"
          src={LeavesRightImage}
          width={100}
          height={100}
        />
      </div>
    </div>
    <div
      data-aos="fade-up"
      className="d-flex flex-column align-items-center text-center"
    >
      <i>Assalamu’alaikum Warahmatullahi Wabarakatuh</i>
      <br />
      <p className="text-center px-1">
        Maha suci Allah SWT yang telah menciptakan makhluk-Nya
        berpasang-pasangan.
        <br />
        Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan
        di antara putra-putri kami:
        <br />
        <br />
      </p>
    </div>
    <div className="col-lg-8 mx-auto">
      <Row className="g-0">
        <Col
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="col-lg-6 text-center"
        >
          <CircleImage className="circle-image">
            <Image src={SingleBoy} alt="Juliet Photo" layout="fill" objectFit="cover" />
          </CircleImage>
          <Name>
            - Bosnia -<span className="d-block mt-3">Pratu Bosnia Situmorang</span>
          </Name>
          <NameDesc className="mt-3">
            Putra dari Pasangan <br />
            <b>Bpk. Hasiholan Situmorang &amp; Ibu Nur Hijah Sihotang</b>
          </NameDesc>
        </Col>
        <Col
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="col-lg-6 text-center"
        >
          <CircleImage className="circle-image">
            <Image src={SingleGirl} alt="Juliet Photo" layout="fill" objectFit="cover" />
          </CircleImage>
          <Name>
            - Evi -<span className="d-block mt-3">Evi Ida Amalia</span>
          </Name>
          <NameDesc className="mt-3">
            Putri dari Pasangan <br />
            <b>Bpk. Jaenudin Tegal &amp; Ibu Wasripah</b>
          </NameDesc>
        </Col>
      </Row>
    </div>
  </Section>
);
