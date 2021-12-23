import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Header from "../components/header";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

const AppContainer = styled.div`
  // @media (min-width: 1200px) {
  //   max-width: 60%;
  // }
  padding-bottom: 15%;
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
        <link href="https://fonts.cdnfonts.com/css/quicksand" rel="stylesheet" />
      </Head>
      <AppContainer id="app" className="mx-auto">
        <Header />
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default MyApp;
