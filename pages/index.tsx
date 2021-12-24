import type {NextPage} from "next";
import styled from "styled-components";
import {BrideComponent} from "../components/home/bride";
import {CovidInfoComponent} from "../components/home/covid_info";
import {HeaderComponent} from "../components/home/header";
import {StoryComponent} from "../components/home/story";
import {EventComponent} from '../components/home/event';
import {GalleryComponent} from '../components/home/gallery';
import {Button} from 'react-bootstrap';
import {MdOutlineCardGiftcard} from "react-icons/md";
import React from 'react';
import {GiftModal} from '../components/home/gift_modal';
import Header from '../components/header';
import {DiscussionEmbed} from "disqus-react";

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
    bottom: -1%;
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
const SendGift = styled.div`
  position: fixed;
  bottom: 21%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
  text-align: center;
`;
const BtnGift = styled(Button)`
  background-color: #fff;
  color: black;
  border: solid 2px #000;
  font-family: 'Quicksand Bold';
`;
const Audio = styled.audio`
  position: fixed;
  z-index: 4;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: auto;
`;
const Disqus = styled.div`
  padding-bottom: 20%;
  @media (max-device-width: 640px) {
    padding-bottom: 50%;
  }
`

const DisqusComments = () => {
  const disqusShortname = "http-evi-bosnia-vercel-app"
  const disqusConfig = {
    url: "https://evi-bosnia.vercel.app/",
    identifier: '1', // Single post id
    title: 'The Wedding Of Evi & Bosnia' // Single post title
  }
  return (
    <Disqus className="mt-5 px-1">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Disqus>
  )
}

const Home: NextPage = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const audioEl = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (open && audioEl.current) {
      // audioEl.current.muted = false;
      audioEl.current.play();
    }
  }, [open]);

  return (
    <>
      {!open && (
        <HeaderComponent open={open} setOpen={setOpen} />
      )}
      {open && (
        <>
          <Header />
          <HeaderComponent open={open} setOpen={setOpen} />
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
          <SendGift className="d-flex justify-content-center">
            <BtnGift className="rounded-pill" onClick={() => setShow(true)}>
              <MdOutlineCardGiftcard />
              <span className="ms-2">Kirim Hadiah</span>
            </BtnGift>
          </SendGift>
          <GiftModal show={show} onHide={() => setShow(false)} />
          <Audio controls autoPlay ref={audioEl}>
            <source src="/audio/kasih_putih.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </Audio>
          <DisqusComments />
        </>
      )}
    </>
  );
};

export default Home;
