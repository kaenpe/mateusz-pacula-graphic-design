import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Welcome from './Welcome';

const StyledHome = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 0 3% 0 3%;
  grid-row: 2;
`;

const Home = () => {
  return (
    <>
      <Welcome></Welcome>

      <StyledHome>
        <Signup></Signup>
        <Login></Login>
        <Typography variant='h1' color='secondary'></Typography>
      </StyledHome>
    </>
  );
};

export default Home;
