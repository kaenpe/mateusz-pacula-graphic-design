import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
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

const StandaloneDesktopTabs = () => {
  const { openCategoryDrawer, setOpenCategoryDrawer } = useContext(
    DrawerContext
  );

  const [currentCategory, setCurrentCategory] = useState('KATEGORIE');

  const toggleCategoryDrawerHandler = () => {
    setOpenCategoryDrawer((prevState) => !prevState);
  };

  const closeCategoryDrawerHandler = () => {
    setOpenCategoryDrawer(false);
  };
  const router = useRouter();
  const variants = {
    shrinked: { height: '60px' },
    expanded: {
      height: router.pathname === '/' ? '360px' : '300px',
    },
  };
  useEffect(() => {
    setCurrentCategory(
      router.pathname === '/' ? 'KATEGORIE' : router.query.slug
    );
  }, [router.query.slug, router.pathname]);
  const theme = useTheme();

  return (
    <>
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
              <Typography variant='button'>{currentCategory} </Typography>
            </StyledTab>
          </div>

          {[
            { name: 'miniaturki', href: '/kategorie/miniaturki' },
            { name: 'banery', href: '/kategorie/banery' },
            { name: 'tapety', href: '/kategorie/tapety' },
            { name: 'before after', href: '/kategorie/before after' },
            { name: 'photoshop', href: '/kategorie/photoshop' },
          ]
            .filter(({ name }) => name !== router.query.slug)
            .map(({ name, href }) => {
              return (
                <Link href={'/kategorie/[slug]'} as={href} key={name}>
                  <StyledTab
                    key={name}
                    theme={theme}
                    onClick={() => closeCategoryDrawerHandler()}
                  >
                    <Typography variant='button'>
                      {name.toUpperCase()}
                    </Typography>
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
