import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(240, 5%, 11%)',
    },
    secondary: {
      main: '#fdfcfc)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'hsl(90, 1%, 31%)',
    },
  },
});

export default theme;
