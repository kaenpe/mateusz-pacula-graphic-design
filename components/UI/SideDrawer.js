import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { useContext } from 'react';
import styled from 'styled-components';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from '../../src/Link';

const drawerWidth = '240px';
const StyledArrowWrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  justify-content: center;
`;
const StyledList = styled(List)`
  text-align: center;
`;
const StyledListItem = styled(ListItem)`
  text-align: center;
`;
const StyledDrawer = styled(Drawer)`
  && {
    flex-shrink: 0;
    .MuiDrawer-paper {
      width: ${drawerWidth};
    }
  }
`;
const StyledToolbar = styled(Toolbar)``;
const StyledHamburger = styled(IconButton)`
  && {
    margin-right: ${({ theme }) => theme.spacing(2)};
    display: ${({ open }) => open && 'none'};
  }
`;
const StyledArrowButton = styled(IconButton)``;
const SideDrawer = () => {
  const { open, setOpen } = useContext(DrawerContext);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledToolbar>
        <StyledHamburger
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          open={open}
          theme={theme}
        >
          <MenuIcon />
        </StyledHamburger>
      </StyledToolbar>

      <StyledDrawer
        variant='persistent'
        anchor='left'
        open={open}
        width={drawerWidth}
      >
        <StyledList>
          {[
            { type: 'HOME', href: '/' },
            { type: 'KATEGORIE', href: '/kategorie' },
            { type: 'PHOTOSHOP', href: '/photoshop' },
          ].map(({ type, href }) => (
            <StyledListItem
              button
              key={type}
              component={Link}
              href={href}
              onClick={handleDrawerClose}
              style={{ textAlign: 'center' }}
            >
              <ListItemText primary={type} />
            </StyledListItem>
          ))}
        </StyledList>
        <StyledArrowWrap theme={theme}>
          <StyledArrowButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </StyledArrowButton>
        </StyledArrowWrap>
      </StyledDrawer>
    </>
  );
};
export default SideDrawer;
