import { Button, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import { projectAuth } from '../../firebase/config';
//styled
export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 2;
  grid-column: 2;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    margin: 10px;
  }
`;
//
const AuthForm = ({ isLogin }) => {
  //consts
  const router = useRouter();
  //
  //states
  const { setAuth } = useContext(AuthContext);
  //
  //functions
  const login = (email, password) => {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
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
        console.log(errorMessage);
        // ...
      });
  }; //
  //effects

  //
  return (
    <StyledFormWrapper>
      <h1>{isLogin ? 'Login' : 'Signup'}!</h1>

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
            login(values.email, values.password);
            console.log(`Signed in. email: ${values.email}`);
            setSubmitting(false);
          } else {
            createUser(values.email, values.password);
            login(values.email, values.password);
            console.log(`Signed up. email: ${values.email}`);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field
              type='email'
              name='email'
              component={TextField}
              variant='outlined'
              color='primary'
            />
            <Field
              type='password'
              name='password'
              component={TextField}
              variant='outlined'
              color='primary'
            />
            <Button
              color='primary'
              variant='contained'
              type='submit'
              disabled={isSubmitting}
              onClick={() => router.replace('/')}
            >
              <Typography>{isLogin ? 'Login' : 'Signup'}</Typography>
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledFormWrapper>
  );
};

export default AuthForm;
