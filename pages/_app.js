import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/UI/Layout';
import Navbar from '../components/UI/Navbar';
import AuthContextProvider from '../contexts/AuthContext';
import CategoryContextProvider from '../contexts/CategoryContext';
import DrawerContextProvider from '../contexts/DrawerContext';
import PageContextProvider from '../contexts/PageContext';
import WelcomeContextProvider from '../contexts/WelcomeContext';
import theme from '../src/theme';
import '../styles/globals.css';
import Footer from '../components/UI/Footer';
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {' '}
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          />
          <link rel='shortcut icon' href=''></link>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AuthContextProvider>
            <CategoryContextProvider>
              <DrawerContextProvider>
                <WelcomeContextProvider>
                  <PageContextProvider>
                    <Layout>
                      <Navbar></Navbar>
                      <Footer></Footer>
                      <Component {...pageProps} />
                    </Layout>
                  </PageContextProvider>
                </WelcomeContextProvider>
              </DrawerContextProvider>
            </CategoryContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
