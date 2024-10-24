import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';

const Server = () => {
	return (
		<Box sx={{ ...AlignCenter, width: '100%', height: '100%', bgcolor: 'black', p: 10 }}>
			<Box sx={{ width: '100%', height: '100%', border: 5, borderRadius: 3, borderColor: 'white' }}>
				<Typography sx={{ color: 'white' }}>test</Typography>
			</Box>
		</Box>
	);
};
export default Server;
