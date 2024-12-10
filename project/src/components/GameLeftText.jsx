import { Box, Typography } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectorTextState } from '../recoil/GameSelector';

const GameLeftText = () => {
	const [selected, setSelected] = useState(0);
	const select = useRecoilValue(SelectorTextState);
	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((prev) => (prev + 1) % Object.keys(select).length); // Update to use titles.length
		}, 5000);
		return () => clearInterval(interval);
	}, [select.length]);

	const SelectButton = ({ key, text, index }) => {
		return (
			<Typography
				onClick={() => {}}
				sx={{
					width: '50%',
					color: selected === index ? 'black' : 'white',
					fontSize: 44,
					borderRadius: 1,
					transition: 'all .5s',
					pl: 2,

					animation: selected === index ? 'shimmer 3s infinite' : 'fadeIn 10s ease-in-out infinite',
					'@keyframes shimmer': {
						'0%': { bgcolor: 'white', opacity: 0.6 },
						'50%': { bgcolor: '', opacity: 1 },
						'100%': { bgcolor: 'white', opacity: 0.6 },
					},
				}}
				key={index}
			>
				{text}
			</Typography>
		);
	};

	return (
		<Box
			sx={{
				...HorizonAlignCenter,
				// flexDirection: 'column',
				flexFlow: 'wrap',
				width: '100%',
				height: '100%',
				bgcolor: 'rgba(0,0,0,0.85)',
				border: 6,
				borderRadius: 2,
				p: 1,
				borderColor: 'border.main',
				zIndex: 100,
			}}
		>
			{Object.keys(select).map((key, index) => (
				<SelectButton key={key} text={select[key]} index={index} />
			))}
		</Box>
	);
};
export default GameLeftText;
