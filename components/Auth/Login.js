import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

const Login = () => {
  return (
    <div>
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

export default Login;
