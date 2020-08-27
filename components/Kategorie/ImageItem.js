import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
const StyledImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  max-height: 150%;
`;

const StyledTitle = styled(Typography)``;

const StyledImageItemWrapper = styled.div`
  transition: opacity 1s ease-out;
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 300px;
  opacity: 0.8;
`;
const ImageItem = ({ doc }) => {
  return (
    <StyledImageItemWrapper>
      <StyledImg src={doc.url}></StyledImg>
    </StyledImageItemWrapper>
  );
};

export default ImageItem;
