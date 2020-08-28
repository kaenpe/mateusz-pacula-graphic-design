import { useContext } from 'react';
import styled from 'styled-components';
import { DrawerContext } from '../../contexts/DrawerContext';
const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 1;
`;

const Layout = ({ children }) => {
  //states
  const {
    openCategoryDrawer,
    setOpenCategoryDrawer,
    openSideDrawer,
    setOpenSideDrawer,
  } = useContext(DrawerContext);
  //
  //functions
  const closeCategoryHandler = () => {
    return openCategoryDrawer
      ? setOpenCategoryDrawer(false)
      : openSideDrawer
      ? setOpenSideDrawer(false)
      : null;
  };
  //
  //effects

  //
  return (
    <StyledLayout onClick={() => closeCategoryHandler()}>
      {children}
    </StyledLayout>
  );
};

export default Layout;
