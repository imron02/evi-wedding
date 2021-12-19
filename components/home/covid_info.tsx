import React from "react";

import styled from "styled-components";
import Image from "next/image";

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
const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
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
      <div className="d-flex flex-row justify-content-around text-center">
        <div className="p-3 d-flex flex-column align-items-center">
          <Image src={MaskImage} alt="masker" width={80} height={80} />
          Wajib menggunakan masker
        </div>
        <div className="p-3 d-flex flex-column align-items-center">
          <Image src={SocialDistanceImage} alt="distance" width={80} height={80} />
          Saling Menjaga Jarak di Dalam Acara
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around text-center">
        <div className="p-3 d-flex flex-column align-items-center">
          <Image src={NamasteImage} alt="namaste" width={80} height={80} />
          Menggunakan salam namastee sebagai ganti berjabat tangan
        </div>
        <div className="p-3 d-flex flex-column align-items-center">
          <Image src={HandWashImage} alt="hand-wash" width={80} height={80} />
          Jaga Kebersihan dengan Mencuci Tangan atau Handsanitizer
        </div>
      </div>
    </div>
  </Section>
);
