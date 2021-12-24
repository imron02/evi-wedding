import type {AppProps} from "next/app";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

export const Heading2 = styled.h2`
  font-family: "Chopin Script", sans-serif;
  font-size: 5rem;
  @media (max-device-width: 640px) {
    font-size: 3rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta name="title" content="Bosnia &amp; Evi Wedding" />
        <meta name="author" content="imron" />
        <meta name="language" content="Indonesia" />
        <meta name="description"
              content="Evi &amp; Bosnia akan menikah pada hari Sabtu, 5 Maret 2022." />
        <meta name="keywords" content="evi,bosnia,undangan,pernikahan,online,website,wedding,invitation" />
        <meta property="og:url" content="https://evi-bosnia.vercel.app" />
        <meta property="og:title" content="Evi &amp; Bosnia Wedding" />
        <meta property="og:description"
              content="Evi &amp; Bosnnia akan menikah pada hari Sabtu, 5 Maret 2022" />
        <meta property="og:image"
              content="/images/cover.jpeg" />
        <meta property="og:image:alt" content="Evi &amp; Bosnia Wedding Image" />
        <link href="https://fonts.cdnfonts.com/css/quicksand" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/chopin-script" rel="stylesheet" />
      </Head>
      <div id="app" className="mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
