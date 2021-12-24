import type {AppProps} from "next/app";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Header from "../components/header";
import Head from "next/head";
import {useRouter} from "next/router";

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
  const router = useRouter();

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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@datengdong" />
        <meta name="twitter:creator" content="@datengdong" />
        <meta property="og:url" content="https://demo.datengdong.com" />
        <meta property="og:title" content="Romeo &amp; Juliet Wedding" />
        <meta property="og:description"
              content="Evi &amp; Bosnnia akan menikah pada hari Sabtu, 5 Maret 2022" />
        <meta property="og:image"
              content="/images/cover.jpeg" />
        <meta property="og:image:alt" content="Evi &amp; Bosnia Wedding Image" />
        <link href="https://fonts.cdnfonts.com/css/quicksand" rel="stylesheet" />
      </Head>
      <AppContainer id="app" className="mx-auto">
        {router.pathname !== '/_error' ? <Header /> : null}
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default MyApp;
