import React from 'react';
import styled from 'styled-components';
const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
