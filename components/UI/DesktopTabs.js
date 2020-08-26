import { Typography } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../contexts/CategoryContext';
import { DrawerContext } from '../../contexts/DrawerContext';
import Link from '../../src/Link';
import { StyledFlexWrapper } from './Navbar';

//styled
export const StyledTab = styled(motion.div)`
  width: 140px;
  height: 60px;
  color: ${({ theme, active }) =>
    active ? theme.palette.secondary.light : theme.palette.secondary.dark};
  background-color: ${({ theme, active }) =>
    active ? fade(theme.palette.secondary.light, 0.1) : 'inherit '};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    background-color: ${({ theme }) =>
      fade(theme.palette.secondary.light, 0.2)};
    transition: transform 0.4s ease-out;
    width: 100%;
    height: 100%;
    transform: scale(0.001, 0.001);
    position: absolute;
    opacity: 0.05;
    z-index: 0;
  }
  &:hover {
    &::after {
      opacity: 0.2;
      transition: transform 0.4s ease-out;
      transform: scale(1, 1);
      z-index: 100;
    }
  }
`;
export const StyledCategoryDrawer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 140px;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
//
const DesktopTabs = () => {
  //vars
  const router = useRouter();
  const variants = {
    shrinked: { height: '60px' },
    expanded: {
      height: router.pathname !== '/kategorie/[slug]' ? '360px' : '300px',
    },
  };
  const theme = useTheme();
  const { slug } = router.query;
  //

  //states
  const { openCategoryDrawer, setOpenCategoryDrawer } = useContext(
    DrawerContext
  );
  const { category } = useContext(CategoryContext);
  //

  //functions
  const toggleCategoryDrawerHandler = () => {
    setOpenCategoryDrawer((prevState) => !prevState);
  };
  //
  const closeCategoryDrawerHandler = () => {
    setOpenCategoryDrawer(false);
  };
  //effects

  //
  return (
    <StyledFlexWrapper>
      <Link style={{ textDecoration: 'none' }} href={'/'}>
        <StyledTab
          onClick={() => closeCategoryDrawerHandler()}
          theme={theme}
          active={router.pathname === '/'}
        >
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
            active={router.pathname === '/kategorie/[slug]'}
            onClick={() => toggleCategoryDrawerHandler()}
          >
            <Typography variant='button'>{category} </Typography>
          </StyledTab>
        </div>

        {[
          { name: 'banery', href: '/kategorie/banery' },
          { name: 'before after', href: '/kategorie/before after' },
          { name: 'miniaturki', href: '/kategorie/miniaturki' },
          { name: 'photoshop', href: '/kategorie/photoshop' },
          { name: 'tapety', href: '/kategorie/tapety' },
        ]
          .filter(({ name }) => name !== slug)
          .map(({ name, href }) => {
            return (
              <Link href={'/kategorie/[slug]'} as={href} key={name}>
                <StyledTab
                  key={name}
                  theme={theme}
                  onClick={() => closeCategoryDrawerHandler()}
                >
                  <Typography variant='button'>{name.toUpperCase()}</Typography>
                </StyledTab>
              </Link>
            );
          })}
      </StyledCategoryDrawer>
      <Link href={'/kontakt'}>
        <StyledTab
          active={router.pathname === '/kontakt'}
          theme={theme}
          onClick={() => closeCategoryDrawerHandler()}
        >
          <Typography variant='button'>KONTAKT</Typography>
        </StyledTab>
      </Link>
    </StyledFlexWrapper>
  );
};

export default DesktopTabs;
