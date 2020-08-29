import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@material-ui/core';
import { motion } from 'framer-motion';

//styled
const StyledMessage = styled(motion.div)`
  border: 1px solid #00000050;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.dark};
  word-wrap: anywhere;
  padding-bottom: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    cursor: pointer;
  }
`;
const StyledMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
//
const Message = ({ message, deleteMessage }) => {
  //consts
  const theme = useTheme();
  //
  //states
  //
  //functions

  //
  return (
    <StyledMessage
      key={message.id}
      theme={theme}
      onClick={() => deleteMessage(message.id)}
      initial={{ x: 0, height: 'auto' }}
      animate={{ x: 0, height: 'auto' }}
      exit={{ x: '-110vw', height: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant='h3'>{message.name}</Typography>

      <Typography variant='h5'>{message.text} </Typography>
      <Typography style={{ marginTop: '20px' }}>
        {message.createdAt}{' '}
      </Typography>
    </StyledMessage>
  );
};

export default Message;
