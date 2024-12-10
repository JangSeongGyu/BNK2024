import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const SlideText = ({ text, speed }) => {
	const [displayedText, setDisplayedText] = useState('');
	useEffect(() => {
		console.log('display', displayedText);
	}, [displayedText]);
	useEffect(() => {
		setDisplayedText('');
		let currentIndex = -1;
		const interval = setInterval(() => {
			if (currentIndex < text.length - 1) {
				currentIndex++;
				setDisplayedText((prev) => prev + text[currentIndex]);
			} else {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text]);

	return <>{displayedText}</>;
};
export default SlideText;
