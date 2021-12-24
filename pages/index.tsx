import type {NextPage} from "next";
import styled from "styled-components";
import {BrideComponent} from "../components/home/bride";
import {CovidInfoComponent} from "../components/home/covid_info";
import {HeaderComponent} from "../components/home/header";
import {StoryComponent} from "../components/home/story";
import {EventComponent} from '../components/home/event';
import Image from 'next/image';
import {GalleryComponent} from '../components/home/gallery';

const BgMaskImage = "/images/bg-mask.png";
const BgMask2Image = "/images/bg-mask-2.png";

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
const BgMask2 = styled(BgMask)`
  margin-top: 2rem;

  &:before {
    background: url(${BgMask2Image}) top center;
    transform: scaleX(-1);
    background-size: auto;
    bottom: auto;
  }
`;
const BgMask3 = styled.div`
  &:before {
    background: url(${BgMaskImage}) top center;
    content: "";
    height: 200px;
    left: 0;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    transform: translateY(-60%);
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <BgMask />
      <CovidInfoComponent />
      <StoryComponent />
      <BgMask2 />
      <BrideComponent />
      <BgMask3 />
      <EventComponent />
      <BgMask2 />
      <GalleryComponent />
      <BgMask3 />
    </>
  );
};

export default Home;
