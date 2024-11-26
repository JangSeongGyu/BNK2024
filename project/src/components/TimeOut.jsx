import { Box, Typography } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';

const TimeOut = () => {
	const [timer, setTimer] = useState(60);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const designOption = useMemo(() => {
		if (timer < 10) {
			return { color: 'red' };
		} else {
			return { color: 'white' };
		}
	}, [timer]);

	return (
		<Box sx={{ position: 'absolute', top: 35, left: 35, zIndex: 100 }}>
			<Typography sx={{ ...designOption, fontSize: 24 + (60 - timer) * 0.6 }}>{timer}</Typography>
		</Box>
	);
};

export default TimeOut;
