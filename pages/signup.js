import Head from 'next/head';
import React from 'react';
import AuthForm from '../components/Auth/AuthForm';

const signup = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <AuthForm></AuthForm>
    </>
  );
};

export default signup;
