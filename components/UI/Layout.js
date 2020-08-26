import { useContext } from 'react';
import styled from 'styled-components';
import { DrawerContext } from '../../contexts/DrawerContext';
const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: repeat(3, 1fr);
`;

const Layout = ({ children }) => {
  //states
  const { openCategoryDrawer, setOpenCategoryDrawer } = useContext(
    DrawerContext
  );
  //
  //functions
  const closeCategoryHandler = () => {
    return openCategoryDrawer ? setOpenCategoryDrawer(false) : null;
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
