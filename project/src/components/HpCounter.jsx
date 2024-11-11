import { Box, LinearProgress } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';

const HpCounter = ({ hp }) => {
	return (
		<LinearProgress
			colorP
			sx={{
				width: 400,
				height: 25,
				backgroundColor: grey[400],
				borderRadius: 100,
				'& .MuiLinearProgress-bar': {
					backgroundColor: 'green',
					borderRadius: 100,
				},
			}}
			value={hp}
			variant="determinate"
		/>
	);
};
export default HpCounter;

// MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-14zqand-MuiLinearProgress-root
