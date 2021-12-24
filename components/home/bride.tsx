import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import {Heading2} from '../../pages/_app';

const LeavesLeftImage = "/images/leaves-left.png";
const LeavesRightImage = "/images/leaves-right.png";

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
    font-size: 2rem;
  }
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
    <div className="col-lg-8 mx-auto">
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
            - Bosnia -<span className="d-block mt-3">Bosnia Situmorang</span>
          </Name>
          <p className="mt-3">
            Putra dari Pasangan <br />
            <b>Bpk. Hasiholan Situmorang &amp; Ibu Nur Hijah Sihotang</b>
          </p>
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
            - Evi -<span className="d-block mt-3">Evi Ida Amalia</span>
          </Name>
          <p className="mt-3">
            Putri dari Pasangan <br />
            <b>Bpk. Jaenudin &amp; Ibu Wasripah</b>
          </p>
        </Col>
      </Row>
    </div>
  </Section>
);
