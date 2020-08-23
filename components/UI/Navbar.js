import { Box, IconButton, MenuItem, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react';
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
  textColorInherit: {
    width: '1em',
    '&::after': {
      content: '""',
      backgroundColor: 'white',
      width: '0',
      height: '0',
      position: 'absolute',
      opacity: 0.15,
    },
    '&:hover': {
      '&::after': {
        transition: 'all 0.5s ease-in',
        width: '100%',
        height: '100%',
      },
    },
  },
  colorInherit: {
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.25),
    },
  },
  regular: { justifyContent: 'space-between', minHeight: 'auto' },
  flexContainer: {
    height: '60px',
  },
}));

export default function SimpleTabs() {
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
            <Tab
              classes={{ textColorInherit: classes.textColorInherit }}
              label='HOME'
              {...a11yProps(1)}
            />

            <Tab
              classes={{ textColorInherit: classes.textColorInherit }}
              label='KATEGORIE'
              {...a11yProps(3)}
            />
            <Tab
              classes={{ textColorInherit: classes.textColorInherit }}
              label='PHOTOSHOP'
              {...a11yProps(1)}
            />
          </Tabs>
          <Box style={{ display: 'flex' }}>
            {' '}
            <MenuItem>
              <IconButton
                classes={{ colorInherit: classes.colorInherit }}
                color='inherit'
              >
                <InstagramIcon />
              </IconButton>
            </MenuItem>
            <MenuItem>
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
