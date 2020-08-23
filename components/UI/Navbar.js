import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
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
    '&:hover': {
      '&::after': {
        content: '""',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.15,
      },
    },
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab
            classes={{ textColorInherit: classes.textColorInherit }}
            label='Item One'
            {...a11yProps(0)}
          />
          <Tab
            classes={{ textColorInherit: classes.textColorInherit }}
            label='Item Two'
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
