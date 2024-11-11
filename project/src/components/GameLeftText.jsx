import { Box, Typography } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import { useEffect, useState } from 'react';

const GameLeftText = () => {
	const [selected, setSelected] = useState(0);
	const titles = ['A 10回以下', 'B 30回以下', 'C 50回以下', 'D 50回以上'];
	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((prev) => (prev + 1) % titles.length); // Update to use titles.length
		}, 5000);
		return () => clearInterval(interval);
	}, [titles.length]);

	const SelectButton = ({ title, index }) => {
		return (
			<Typography
				onClick={() => {}}
				sx={{
					width: '100%',
					color: selected === index ? 'black' : 'white',
					fontSize: 40,
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
				{title}
			</Typography>
		);
	};

	return (
		<Box
			sx={{
				...HorizonAlignCenter,
				flexDirection: 'column',
				width: '30%',
				height: '100%',
				bgcolor: 'rgba(0,0,0,0.85)',
				border: 6,
				borderRadius: 2,
				px: 1,
				borderColor: 'border.main',
				zIndex: 100,
			}}
		>
			{titles.map((title, index) => (
				<SelectButton title={title} index={index} />
			))}
		</Box>
	);
};
export default GameLeftText;
