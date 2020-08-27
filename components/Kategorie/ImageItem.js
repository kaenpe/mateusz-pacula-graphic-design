import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
const StyledImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledTitle = styled(Typography)``;

const StyledImageItemWrapper = styled.div`
  transition: opacity 1s ease-out;
  position: relative;
  overflow: hidden;
  height: 80%;
  width: 80%;
  opacity: 0.8;
  border-radius: 20px;
`;
const ImageItem = ({ doc }) => {
  return (
    <StyledImageItemWrapper>
      <StyledImg src={doc.url}></StyledImg>
    </StyledImageItemWrapper>
  );
};

export default ImageItem;
