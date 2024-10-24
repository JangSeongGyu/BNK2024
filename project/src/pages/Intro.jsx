import { Box, Typography } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import bg from '../../images/bg.gif';
import bg2 from '../../images/bg2.gif';

const Intro = () => {
	const MenuButton = ({ title }) => {
		return (
			<Typography
				sx={{
					width: '100%',
					color: 'white',
					fontSize: 28,
					transition: 'all .5s',
					':hover': { bgcolor: 'white', userSelect: 'none' },
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
				position: 'relative', // Make this container relative for absolute positioning of circles
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
					opacity: 0.5,
				}}
				// component="img"
				// src={bg}
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
					borderColor: 'white',
					bgcolor: 'black',
					zIndex: 100,
					pt: 5,
					pb: 5,
				}}
			>
				<Box>
					<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 80 }}>
						2024 MIC 忘年会
					</Typography>
					<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 32 }}>
						- サブタイトル -
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', pl: 4, width: 250 }}>
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
