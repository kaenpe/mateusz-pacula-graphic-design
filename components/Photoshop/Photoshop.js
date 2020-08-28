import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
//styled//
//vars//
//states//
//functions//
//effects//
const StyledWrapper = styled(motion.div)`
  width: 270px;
  height: 270px;
  max-width: 50vw;
  max-height: 50vh;
  grid-row: 2;
  grid-column: 2;
  position: relative;
  justify-self: center;
  align-self: flex-start;
  display: flex;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  &::after {
    content: '""';
    width: 250px;
    height: 250px;
    transition: all 0.3s ease-out;
    transform: scale(0.001, 0.001);
    border-radius: 45px;
    position: fixed;
    background-color: white;
    z-index: 2;
    opacity: 0.1;
  }
  &:hover {
    &::after {
      transition: all 0.3s ease-out;
      transform: scale(1, 1);
      cursor: pointer;
    }
  }
`;
const StyledRectangle = styled(motion.img)`
  border-radius: 45px;
  position: absolute;
  z-index: 1;
`;
const StyledPhotoshopLogo = styled(motion.img)`
  align-self: center;
  justify-self: center;
  border-radius: 45px;
  position: relative;
  z-index: 1;
`;
const Photoshop = () => {
  return (
    <>
      <StyledWrapper>
        <StyledRectangle
          // type='image/svg+xml'
          // data='Rectangle 1figma.svg'
          src='/Rectangle 1figma.svg'
          alt='ps logo'
        ></StyledRectangle>
        <StyledPhotoshopLogo
          // data='Figma_StyKj7D2Jy 1figma.svg'
          // type='image/svg+xml'
          src='/Figma_StyKj7D2Jy 1figma.svg'
          alt='ps logo'
        ></StyledPhotoshopLogo>
      </StyledWrapper>
    </>
  );
};

export default Photoshop;
