import { Button } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { WelcomeContext } from '../../contexts/WelcomeContext';
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
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    margin: '0 auto',
                    borderRadius: '10px',
                    zIndex: '101',
                  }}
                  onClick={() => setWelcome((prevState) => !prevState)}
                >
                  <strong>PORTFOLIO</strong>
                </Button>
              </motion.div>
            </StyledVoxelLogo>
          </StyledWelcome>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
