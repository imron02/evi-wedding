import type { NextPage } from "next";
import styled from "styled-components";
import { CovidInfoComponent } from "../components/home/covid_info";
import { HeaderComponent } from "../components/home/header";
import { StoryComponent } from "../components/home/story";

const BgMaskImage = "/images/bg-mask.png";

const BgMask = styled.div`
  &:before {
    background: url(${BgMaskImage}) top center;
    content: "";
    height: 100px;
    left: 0;
    position: absolute;
    width: 100%;
    bottom: -1px;
    background-size: cover;
    z-index: 1;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <BgMask />
      <CovidInfoComponent />
      <StoryComponent />
    </>
  );
};

export default Home;
