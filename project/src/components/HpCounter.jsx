import { Box, LinearProgress } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { HpState } from '../recoil/GameAtom';
import { MonsterDisplayState } from '../recoil/GameSelector';

const HpCounter = () => {
	const hp = useRecoilValue(HpState);
	const monsterDisplay = useRecoilValue(MonsterDisplayState);
	return (
		<LinearProgress
			sx={{
				display: monsterDisplay,
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
