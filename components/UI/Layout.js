import React from 'react';
import styled from 'styled-components';
const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: repeat(3, 1fr);
`;
const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
