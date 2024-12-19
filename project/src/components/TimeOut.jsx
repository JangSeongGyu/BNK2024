import { Box, Typography } from '@mui/material';
import { useState, useEffect, useMemo, useRef } from 'react';
import Thinking from '../../music/thinking.mp3';
import { useRecoilValue } from 'recoil';
import { CurrentState } from '../recoil/GameSelector';

const TimeOut = () => {
	const current = useRecoilValue(CurrentState);
	const maxTime = useMemo(() => {
		if (current == 'timeout0') return 15;
		else if (current == 'timeout3') return 90;
		return 60;
	}, [current]);
	const [timer, setTimer] = useState(maxTime);
	const timerRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (timer == 0) timerRef.current.pause();
		else timerRef.current.play();
		return () => {
			// timerRef.current.currentTime = 0;
		};
	}, [timer]);

	const designOption = useMemo(() => {
		if (timer < 10) {
			return { color: 'red' };
		} else {
			return { color: 'white' };
		}
	}, [timer]);

	return (
		<Box sx={{ position: 'absolute', top: 20, left: 35, zIndex: 1000 }}>
			<Typography sx={{ ...designOption, fontSize: 60 }}>{timer}</Typography>
			<audio ref={timerRef}>
				<source src={Thinking} type="audio/mpeg" />
			</audio>
		</Box>
	);
};

export default TimeOut;
