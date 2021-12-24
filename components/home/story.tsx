import React from 'react'

import styled from "styled-components";
import Slider from "react-slick";
import Image from 'next/image'

const FlowerImage = "/images/flower.png";
const Section = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10%;
`;
const Heading2 = styled.h2`
  font-family: "Quicksand Bold", sans-serif;
  margin-top: 1.5rem;
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
        <StoryTitle>Pertama Kenal</StoryTitle>
        <p className="text-center px-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque, autem ducimus explicabo id ipsa, labore libero magnam non odio
          odit, optio sequi tenetur? Culpa cupiditate dolorum harum impedit
          incidunt!
        </p>
        <p className="text-center">
          <small>
            <i>
              <b className="text-bold">01 January 2020</b> - Gramedia{" "}
            </i>
          </small>
        </p>
      </div>
      <div className="px-1">
        <StoryTitle>Menyatakan Cinta</StoryTitle>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque, autem ducimus explicabo id ipsa, labore libero magnam non odio
          odit, optio sequi tenetur? Culpa cupiditate dolorum harum impedit
          incidunt!
        </p>
        <p className="text-center">
          <small>
            <i>
              <b className="text-bold">10 January 2020</b> - Pantai Parangtritis
            </i>
          </small>
        </p>
      </div>
      <div className="px-1">
        <StoryTitle>Tunangan</StoryTitle>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          atque, autem ducimus explicabo id ipsa, labore libero magnam non odio
          odit, optio sequi tenetur? Culpa cupiditate dolorum harum impedit
          incidunt!
        </p>
        <p className="text-center">
          <small>
            <i>
              <b className="text-bold">19 January 2020</b> - Rumah Juliet{" "}
            </i>
          </small>
        </p>
      </div>
    </Slider>
  </Section>
);
