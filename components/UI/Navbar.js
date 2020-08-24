import {
  Box,
  IconButton,
  MenuItem,
  Tab,
  Toolbar,
  withStyles,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  positionFixed: {
    zIndex: 100,
  },
  offset: theme.mixins.toolbar,

  colorInherit: {
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
  },
  regular: { justifyContent: 'space-between', minHeight: 'auto' },
  flexContainer: {
    height: '60px',
  },
  gutters: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  bigIndicator: {
    height: '50px',
  },
}));
const StyledTab = withStyles({
  root: {
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
})(Tab);

export default function Navbar() {
  const classes = useStyles();

  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname === '/' ? 0 : 1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        position='fixed'
        classes={{ positionFixed: classes.positionFixed }}
      >
        <Toolbar classes={{ regular: classes.regular }} disableGutters>
          <Tabs
            textColor='secondary'
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            TabIndicatorProps={{ style: { display: 'none' } }}
            classes={{
              flexContainer: classes.flexContainer,
            }}
          >
            <StyledTab
              component={Link}
              href={'/'}
              label='HOME'
              {...a11yProps(1)}
            />

            <StyledTab
              component={Link}
              href={'/kategorie'}
              label='KATEGORIE'
              {...a11yProps(3)}
            />

            <StyledTab
              label='PHOTOSHOP'
              {...a11yProps(1)}
              component={Link}
              href={'/photoshop'}
            />
          </Tabs>
          <Box style={{ display: 'flex' }}>
            {' '}
            <MenuItem disableRipple classes={{ gutters: classes.gutters }}>
              <IconButton
                classes={{ colorInherit: classes.colorInherit }}
                color='inherit'
                onClick={() => window.open('reddit.com', '_blank')}
              >
                <InstagramIcon />
              </IconButton>
            </MenuItem>
            <MenuItem disableRipple classes={{ gutters: classes.gutters }}>
              <IconButton
                classes={{ colorInherit: classes.colorInherit }}
                color='inherit'
              >
                <EmailIcon />
              </IconButton>
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
