import React from 'react';
import Messages from '../components/Contact/Messages';
import { projectFirestore } from '../firebase/config';
//styled//
const messages = ({ messages }) => {
  return <Messages messages={messages}></Messages>;
};

export const getStaticProps = async () => {
  const messages = [];
  await projectFirestore
    .collection('messages')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      snapshot.forEach((message) =>
        messages.push({
          ...message.data(),
          id: message.id,
          createdAt: new Date(
            message.data().createdAt.seconds * 1000
          ).toLocaleDateString('en-US'),
        })
      );
    });

  return {
    revalidate: 1,
    props: {
      messages,
    },
  };
};

export default messages;
