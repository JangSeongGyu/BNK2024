import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { CurrentState } from '../recoil/GameSelector';
import boxImage from '../../images/box.png';
import { useMemo } from 'react';
const Prize = () => {
	const current = useRecoilValue(CurrentState);
	const display = useMemo(() => {
		return current.includes('prize');
	}, [current]);

	const animation = useMemo(() => {}, [current]);

	return <>{display && <Box component={'img'} src={boxImage} />}</>;
};
export default Prize;
