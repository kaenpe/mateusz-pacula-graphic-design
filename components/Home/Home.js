import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';

const StyledHome = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 0 3% 0 3%;
`;

const Home = () => {
  return (
    <>
      <Welcome></Welcome>

      <StyledHome>
        <Typography variant='h1' color='secondary'></Typography>
      </StyledHome>
    </>
  );
};

export default Home;
