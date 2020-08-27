import { IconButton, MenuItem, useMediaQuery } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import DesktopTabs, { StyledTab } from './DesktopTabs';
import SideDrawer from './SideDrawer';
//styled
const Navigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
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
    cursor: pointer;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  && {
    &:hover {
      background-color: transparent;
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
  const matches = useMediaQuery('(min-width:730px)');
  //
  //states
  const { auth } = useContext(AuthContext);
  //
  //functions
  //
  //effects
  //

  return (
    <Navigation theme={theme}>
      {matches ? <DesktopTabs></DesktopTabs> : <SideDrawer></SideDrawer>}

      <StyledFlexWrapper icons>
        <StyledTab theme={theme}>{auth}</StyledTab>
        {[1, 2].map((iteration) => (
          <StyledMenuItem disableRipple key={iteration}>
            <StyledIconButton color='secondary' theme={theme}>
              {iteration === 1 ? (
                <InstagramIcon></InstagramIcon>
              ) : (
                <EmailIcon></EmailIcon>
              )}
            </StyledIconButton>
          </StyledMenuItem>
        ))}
      </StyledFlexWrapper>
    </Navigation>
  );
};

export default Navbar;
