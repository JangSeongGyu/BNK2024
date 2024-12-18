import useSound from 'use-sound';
import { CurrentState } from '../recoil/GameSelector';
import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';

import LevelUp from '../../music/levelup.mp3';
import Battle from '../../music/battlesong.mp3';
import Walk from '../../music/walking.mp3';
import WalkSound from '../../music/walkingsound.mp3';

const Sound = () => {
	const current = useRecoilValue(CurrentState);
	const walk = useRef(null);
	const walksound = useRef(null);
	const level = useRef(null);
	const battle = useRef(null);

	useEffect(() => {
		walk.current.play();
		if (current.includes('in')) {
			walk.current.pause();
			battle.current.play();
			return () => {
				battle.current.pause();
			};
		}

		if (current.includes('timeout')) {
			walk.current.pause();
		}
		if (current.includes('move')) {
			walksound.current.play();
		}
		if (current.includes('exp')) {
			walksound.current.pause();
		}

		if (current.includes('text')) {
			walk.current.pause();
			battle.current.play();
			return () => {
				battle.current.pause();
				battle.current.currentTime = 0;
			};
		}

		if (current.includes('in')) {
			walk.current.pause();
			battle.current.play();
			return () => {
				battle.current.pause();
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
			<audio ref={battle}>
				<source src={Battle} type="audio/mpeg" />
			</audio>
			<audio ref={level}>
				<source src={LevelUp} type="audio/mpeg" />
			</audio>
			<audio ref={walk}>
				<source src={Walk} type="audio/mpeg" />
			</audio>
			<audio ref={walksound}>
				<source src={WalkSound} type="audio/mpeg" />
			</audio>
		</>
	);
};
export default Sound;
