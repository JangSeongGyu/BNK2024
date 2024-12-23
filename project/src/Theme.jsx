import {} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
	components: {
		//
	},
	typography: {
		color: 'white',
		fontFamily: `"DotGothic16"`,
	},
	palette: {
		border: {
			main: 'rgba(255,255,255,0.9)',
			size: 6,
		},
	},
});

export default Theme;
