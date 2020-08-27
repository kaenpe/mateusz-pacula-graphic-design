import React from 'react';
import styled from 'styled-components';
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

      <StyledHome></StyledHome>
    </>
  );
};

export default Home;
