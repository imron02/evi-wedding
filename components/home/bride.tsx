import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const LeavesLeftImage = "/images/leaves-left.png";
const LeavesRightImage = "/images/leaves-right.png";

const Section = styled.section`
  background-color: rgba(109, 148, 142, 0.2);
  padding-top: 8rem;
  padding-bottom: 10rem;
`;
const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
  margin-top: 1.5rem;
  @media (max-device-width: 640px) {
    font-size: 2rem;
  }
`;
const Name = styled(Heading2)`
  line-height: 20px;
`;
const CircleImage = styled.div`
  width: 270px;
  height: 270px;
  overflow: hidden;
  position: relative;
  margin: 3rem auto;
  border-radius: 50%;
  border: 5px solid #c0616a;
  background-color: #ecf0f1;
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
    <div className="col-lg-7 mx-auto">
      <Row className="g-0">
        <Col
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="col-lg-6 text-center"
        >
          <CircleImage className="circle-image">
            <Image
              src="https://demo.datengdong.com/uploads/thumbs/couple/tccbn7tmom.png"
              alt="Juliet Photo"
              layout="fill"
            />
          </CircleImage>
          <Name>
            - Romeo -<span className="d-block mt-3">Romeo Mantoko</span>
          </Name>
          <p className="mt-3">
            Putri dari Pasangan <br />
            <b>Joko &amp; Siti</b>
          </p>
          <p className="m-0">Jl. Apel 15C, Condongcatur, Sleman, Yogyakarta</p>
        </Col>
        <Col
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="col-lg-6 text-center"
        >
          <CircleImage className="circle-image">
            <Image
              src="https://demo.datengdong.com/uploads/thumbs/couple/il0dspbrza.png"
              alt="Juliet Photo"
              layout="fill"
            />
          </CircleImage>
          <Name>
            - Juliet -<span className="d-block mt-3">Juliet Capulet</span>
          </Name>
          <p className="mt-3">
            Putri dari Pasangan <br />
            <b>Joko &amp; Siti</b>
          </p>
          <p className="m-0">Jl. Apel 15C, Condongcatur, Sleman, Yogyakarta</p>
        </Col>
      </Row>
    </div>
  </Section>
);
