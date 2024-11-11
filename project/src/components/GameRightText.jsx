import { keyframes } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SlideText from './SlideText';

const GameRightText = () => {
	const text =
		'問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く問題ここに書く';
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
				モンスタの名前
			</Typography>
			<Typography
				sx={{
					fontSize: 30,
					color: 'white',
					textWrap: 'wrap',
					whiteSpace: '', // Preserve line breaks if needed
				}}
			>
				<SlideText text={text} speed={50} />
			</Typography>
		</Box>
	);
};

export default GameRightText;
