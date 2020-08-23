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
}));
const StyledTab = withStyles({
  root: {
    '&::after': {
      content: '""',
      backgroundColor: 'white',
      width: '0',
      height: '0',
      position: 'absolute',
      opacity: 0.15,
    },
    '&:hover': {
      textDecoration: 'none',
      '&::after': {
        transition: 'all 0.5s ease-in',
        width: '100%',
        height: '100%',
      },
    },
  },
})(Tab);

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            TabIndicatorProps={{ style: { display: 'none' } }}
            classes={{ flexContainer: classes.flexContainer }}
          >
            <StyledTab
              component={Link}
              href={'/'}
              label='HOME'
              {...a11yProps(1)}
            />

            <StyledTab label='KATEGORIE' {...a11yProps(3)} />
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
