import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

//styled
const StyledMessage = styled.div`
  width: 100vw;
  border-bottom: 1px solid #00000050;
  padding: 20px;
`;
//
const Message = ({ message }) => {
  //consts

  //
  return (
    <StyledMessage>
      <Typography variant='h3'>{message.name} </Typography>
      <Typography variant='h5'>{message.text} </Typography>
      <Typography variant='p'>{message.createdAt} </Typography>
    </StyledMessage>
  );
};

export default Message;
