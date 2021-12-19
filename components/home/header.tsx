import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Header = styled.section`
  &:before {
    background: linear-gradient(180deg, #fff, transparent 0%, #000);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  position: relative;
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
const Heading4 = styled.h4`
  font-family: "Quicksand Bold", sans-serif;
  @media (max-width: 992px) {
    font-size: 1.3rem;
  }
`;
const Heading1 = styled.h1`
  font-size: 6rem;
  font-family: "Quicksand Book Oblique", sans-serif;
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;
const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
`;

export const HeaderComponent = () => (
  <Header id="home" style={{ height: "100vh" }} className="mx-auto">
    <Title>
      <div className="text-center" style={{ marginTop: "5rem" }}>
        <Heading4>We Are Getting Married</Heading4>
        <Heading1>Resti &amp; Imron</Heading1>
        <Heading2>15 Juli 2017</Heading2>

        <p className="mt-5">
          <i>Kepada Yth</i>
          <br />
          <i>Bapak/Ibu/Saudara/i</i>
        </p>
        {/* <h2 className="text-capitalize">{user}</h2> */}
        <p> di Yon Arhanud 1 </p>
      </div>
    </Title>
    <div style={{ width: "100%", height: "100%", zIndex: -1 }}>
      <Image alt="img-background" src="/images/cover.jpeg" layout="fill" objectFit="cover" />
    </div>
  </Header>
);
