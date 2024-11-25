import { Box } from '@mui/material';
import game_bg from '../../images/gamebg.jpg';
import game_bg2 from '../../images/gamebg2.png';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import { useSetRecoilState } from 'recoil';
import { CurrentIndexState } from '../recoil/GameAtom';

const GameBg = ({ bgAnimation, bgImage }) => {
	const setCurrentIndex = useSetRecoilState(CurrentIndexState);
	const animationChange = (e) => {
		if (e.animationName == 'move') {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	return (
		<Box
			sx={{
				...AlignCenter,
				width: '100%',
				height: '100%',
				position: 'absolute',
				overflow: 'hidden',
				p: 2,
				top: 0,
				left: 0,
				zIndex: 10,
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					borderRadius: 2,
					zIndex: 0,
					color: 'rgba(255,255,255,0.9)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					animation: `${bgAnimation} 5s linear`,
				}}
				onAnimationEnd={animationChange}
				component={'img'}
				src={bgImage}
			/>
		</Box>
	);
};
export default GameBg;
