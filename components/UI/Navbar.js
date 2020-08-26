import { IconButton, MenuItem, useMediaQuery } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from 'styled-components';
import DesktopTabs from './DesktopTabs';
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
  justify-content: center;
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
  const matches = useMediaQuery('(min-width:600px)');
  //
  //states
  //
  //functions
  //
  //effects
  //

  return (
    <Navigation theme={theme}>
      {matches ? <DesktopTabs></DesktopTabs> : <SideDrawer></SideDrawer>}

      <StyledFlexWrapper>
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
