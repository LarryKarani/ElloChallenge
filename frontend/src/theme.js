import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: { fontFamily: ['Mulish'].join(',') },
	palette: {
		primary: {
			main: '#5ACCCC',
			contrastText: '#FFFFFF',
			stealBlue: '#335C6E',
			yellow: '#FABD33',
		},
		secondary: {
			turquoiseLight: '#CFFAFA',
			orangeRed: '#F76434',
			main: '#4AA088',
			yellowDark: '#FAAD00',
			orangePastel: '#FFE6DC',
		},
	},
});

export default theme;