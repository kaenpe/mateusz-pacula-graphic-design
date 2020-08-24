import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled(motion.div)`
  width: 270px;
  height: 270px;
  grid-row: 2;
  grid-column: 2;
  position: relative;
  justify-self: center;
  align-self: flex-start;
  display: flex;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  z-index: 201;
  &::after {
    content: '""';
    width: 270px;
    height: 270px;
    transition: all 0.3s ease-out;
    transform: scale(0.001, 0.001);
    border-radius: 45px;
    position: absolute;
    background-color: white;
    z-index: 300;
    opacity: 0.2;
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
  width: 270px;
  max-width: 70%;
  max-height: 50%;
  height: 270px;
  border-radius: 45px;
  position: absolute;
  z-index: 200;
`;
const StyledPhotoshopLogo = styled(motion.img)`
  width: 250px;
  height: 250px;
  align-self: center;
  justify-self: center;
  border-radius: 45px;
  position: relative;
  z-index: 200;
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
