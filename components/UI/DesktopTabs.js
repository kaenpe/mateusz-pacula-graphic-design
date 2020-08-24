import { makeStyles, Tab, Tabs } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import Link from '../../src/Link';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  flexContainer: {
    height: '60px',
  },
  tabHover: {
    textDecoration: 'none',
    '&::after': {
      content: '""',
      backgroundColor: 'white',
      transition: 'transform 0.4s ease-out',
      width: '100%',
      height: '100%',
      transform: 'scale(0.001, 0.001)',
      position: 'absolute',
      opacity: 0.05,
      pointerEvents: 'none',
      zIndex: 0,
    },
    '&:hover': {
      textDecoration: 'none',
      '&::after': {
        opacity: 0.2,
        transition: 'transform 0.4s ease-out',
        transform: 'scale(1, 1)',
        zIndex: 100,
      },
    },
  },
}));

const DesktopTabs = () => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname === '/' ? 0 : 1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        textColor='inherit'
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'
        TabIndicatorProps={{ style: { display: 'none' } }}
        classes={{
          flexContainer: classes.flexContainer,
        }}
      >
        <Tab
          component={Link}
          href={'/'}
          label='HOME'
          {...a11yProps(1)}
          className={classes.tabHover}
        />

        <Tab
          component={Link}
          href={'/kategorie'}
          label='KATEGORIE'
          {...a11yProps(3)}
          className={classes.tabHover}
        />

        <Tab
          label='PHOTOSHOP'
          {...a11yProps(1)}
          component={Link}
          href={'/photoshop'}
          className={classes.tabHover}
        />
      </Tabs>
    </>
  );
};

export default DesktopTabs;
