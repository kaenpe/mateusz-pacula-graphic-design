import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
//styled
const StyledModal = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
`;
//
const Modal = ({ image }) => {
  //consts//
  const theme = useTheme();
  //states//
  //functions//
  //effects//
  return <StyledModal src={image}></StyledModal>;
};

export default Modal;
