import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { projectAuth } from '../../firebase/config';
//styled
export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 2;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  * {
    margin: 10px;
  }
`;
//
const AuthForm = ({ isLogin }) => {
  //consts
  const router = useRouter();
  //
  //states
  //
  //functions
  const login = (email, password) => {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        // ...
      });
  };

  const createUser = (email, password) => {
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        // ...
      });
  }; //
  //effects

  //
  return (
    <StyledFormWrapper>
      <h1>{isLogin ? 'Login' : 'Rejestracja'}!</h1>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (isLogin) {
            setTimeout(() => {
              login(values.email, values.password);
              console.log(`Signed in. email: ${values.email}`);
              setSubmitting(false);
              router.replace('/');
            }, 1000);
          } else {
            setTimeout(() => {
              createUser(values.email, values.password);
              login(values.email, values.password);
              console.log(`Signed up. email: ${values.email}`);
              setSubmitting(false);
              router.replace('/');
            }, 1000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field
              type='email'
              name='email'
              placeholder='email'
              component={TextField}
              variant='filled'
              color='primary'
            />
            <Field
              type='password'
              name='password'
              placeholder='password'
              component={TextField}
              variant='filled'
              color='primary'
            />
            <Button
              color='primary'
              variant='contained'
              type='submit'
              disabled={isSubmitting}
              // onClick={() => router.replace('/')}
            >
              {isLogin ? 'Login' : 'Signup'}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledFormWrapper>
  );
};

export default AuthForm;
