import { Box, Typography } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';

const Intro = () => {
	return (
		<Box
			sx={{
				...AlignCenter,
				width: '100%',
				height: '100%',
				bgcolor: 'black',
				position: 'relative', // Make this container relative for absolute positioning of circles
				overflow: 'hidden', // Hide overflow for circles going outside the box
				p: 10,
			}}
		>
			{/* Background Animation */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -1, // Place it behind other content
					'&::before': {
						content: '""',
						position: 'absolute',
						top: '50%',
						left: '50%',
						width: '200px',
						height: '200px',
						borderRadius: '50%',
						backgroundColor: 'rgba(255, 255, 255, 0.1)',
						animation: 'circle-animation 5s infinite',
						transform: 'translate(-50%, -50%) scale(0)', // Start at scale 0
					},
					'@keyframes circle-animation': {
						'0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
						'50%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 },
						'100%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
					},
				}}
			/>
			{false && (
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
						pt: 2,
						pb: 5,
					}}
				>
					<Box>
						<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 40 }}>
							{/* 2024 忘年会 */}
						</Typography>
						<Typography sx={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 20 }}>
							- サブタイトル -
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: 200 }}>
						<Typography sx={{ width: '100%', color: 'white', fontSize: 24 }}>- New Game</Typography>
						<Typography sx={{ width: '100%', color: 'white', fontSize: 24 }}>- Load Game</Typography>
						<Typography sx={{ width: '100%', color: 'white', fontSize: 24 }}>- Setting</Typography>
						<Typography sx={{ width: '100%', color: 'white', fontSize: 24 }}>- Exit</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};
export default Intro;
