import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1b1d',
    },
    secondary: {
      main: '#fdfcfc)',
    },
    error: {
      main: '#861818',
    },
    background: {
      default: '#4f504e',
    },
  },
});

export default theme;
