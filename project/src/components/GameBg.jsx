import { Box } from '@mui/material';
import game_bg from '../../images/gamebg.jpg';
import game_bg2 from '../../images/gamebg2.png';
import { HorizonAlignCenter } from '../GeneralBoxOption';

const GameBg = () => {
	return (
		// <Box
		// 	sx={{
		// 		...HorizonAlignCenter,
		// 		width: '100%',
		// 		height: '100%',
		// 		position: 'absolute',
		// 		top: 0,
		// 		left: 0,
		// 		zIndex: 10,
		// 	}}
		// >
		<Box
			sx={{
				width: '100%',
				height: '100%',
				border: 6,
				borderRadius: 2,
				zIndex: 0,
				color: 'rgba(255,255,255,0.8)',
			}}
			component={'img'}
			src={game_bg2}
		/>
		// </Box>
	);
};
export default GameBg;
