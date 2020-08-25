import { Tab, Tabs, useTheme } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
  && {
    color: ${({ theme }) => theme.palette.secondary.light};
    .MuiTabs-flexContainer {
      height: 60px;
    }
  }
`;
const StyledTab = styled(Tab)`
  && {
    &::after {
      content: '';
      background-color: white;
      transition: transform 0.4s ease-out;
      width: 100%;
      height: 100%;
      transform: scale(0.001, 0.001);
      position: absolute;
      opacity: 0.05;
      pointer-events: none;
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
  }
`;
const DesktopTabs = () => {
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState(router.pathname === '/' ? 0 : 1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <StyledTabs
        theme={theme}
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {[
          { label: 'HOME', href: '/' },
          { label: 'KATEGORIE', href: '/kategorie' },
          { label: 'PHOTOSHOP', href: '/photoshop' },
        ].map(({ label, href }) => (
          <StyledTab
            label={label}
            key={label}
            onClick={() => router.replace(href)}
          ></StyledTab>
        ))}
      </StyledTabs>
    </>
  );
};

export default DesktopTabs;
