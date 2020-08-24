import {
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react';
import DesktopTabs from './DesktopTabs';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme) => ({
  positionFixed: {
    zIndex: 3,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  offset: theme.mixins.toolbar,
  colorInherit: {
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
  },
  gutters: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  regular: { justifyContent: 'space-between', minHeight: 'auto' },
}));

const Navbar = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar
        position='fixed'
        classes={{ positionFixed: classes.positionFixed }}
      >
        <Toolbar classes={{ regular: classes.regular }} disableGutters>
          {matches ? <SideDrawer></SideDrawer> : <DesktopTabs></DesktopTabs>}
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
};
export default Navbar;
