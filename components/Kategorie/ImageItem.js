import { fade, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

//styled
const StyledImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
const StyledImageItemWrapper = styled(motion.div)`
  transition: opacity 1s ease-out;
  position: relative;
  overflow: hidden;
  padding: 40%;
  opacity: 0.8;
  border-radius: 40px;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.dark}`};
  cursor: pointer;
  &::after {
    background-color: ${({ theme }) => fade(theme.palette.secondary.dark, 0.2)};
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 40px;
    position: absolute;
    transition: transform 0.3s ease-out;
    transform: scale(0.001, 0.001);
  }
  &:hover {
    &::after {
      transform: scale(1, 1);
      cursor: pointer;
    }
  }
`; //
//styled//
//vars//
//states//
//functions//
//effects//
const ImageItem = ({ doc, handleModal }) => {
  const theme = useTheme();
  return (
    <StyledImageItemWrapper
      onClick={() => handleModal(doc.url)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      theme={theme}
    >
      <StyledImg src={doc.url}></StyledImg>
    </StyledImageItemWrapper>
  );
};

export default ImageItem;
