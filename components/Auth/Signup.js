import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { projectAuth } from '../../firebase/config';
//styled
//

const Signup = () => {
  //variables
  //
  //states
  //
  //functions
  const createUser = (email, password) => {
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  const login = (email, password) => {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
  //
  //effects
  //
  return (
    <div style={{ gridRow: 2 }}>
      <h1>Signup!</h1>

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
          setTimeout(() => {
            createUser(values.email, values.password);
            console.log(`Signed up. email: ${values.email}`);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <h1>Login!</h1>

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
          setTimeout(() => {
            login(values.email, values.password);
            console.log(`Signed up. email: ${values.email}`);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
