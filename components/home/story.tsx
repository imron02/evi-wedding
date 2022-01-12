import React from 'react'

import styled from "styled-components";
import Slider from "react-slick";
import Image from 'next/image'
import {Heading2} from '../../pages/_app';

const FlowerImage = "/images/flower.png";
const Section = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;
`;
const StoryTitle = styled.p`
  font-size: 20px;
  background-color: #f5e2e4;
  text-align: center;
  margin: 2rem 0 1.75rem;
  padding: 10px;
`;

const settings = {
  dots: true,
  infinite: true,
  arrow: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <></>,
  prevArrow: <></>,
};

export const StoryComponent = () => (
  <Section id="story" data-aos="zoom-in-down">
    <div className="d-flex align-items-center flex-column">
      <Image src={FlowerImage} alt="Flower" width={250} height={100} />
      <Heading2>Our Love Story</Heading2>
    </div>
    <Slider {...settings} className='col-lg-8 mx-auto'>
      <div className="px-1">
        <StoryTitle>First Meet</StoryTitle>
        <p className="text-center px-1">
          Perkenalan pertama kami yaitu pada tahun 2019. Pada hari itu dia menyapaku dalam suatu pesan singkat. Hai evi
          salam kenal ya 😊
        </p>
        <p className="text-center">
          <small>
            <i>
              <b className="text-bold">2019</b>
            </i>
          </small>
        </p>
      </div>
      <div className="px-1">
        <StoryTitle>Tunangan</StoryTitle>
        <p className="text-center">
          Singkatnya, seiring berjalannya waktu. Kami memutuskan untuk berkomitmen ke jenjang yang lebih serius yaitu
          pertunangan di tanggal 13 Juni 2021.
        </p>
        <p className="text-center">
          <small>
            <i>
              <b className="text-bold">13 Juli 2020</b>
            </i>
          </small>
        </p>
      </div>
    </Slider>
  </Section>
);
