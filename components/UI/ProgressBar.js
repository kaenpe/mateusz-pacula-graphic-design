import { useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import useStorage from '../../hooks/useStorage';
const StyledProgressBar = styled(motion.div)`
  height: 5px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
const ProgressBar = ({ file, setFile, title, category }) => {
  const theme = useTheme();
  const { progress } = useStorage(file, category, title);

  return (
    <StyledProgressBar
      transition={{ duration: 1 }}
      animate={{ width: `${progress}%` }}
      theme={theme}
    ></StyledProgressBar>
  );
};

export default ProgressBar;
//styled//
//vars//
//states//
//functions//
//effects//
