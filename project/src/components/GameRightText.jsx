import { keyframes } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import SlideText from './SlideText';
import { TextData } from './TextData';
import { useRecoilValue } from 'recoil';
import { GameNameState, GameTextState } from '../recoil/GameSelector';

const GameRightText = () => {
	const text = useRecoilValue(GameTextState);
	const name = useRecoilValue(GameNameState);
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				bgcolor: 'rgba(0,0,0,0.85)',
				border: 6,
				borderRadius: 2,
				borderColor: 'border.main',
				zIndex: 100,
				px: 2,
				py: 1,
			}}
		>
			<Typography
				sx={{
					fontSize: 40,
					color: 'white',
					textWrap: 'wrap',
					whiteSpace: '', // Preserve line breaks if needed
				}}
			>
				{name}
			</Typography>
			<Typography
				sx={{
					fontSize: 40,
					color: 'white',
					textWrap: 'wrap',
					whiteSpace: 'pre-wrap', // Preserve line breaks if needed
				}}
			>
				<SlideText
					text={useMemo(() => {
						return text;
					}, [text])}
					speed={50}
				/>
			</Typography>
		</Box>
	);
};

export default GameRightText;
