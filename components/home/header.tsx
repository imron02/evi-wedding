import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {useRouter} from 'next/router';
import {Button} from 'react-bootstrap';

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
`;

export const HeaderComponent = ({open, setOpen}: { open: boolean, setOpen: (type: boolean) => void }) => {
  const {query} = useRouter();

  return (
    <Header id="home" className="mx-auto">
      <Title>
        <div className="text-center" style={{marginTop: "5rem"}}>
          <Heading2>The Wedding Of</Heading2>
          <Heading1>Evi &amp; Bosnia</Heading1>
          <Heading2>Sabtu, 5 Maret 2022</Heading2>

          <p className="mt-5">
            <i>Kepada Yth</i>
            <br />
            <i>Saudara/Saudari</i>
          </p>
          <h2 className="text-capitalize">{query?.undang || ''}</h2>
          <p> di Tempat </p>
          {!open && (
            <Button className="rounded-pill" onClick={() => setOpen(true)}>Buka Undangan</Button>
          )}
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
          src="/images/5R-2.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Header>
  );
};
