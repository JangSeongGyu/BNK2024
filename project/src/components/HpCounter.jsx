import { Box, LinearProgress, Typography } from '@mui/material';
import { green, grey, lightGreen, red } from '@mui/material/colors';
import { useRecoilValue } from 'recoil';
import { HpState } from '../recoil/GameAtom';
import { MonsterDisplayState } from '../recoil/GameSelector';
import { useMemo } from 'react';

const HpCounter = () => {
	const hp = useRecoilValue(HpState);
	const monsterDisplay = useRecoilValue(MonsterDisplayState);
	const hpcount = useMemo(() => {
		if (hp > 100) {
			return hp / 10;
		}
		return hp;
	}, [hp]);
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
				value={hpcount}
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
