import { Box, Typography } from '@mui/material';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import GameMainText from '../components/GameRightText';
import { AlignCenter } from '../GeneralBoxOption';
import GameBg from '../components/GameBg';
import Stage1 from '../../images/stage1.png';
import attack from '../../images/attack.gif';
import GameLeftText from '../components/GameLeftText';
import { useEffect } from 'react';
import axios from 'axios';
import HpCounter from '../components/HpCounter';
import GameRightText from '../components/GameRightText';

const Game = () => {
	const { stage } = useParams();
	useEffect(() => {
		axios.post('/stage', { stage: stage });
	}, [stage]);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', bgcolor: 'black' }}>
			<Box sx={{ ...AlignCenter, position: 'relative', width: '100%', height: '60%', py: 2, px: 2 }}>
				{/* <GameBg /> */}
				<Box sx={{ ...AlignCenter, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
					<Box sx={{ ...AlignCenter, flexDirection: 'column', gap: 1 }}>
						{/* モンスター */}
						{/* <Box sx={{ width: 400, animation: 'dying 3s linear' }} component={'img'} src={Stage1} /> */}
						{/* <Box sx={{ width: 400 }} component={'img'} src={attack}/> */}
						<HpCounter hp={100} />
					</Box>
				</Box>
			</Box>
			{/* <Box sx={{ ...AlignCenter, width: '100%', height: '40%', pb: 2, px: 2, gap: 2 }}>
				<GameLeftText />
				<GameRightText />
			</Box> */}
		</Box>
	);
};
export default Game;
