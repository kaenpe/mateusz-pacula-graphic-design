import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
const StyledWelcome = styled(motion.main)`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

const variants = {
  open: { width: '100vw' },
  closed: { width: 0 },
};
const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <div>
      <StyledWelcome
        transition={{ duration: 1 }}
        animate={showWelcome ? 'open' : 'closed'}
        variants={variants}
      >
        {showWelcome && (
          <Button
            variant='contained'
            color='primary'
            style={{ margin: '0 auto' }}
            onClick={() => setShowWelcome((prevState) => !prevState)}
          >
            Hide
          </Button>
        )}
      </StyledWelcome>
    </div>
  );
};

export default Home;
