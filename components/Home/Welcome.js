import { Button } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { WelcomeContext } from '../../contexts/WelcomeContext';
//styled//
//vars//
//states//
//functions//
//effects//
const StyledVoxelLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledWelcome = styled(motion.main)`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: fixed;
  z-index: 999;
`;
const StyledButton = styled(Button)`
  && {
    margin: 0 auto;
    border-radius: 10px;
    z-index: 10;
  }
`;
const Welcome = () => {
  const { welcome, setWelcome } = useContext(WelcomeContext);
  return (
    <>
      <AnimatePresence>
        {welcome && (
          <StyledWelcome
            transition={{ duration: 1 }}
            initial={{ width: '100vw' }}
            animate={{ width: '100vw' }}
            exit={{ width: '0' }}
          >
            <StyledVoxelLogo
              transition={{ duration: 1 }}
              initial={{ maxWidth: '100%' }}
              exit={{ width: '0' }}
            >
              <img src='logo.jpg' alt='logo' />
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ margin: '0 auto' }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.8, transition: { duration: 1 } }}
              >
                {' '}
                <StyledButton
                  variant='contained'
                  color='primary'
                  onClick={() => setWelcome((prevState) => !prevState)}
                >
                  <strong>PORTFOLIO</strong>
                </StyledButton>
              </motion.div>
            </StyledVoxelLogo>
          </StyledWelcome>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
