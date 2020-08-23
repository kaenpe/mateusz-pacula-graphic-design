import { Button, Typography } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
const StyledWelcome = styled(motion.main)`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  z-index: 101;
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledHome = styled.main`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: '100';
  padding: 0 3% 0 3%3%;
`;
const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <StyledWelcome
            transition={{ duration: 1 }}
            initial={{ width: '100vw' }}
            animate={{ width: '100vw' }}
            exit={{ width: '0' }}
          >
            <StyledLogo
              transition={{ duration: 1 }}
              initial={{ width: 'auto' }}
              animate={{ width: 'auto' }}
              exit={{ width: '0' }}
            >
              <img src='logo.jpg' alt='logo' />
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ margin: '0 auto' }}
              >
                {' '}
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    margin: '0 auto',
                    borderRadius: '10px',
                    zIndex: '101',
                  }}
                  onClick={() => setShowWelcome((prevState) => !prevState)}
                >
                  <strong>PORTFOLIO</strong>
                </Button>
              </motion.div>
            </StyledLogo>
          </StyledWelcome>
        )}
      </AnimatePresence>
      <StyledHome
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
          zIndex: '100',
        }}
      >
        {' '}
        <Typography variant='h1' style={{ position: 'fixed' }}>
          Dog
        </Typography>
      </StyledHome>
    </>
  );
};

export default Home;
