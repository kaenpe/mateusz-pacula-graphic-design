import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const StyledMessageList = styled.main`
  grid-row: 2;
`;
const Messages = ({ messages }) => {
  return (
    <StyledMessageList>
      {messages.map((message) => (
        <Message message={message}></Message>
      ))}
    </StyledMessageList>
  );
};

export default Messages;
