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
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const closeWelcome = {
  open: { width: 'auto' },
  closed: { width: 0 },
};
const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <div>
      <AnimatePresence>
        {showWelcome && (
          <StyledWelcome
            transition={{ duration: 1 }}
            animate={showWelcome ? 'open' : 'closed'}
            variants={closeWelcome}
            unmountOnExit
          >
            <StyledLogo
              transition={{ duration: 1 }}
              animate={showWelcome ? 'open' : 'closed'}
              variants={closeWelcome}
            >
              <img src='logo.jpg' alt='logo' />
              {showWelcome && (
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
              )}
            </StyledLogo>
          </StyledWelcome>
        )}
      </AnimatePresence>

      <Typography variant='h1'>Dog</Typography>
    </div>
  );
};

export default Home;
