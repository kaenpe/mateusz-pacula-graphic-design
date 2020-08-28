import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, useTheme, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import styled from 'styled-components';

import { timestamp, projectFirestore } from '../../firebase/config';
//styled
const StyledForm = styled(Form)`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-top: 10vh;
  align-self: flex-start;
  justify-self: center;
  justify-content: center;
  background-color: ${({ theme }) => fade(theme.palette.secondary.light, 0.8)};
  border-radius: 10px;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
  padding: 10px;
  align-items: center;
  overflow: hidden;
  * {
    margin: 10px;
  }
`;

const StyledNameField = styled(Field)`
  background-color: #c3c3c350;
  border: 2px solid ${({ theme }) => fade(theme.palette.primary.dark, 0.25)};
  padding: 10px;
  width: 100%;
`;
const StyledBodyField = styled(Field)`
  padding: 10px;
  height: 20vh;
  background-color: #c3c3c350;
  border: 2px solid ${({ theme }) => fade(theme.palette.primary.dark, 0.25)};
  width: 100%;
  overflow: hidden;
`;
const StyledButton = styled(Button)`
  && {
    margin: 0 auto 10px auto;
    height: 30px;
    cursor: pointer;
    &::after {
      content: '';
      background-color: ${({ theme }) => theme.palette.primary.light};
      opacity: 0.005;
      height: 100%;
      width: 100%;
      position: absolute;
      transform: scale(0.001, 0.001);
      cursor: pointer;
    }
    &:hover {
      &::after {
        transition: transform 0.4s ease-out;
        transform: scale(1, 1);
      }
    }
  }
`;

const ContactForm = () => {
  //consts
  const theme = useTheme();
  //states//
  //functions
  const sendMessage = (name, text) => {
    projectFirestore.collection('messages').add({
      name: name,
      text: text,
      read: false,
      createdAt: timestamp(),
    });
  };
  //
  return (
    <>
      <Formik
        initialValues={{ name: '', text: '', email: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            sendMessage(values.name, values.text), setSubmitting(false);
            resetForm();
          }, 500);
        }}
      >
        {({ values, isSubmitting }) => (
          <StyledForm theme={theme}>
            <header>
              <Typography variant='h3' alignCenter>
                <strong>KONTAKT</strong>
              </Typography>
            </header>
            <StyledNameField
              theme={theme}
              type='name'
              name='name'
              label='Imię'
              placeholder='Imię'
              variant='outlined'
            />
            <StyledNameField
              theme={theme}
              type='Email'
              name='email'
              label='Email'
              placeholder='Email'
              variant='outlined'
            />
            <StyledBodyField
              theme={theme}
              type='text'
              component='textarea'
              name='text'
              label='Wiadomość'
              placeholder='Napisz wiadomość...'
              variant='outlined'
            />

            <StyledButton
              variant='contained'
              color='primary'
              theme={theme}
              type='submit'
              disabled={isSubmitting || !values.name || !values.text}
            >
              Wyślij
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
