import React from 'react';
import styled from 'styled-components';
import { useTheme, Typography, useMediaQuery } from '@material-ui/core';
//styled
const StyledFooter = styled.div`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 5vw;
  width: 90vw;
  background-color: transparent;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
//
const Footer = () => {
  //consts
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:900px)');
  //

  return (
    <>
      {matches && (
        <StyledFooter theme={theme}>
          <Typography gutterBottom={false} color='primary' variant='paragraph'>
            Copyright© 2020 Kamil Knap.
          </Typography>
        </StyledFooter>
      )}
    </>
  );
};

export default Footer;
