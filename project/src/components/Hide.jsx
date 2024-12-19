import { Box } from '@mui/material';
import cloud from '../../images/cloud.png';
import { useRecoilValue } from 'recoil';
import { CurrentState } from '../recoil/GameSelector';
import { useMemo } from 'react';

const Hide = () => {
	const current = useRecoilValue(CurrentState);

	const display = useMemo(() => {
		return current == 'hide';
	}, [current]);
	return (
		<>
			{display && (
				<>
					<Box
						component={'img'}
						src={cloud}
						sx={{ position: 'absolute', top: 100, left: 100, transform: 'rotate(40deg)' }}
					/>
					<Box
						component={'img'}
						src={cloud}
						sx={{ position: 'absolute', top: -120, left: 100, transform: 'rotateZ(81deg)' }}
					/>
					<Box
						component={'img'}
						src={cloud}
						sx={{ position: 'absolute', top: 60, left: -100, transform: 'rotateZ(50deg)' }}
					/>

					<Box
						component={'img'}
						src={cloud}
						sx={{ position: 'absolute', top: -120, left: -100, transform: 'rotateX(30deg)' }}
					/>
				</>
			)}
		</>
	);
};
export default Hide;
