import { Box, LinearProgress, Typography } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { HpState } from '../recoil/GameAtom';
import { MonsterDisplayState } from '../recoil/GameSelector';

const HpCounter = () => {
	const hp = useRecoilValue(HpState);
	const monsterDisplay = useRecoilValue(MonsterDisplayState);
	return (
		<Box sx={{ display: monsterDisplay, position: 'relative' }}>
			<LinearProgress
				sx={{
					width: 400,
					height: 40,
					backgroundColor: grey[400],
					borderRadius: 100,
					'& .MuiLinearProgress-bar': {
						backgroundColor: red[600],
						borderRadius: 100,
					},
				}}
				value={hp}
				variant="determinate"
			/>
			<Typography
				sx={{ position: 'absolute', left: 20, top: -6, fontSize: 32, fontWeight: 'bold', color: 'white' }}
			>
				HP {hp}
			</Typography>
		</Box>
	);
};
export default HpCounter;

// MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-14zqand-MuiLinearProgress-root
