import React, { useContext } from 'react';
import styled from 'styled-components';
import AddFileForm from './AddFileForm';
import Welcome from './Welcome';
import { AuthContext } from '../../contexts/AuthContext';

const StyledHome = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 0 3% 0 3%;
  grid-row: 2;
`;
//styled//

const Home = () => {
  //vars//
  //states//
  const { auth } = useContext(AuthContext);
  //functions//
  //effects//
  return (
    <>
      <Welcome></Welcome>

      <StyledHome>{auth && <AddFileForm></AddFileForm>}</StyledHome>
    </>
  );
};

export default Home;
