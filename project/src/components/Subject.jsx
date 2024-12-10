import { Box } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CurrentIndexState } from '../recoil/GameAtom';
import { CurrentState } from '../recoil/GameSelector';
import { useEffect, useMemo, useState } from 'react';

import subject0 from '../../images/subject0.png';

const Subject = () => {
	const current = useRecoilValue(CurrentState);
	console.log(current);

	useEffect(() => {
		// if(current')
	}, [current]);

	const display = useMemo(() => {
		if (current.includes('text') || current.includes('timeout')) {
			return true;
		}
		return false;
	}, [current]);

	return (
		<>
			{display && (
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
						zIndex: 100,
						backgroundColor: 'rgba(0,0,0,0.5)',
						backdropFilter: 'blur(6px)',
					}}
				>
					<Box
						sx={{
							// width: 1000,
							height: '100%',
							borderRadius: 2,
							// border: 5,
							bordercolor: 'border.main',
							zIndex: 2000,
							color: 'rgba(255,255,255,0.9)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}
						component={'img'}
						src={subject0}
					/>
				</Box>
			)}
		</>
	);
};
export default Subject;
