import { Box } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Home from '../components/Home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Box>
        <Home></Home>
      </Box>
    </>
  );
}
