import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const Header = styled.section`
  &:before {
    background: linear-gradient(180deg, #fff, transparent 50%, #000);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  position: relative;
  height: 100vh;
  max-height: -webkit-fill-available;
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  font-family: "Chopin Script", sans-serif;
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;
const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
  font-size: 20px;
`;

export const HeaderOpenComponent = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (type: boolean) => void;
}) => {
  const { query } = useRouter();

  return (
    <Header id="home" className="mx-auto">
      <Title>
        <div className="text-center position-absolute" style={{top: '5%'}}>
          <div style={{ color: 'black' }}>
            <Heading2>The Wedding Of</Heading2>
            <Heading1>Evi &amp; Bosnia</Heading1>
          </div>
        </div>
      </Title>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: -1,
        }}
      >
        <Image
          alt="img-background"
          src="/images/5R-21.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Header>
  );
};
