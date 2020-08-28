import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { AnimatePresence } from 'framer-motion';
import { projectFirestore } from '../../firebase/config';

const StyledMessageList = styled.main`
  grid-row: 2;
  margin: 30px auto;
  width: 70vw;
`;
const Messages = ({ messages }) => {
  const [messageList, setMessageList] = useState(messages);

  //functions
  const deleteMessage = (messageId) => {
    setMessageList((prevState) =>
      prevState.filter((message) => message.id !== messageId)
    );
    projectFirestore.collection('messages').doc(messageId).delete();
  };
  //

  return (
    <StyledMessageList>
      <AnimatePresence>
        {messageList &&
          messageList.map((message) => (
            <Message
              key={message.id}
              deleteMessage={deleteMessage}
              message={message}
            ></Message>
          ))}
      </AnimatePresence>
    </StyledMessageList>
  );
};

export default Messages;
