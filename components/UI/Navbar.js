import {
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { fade } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react';
import styled from 'styled-components';
import theme from '../../src/theme';
import DesktopTabs from './DesktopTabs';
import SideDrawer from './SideDrawer';

const StyledAppBar = styled(AppBar)`
  && {
    z-index: 3;
    transition: ${theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};
  }
`;
const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: space-between;
    min-height: auto;
  }
`;
const StyledMenuItem = styled(MenuItem)`
  && {
    &:hover {
      background-color: transparent;
    }
  }
`;
const StyledIconButton = styled(IconButton)`
  && {
    &:hover {
      background-color: ${fade(theme.palette.secondary.main, 0.25)};
    }
  }
`;
const StyledOffset = styled.div`
  offset: ${theme.mixins.toolbar};
`;

const Navbar = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      <StyledAppBar position='fixed'>
        <StyledToolbar disableGutters>
          {matches ? <SideDrawer></SideDrawer> : <DesktopTabs></DesktopTabs>}
          <Box style={{ display: 'flex' }}>
            {' '}
            <StyledMenuItem disableRipple>
              <StyledIconButton color='inherit'>
                <InstagramIcon />
              </StyledIconButton>
            </StyledMenuItem>
            <StyledMenuItem disableRipple>
              <StyledIconButton color='inherit'>
                <EmailIcon />
              </StyledIconButton>
            </StyledMenuItem>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
      <StyledOffset />
    </>
  );
};
export default Navbar;
