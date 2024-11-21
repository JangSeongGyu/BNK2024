import { Box } from '@mui/material';
import game_bg from '../../images/gamebg.jpg';
import game_bg2 from '../../images/gamebg2.png';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';

const GameBg = ({ bgAnimation }) => {
	return (
		<Box
			sx={{
				...AlignCenter,
				width: '100%',
				height: '100%',
				position: 'absolute',
				overflow: 'hidden',
				border: 1,
				top: 0,
				left: 0,
				zIndex: 10,
			}}
		>
			<Box
				sx={{
					width: '20%',
					height: '50%',
					borderRadius: 2,
					zIndex: 0,
					color: 'rgba(255,255,255,0.8)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					animation: `${bgAnimation} 5s linear`,
				}}
				component={'img'}
				// src={game_bg2}
			/>
		</Box>
	);
};
export default GameBg;
