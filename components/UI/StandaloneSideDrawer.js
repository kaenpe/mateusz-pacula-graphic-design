import { IconButton, Typography } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../contexts/CategoryContext';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from '../../src/Link';
import { StyledTab } from './StandaloneDesktopTabs';
import { StyledFlexWrapper, StyledMenuItem } from './StandaloneNavbar';
//styled-components
const StyledHamburger = styled(IconButton)`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)};
    display: ${({ open }) => open && 'none'};
    color: ${({ theme }) => theme.palette.secondary.main};
    &:hover {
      background-color: ${({ theme }) =>
        fade(theme.palette.secondary.light, 0.25)};
    }
  }
`;
const StyledSideDrawer = styled(motion.div)`
  width: 45vw;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  position: absolute;
  height: 100vh;
  z-index: 3;
  display: grid;
  grid-auto-rows: auto;
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
const StyledArrowWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, active }) =>
    active
      ? fade(theme.palette.primary.dark, 0.5)
      : theme.palette.primary.main};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  justify-content: center;
`;
const StyledArrowButton = styled(IconButton)``;
//
const StandaloneSideDrawer = () => {
  //variables
  const theme = useTheme();
  const router = useRouter();
  const variants = {
    shrinked: { height: '60px' },
    expanded: {
      height: '360px',
    },
  };
  const { slug } = router.query;
  //

  //states
  const { openSideDrawer, setOpenSideDrawer } = useContext(DrawerContext);
  const { category } = useContext(CategoryContext);
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
      <StyledFlexWrapper>
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
          <>
            <StyledSideDrawer
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '40vw' }}
              exit={{ opacity: 0, width: 0 }}
              theme={theme}
            >
              <Link style={{ textDecoration: 'none' }} href={'/'}>
                <StyledSideDrawerTab
                  theme={theme}
                  active={router.pathname === '/'}
                >
                  <Typography variant='button'>HOME</Typography>
                </StyledSideDrawerTab>
              </Link>

              {[
                { name: 'banery', href: '/kategorie/banery' },
                { name: 'before after', href: '/kategorie/before after' },
                { name: 'miniaturki', href: '/kategorie/miniaturki' },
                { name: 'photoshop', href: '/kategorie/photoshop' },
                { name: 'tapety', href: '/kategorie/tapety' },
              ].map(({ name, href }) => {
                return (
                  <Link
                    style={{ textDecoration: 'none' }}
                    href={'/kategorie/[slug]'}
                    as={href}
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
              })}

              <Link style={{ textDecoration: 'none' }} href={'/kontakt'}>
                <StyledSideDrawerTab
                  theme={theme}
                  active={category === 'kontakt'}
                >
                  <Typography variant='button'>KONTAKT</Typography>
                </StyledSideDrawerTab>
              </Link>
              <StyledArrowWrap theme={theme}>
                <StyledArrowButton onClick={() => closeSideDrawerHandler()}>
                  <ChevronLeftIcon />
                </StyledArrowButton>
              </StyledArrowWrap>
            </StyledSideDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StandaloneSideDrawer;
