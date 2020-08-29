import {
  IconButton,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

import styled from 'styled-components';

import { projectAuth } from '../../firebase/config';
import Link from '../../src/Link';
import DesktopTabs from './DesktopTabs';
import SideDrawer from './SideDrawer';
//styled
const Navigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
  z-index: 3;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: ${({ tabs, logo, hamburger, icons }) =>
    tabs || hamburger ? 'flex-start' : logo ? 'center' : icons && 'flex-end'};
  width: 420px;
  align-items: flex-start;
  position: relative;

  &:hover {
    cursor: default;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  && {
    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;
export const StyledIconButton = styled(IconButton)`
  && {
    &:hover {
      background-color: ${({ theme }) =>
        fade(theme.palette.secondary.main, 0.25)};
    }
  }
`;
//
const Navbar = () => {
  //variables
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:850px)');
  //
  //states
  // const { auth } = useContext(AuthContext);
  //
  //functions
  const logout = () => {
    projectAuth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  //
  //effects
  //

  return (
    <Navigation theme={theme}>
      {matches ? <DesktopTabs></DesktopTabs> : <SideDrawer></SideDrawer>}

      <StyledFlexWrapper icons style={{ alignItems: 'center' }}>
        {/* {matches &&
          (auth ? (
            <StyledTab theme={theme} onClick={() => logout()}>
              <Typography variant='button'>Logout</Typography>
            </StyledTab>
          ) : (
            <Link href='/login'>
              <StyledTab theme={theme}>
                <Typography variant='button'>Login</Typography>
              </StyledTab>
            </Link>
          ))} */}
        <StyledMenuItem>
          <StyledIconButton color='secondary' theme={theme}>
            <InstagramIcon></InstagramIcon>
          </StyledIconButton>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href='/kontakt'>
            <StyledIconButton color='secondary' theme={theme}>
              <EmailIcon></EmailIcon>
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
      </StyledFlexWrapper>
    </Navigation>
  );
};

export default Navbar;
