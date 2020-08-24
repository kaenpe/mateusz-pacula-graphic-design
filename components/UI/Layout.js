import React, { useContext } from 'react';
import styled from 'styled-components';
import { DrawerContext } from '../../contexts/DrawerContext';
const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: repeat(3, 1fr);
`;
const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  opacity: 0.2;
`;
const Layout = ({ children }) => {
  const { open, setOpen } = useContext(DrawerContext);
  return (
    <StyledLayout>
      {open && <StyledBackdrop onClick={() => setOpen(false)}></StyledBackdrop>}
      {children}
    </StyledLayout>
  );
};

export default Layout;
