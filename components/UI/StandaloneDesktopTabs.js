import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from '../../src/Link';
import { StyledFlexWrapper } from './StandaloneNavbar';

const StyledTab = styled.div`
  width: 140px;
  height: 60px;
  color: ${({ theme, active }) =>
    active ? theme.palette.secondary.light : theme.palette.secondary.dark};
  background-color: ${({ theme, active }) =>
    active ? theme.palette.primary.light : 'inherit '};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  &::after {
    content: '';
    background-color: white;
    transition: transform 0.4s ease-out;
    width: 100%;
    height: 100%;
    transform: scale(0.001, 0.001);
    position: absolute;
    opacity: 0.05;
    z-index: 0;
  }
  &:hover {
    text-decoration: none;
    &::after {
      opacity: 0.2;
      transition: transform 0.4s ease-out;
      transform: scale(1, 1);
      z-index: 100;
    }
  }
`;
const StyledCategoryDrawer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 140px;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
const variants = {
  shrinked: { height: '60px' },
  expanded: { height: '360px' },
};

const StandaloneDesktopTabs = () => {
  const { openCategoryDrawer, setOpenCategoryDrawer } = useContext(
    DrawerContext
  );
  const toggleCategoryTabsHandler = () => {
    setOpenCategoryDrawer((prevState) => !prevState);
  };
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <StyledFlexWrapper>
        <Link style={{ textDecoration: 'none' }} href={'/'}>
          <StyledTab theme={theme} active={router.pathname === '/'}>
            <Typography variant='button'>HOME</Typography>
          </StyledTab>
        </Link>

        <StyledCategoryDrawer
          theme={theme}
          variants={variants}
          animate={openCategoryDrawer ? 'expanded' : 'shrinked'}
          transition={{ duration: 0.5 }}
        >
          <div>
            <StyledTab
              theme={theme}
              active={router.pathname === '/kategorie'}
              onClick={() => toggleCategoryTabsHandler()}
            >
              <Typography variant='button'>KATEGORIE </Typography>
            </StyledTab>
          </div>

          {[
            { type: 'MINIATURKI', href: '/miniaturki' },
            { type: 'BANERY', href: '/banery' },
            { type: 'TAPETY', href: '/tapety' },
            { type: 'BEFORE/AFTER', href: '/beforeafter' },
            { type: 'PHOTOSHOP', href: '/photoshop' },
          ].map(({ type, href }) => {
            return (
              <Link href={href}>
                <StyledTab
                  key={type}
                  theme={theme}
                  active={router.pathname === { href }}
                  onClick={() => toggleCategoryTabsHandler()}
                >
                  <Typography variant='button'>{type} </Typography>
                </StyledTab>
              </Link>
            );
          })}
        </StyledCategoryDrawer>
      </StyledFlexWrapper>
    </>
  );
};

export default StandaloneDesktopTabs;
