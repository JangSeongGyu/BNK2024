import useSound from 'use-sound';
import { CurrentState } from '../recoil/GameSelector';
import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';

import Timer from '../../music/タイマー.mp3';
import Thinking from '../../music/考え中.mp3';
import LevelUp from '../../music/levelup.mp3';

const Sound = () => {
	const current = useRecoilValue(CurrentState);
	const timer = useRef(null);
	const think = useRef(null);
	const level = useRef(null);

	useEffect(() => {
		if (current.includes('text')) {
			think.current.play();
			console.log(think);
			return () => {
				think.current.pause();
				think.current.currentTime = 0;
			};
		}
		if (current.includes('timeout')) {
			timer.current.play();
			return () => {
				timer.current.pause();
				timer.current.currentTime = 0;
			};
		}

		if (current.includes('out') && !current.includes('timeout')) {
			level.current.play();
			return () => {
				level.current.pause();
				level.current.currentTime = 0;
			};
		}
	}, [current]);
	return (
		<>
			<audio ref={timer}>
				<source src={Timer} type="audio/mpeg" />
			</audio>
			<audio ref={think}>
				<source src={Thinking} type="audio/mpeg" />
			</audio>
			<audio ref={level}>
				<source src={LevelUp} type="audio/mpeg" />
			</audio>
		</>
	);
};
export default Sound;
