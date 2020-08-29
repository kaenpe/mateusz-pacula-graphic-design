import { IconButton, Typography } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../contexts/CategoryContext';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from '../../src/Link';
import { StyledTab } from './DesktopTabs';
import { StyledFlexWrapper, StyledMenuItem } from './Navbar';
import { AuthContext } from '../../contexts/AuthContext';
//styled-components
const StyledHamburger = styled(IconButton)`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.palette.secondary.main};
    &:hover {
      background-color: ${({ theme }) =>
        fade(theme.palette.secondary.light, 0.25)};
    }
  }
`;
const StyledSideDrawer = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  position: absolute;
  height: 100vh;
  z-index: 3;
  display: grid;
  grid-auto-rows: auto;
  overflow-x: hidden;
  white-space: nowrap;
`;
export const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  opacity: 0.2;
`;
const StyledSideDrawerTab = styled(StyledTab)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, active }) =>
    active
      ? fade(theme.palette.primary.dark, 0.5)
      : theme.palette.primary.main};
  &::after {
    background-color: ${({ theme }) => fade(theme.palette.primary.light, 0.4)};
  }
`;
const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.secondary.light};
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 50vw;
`;

//
const SideDrawer = () => {
  //variables
  const theme = useTheme();
  const router = useRouter();

  //

  //states
  const { openSideDrawer, setOpenSideDrawer } = useContext(DrawerContext);
  const { category } = useContext(CategoryContext);
  const { auth } = useContext(AuthContext);
  //

  //functions
  const toggleSideDrawerHandler = () => {
    setOpenSideDrawer((prevState) => !prevState);
  };
  const closeSideDrawerHandler = () => {
    setOpenSideDrawer(false);
  };
  //

  //effects

  //
  return (
    <>
      <StyledFlexWrapper hamburger>
        {' '}
        <StyledMenuItem>
          <StyledHamburger
            color='inherit'
            aria-label='open drawer'
            onClick={() => toggleSideDrawerHandler()}
            edge='start'
            open={openSideDrawer}
            theme={theme}
          >
            <MenuIcon />
          </StyledHamburger>
        </StyledMenuItem>
      </StyledFlexWrapper>
      {openSideDrawer && (
        <StyledBackdrop
          onClick={() => closeSideDrawerHandler()}
        ></StyledBackdrop>
      )}
      <AnimatePresence>
        {openSideDrawer && (
          <StyledSideDrawer
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '60vw' }}
            exit={{ opacity: 0, width: 0 }}
            theme={theme}
            key='sidedrawer'
          >
            <Link href={'/'}>
              <StyledSideDrawerTab
                theme={theme}
                active={router.pathname === '/'}
              >
                <Typography variant='button'>HOME</Typography>
              </StyledSideDrawerTab>
            </Link>

            {['banery', 'before after', 'miniatury', 'photoshop', 'tapety'].map(
              (name) => {
                return (
                  <Link
                    href={'/kategorie/[slug]'}
                    as={`/kategorie/${name}`}
                    key={name}
                  >
                    <StyledSideDrawerTab
                      key={name}
                      theme={theme}
                      active={category === name}
                    >
                      <Typography variant='button'>
                        {name.toUpperCase()}
                      </Typography>
                    </StyledSideDrawerTab>
                  </Link>
                );
              }
            )}

            <Link href={'/kontakt'}>
              <StyledSideDrawerTab
                theme={theme}
                active={router.pathname === '/messages'}
              >
                <Typography variant='button'>WIADOMOŚCI</Typography>
              </StyledSideDrawerTab>
            </Link>
            {auth ? (
              <StyledSideDrawerTab theme={theme} onClick={() => logout()}>
                <Typography variant='button'>Logout</Typography>
              </StyledSideDrawerTab>
            ) : (
              <Link href='/login'>
                <StyledSideDrawerTab
                  theme={theme}
                  active={router.pathname === '/login'}
                >
                  <Typography variant='button'>Login</Typography>
                </StyledSideDrawerTab>
              </Link>
            )}
            <StyledLogoWrapper theme={theme}>
              <StyledLogo src='/bialelogo.png' alt='navlogo'></StyledLogo>
            </StyledLogoWrapper>
          </StyledSideDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideDrawer;
