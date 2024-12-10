import { Box, Typography } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import bg from '../../images/bg.gif';
import bg2 from '../../images/bg2.gif';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
	const navigate = useNavigate();
	const MenuButton = ({ title }) => {
		return (
			<Typography
				onClick={() => {
					navigate('/game');
				}}
				sx={{
					width: '100%',
					color: 'white',
					fontSize: 30,
					transition: 'all .5s',
					':hover': { bgcolor: 'white', color: 'black', userSelect: 'none' },
				}}
			>
				{title}
			</Typography>
		);
	};

	return (
		<Box
			sx={{
				...AlignCenter,
				width: '100%',
				height: '100%',
				bgcolor: 'black',
				position: 'relative',
				p: 10,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 40,
					backgroundSize: '50%',
					backgroundRepeat: 'repeat',
					backgroundImage: `url(${bg2})`,
					animation: `main 8s linear infinite`,
					'@keyframes main': {
						'0%': {
							opacity: 0.2,
						},
						'50%': {
							opacity: 0.8,
						},
						'100%': {
							opacity: 0.2,
						},
					},
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					border: 5,
					borderRadius: 3,
					justifyContent: 'space-between',
					borderColor: 'border.main',
					bgcolor: 'rgba(0,0,0,1)',
					zIndex: 100,
					pt: 5,
					pb: 5,
				}}
			>
				<Box>
					<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 90 }}>
						2024 MIC 忘年会
					</Typography>
					<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 40 }}>
						- ミズカミクエスト -
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', pl: 4, width: 300 }}>
					<MenuButton title="● New Game" />
					<MenuButton title="○ Loading Game" />
					<MenuButton title="○ Setting" />
					<MenuButton title="○ Exit" />
				</Box>
			</Box>
		</Box>
	);
};
export default Intro;
