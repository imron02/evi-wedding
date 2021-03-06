import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const Header = styled.section`
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
const TheWedding = styled.div`
  top: -2rem;
  position: relative;
  margin: 0 auto;
`;
const Invitation = styled.div`
  position: relative;
  bottom: -3rem;
`;
const ButtonInvite = styled(Button)`
  color: black;
  background-color: #e8dac7;
  border-color: black;
  font-weight: 900;
`;

export const HeaderComponent = ({
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
        <div className="text-center position-absolute" style={{ top: "23%" }}>
          <TheWedding>
            <Heading2>The Wedding Of</Heading2>
            <Heading1>Evi &amp; Bosnia</Heading1>
            <Heading2>Sabtu, 5 Maret 2022</Heading2>
          </TheWedding>
        </div>
        <div
          className="text-center position-absolute"
          style={{ bottom: "24%" }}
        >
          <Invitation>
            {!open && (
              <ButtonInvite
                className="rounded-pill"
                onClick={() => setOpen(true)}
              >
                Buka Undangan
              </ButtonInvite>
            )}
          </Invitation>
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
          src="/images/5R-2.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Header>
  );
};
