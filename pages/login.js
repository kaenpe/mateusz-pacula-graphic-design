import Head from 'next/head';
import AuthForm from '../components/Auth/AuthForm';
const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <AuthForm isLogin></AuthForm>
    </>
  );
};

export default login;
