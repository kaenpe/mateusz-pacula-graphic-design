import React from 'react';
import styled from 'styled-components';
import AddFileForm from './AddFileForm';
import Welcome from './Welcome';

const StyledHome = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 0 3% 0 3%;
  grid-row: 2;
`;
//styled//
//vars//
//states//
//functions//
//effects//
const Home = () => {
  return (
    <>
      <Welcome></Welcome>

      <StyledHome>
        <AddFileForm></AddFileForm>
      </StyledHome>
    </>
  );
};

export default Home;
