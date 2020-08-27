import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import { projectAuth } from '../../firebase/config';
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
  const { auth } = useContext(AuthContext);
  const logout = () => {
    projectAuth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <>
      <Welcome></Welcome>

      <StyledHome>
        <Signup></Signup>
        <Login></Login>
        <Button onClick={() => logout()}>Logout</Button>
        <Typography variant='h1' color='secondary'></Typography>
      </StyledHome>
    </>
  );
};

export default Home;
