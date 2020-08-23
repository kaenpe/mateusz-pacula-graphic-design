import Head from 'next/head';
import React from 'react';
import Home from '../components/Home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Home></Home>
    </>
  );
}
