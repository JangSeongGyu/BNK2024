import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import GameBg from '../components/GameBg';
import Stage1 from '../../images/stage1.png';
import attack from '../../images/attack.gif';
import GameLeftText from '../components/GameLeftText';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import HpCounter from '../components/HpCounter';
import GameRightText from '../components/GameRightText';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	AttackAnimationState,
	BgAnimationState,
	CurrentState,
	MonsterAnimationState,
	MonsterDisplayState,
	TimerDisplayState,
} from '../recoil/GameSelector';
import { CurrentIndexState, HpState } from '../recoil/GameAtom';
import TimeOut from '../components/TimeOut';
import Sound from '../components/Sound';

export const Game = () => {
	const [stage, setStage] = useState(0);
	const [hp, setHp] = useRecoilState(HpState);
	const [currentIndex, setCurrentIndex] = useRecoilState(CurrentIndexState);
	const current = useRecoilValue(CurrentState);
	const bgAnimation = useRecoilValue(BgAnimationState);
	const monsterDisplay = useRecoilValue(MonsterDisplayState);
	const timerDisplay = useRecoilValue(TimerDisplayState);
	const monsterAnimation = useRecoilValue(MonsterAnimationState);
	const attackAnimation = useRecoilValue(AttackAnimationState);

	useEffect(() => {
		if (current === 'text1') {
			setStage(1);
		} else if (current === 'attack1') {
			setHp(hp - 33);
			setStage(0);
		} else if (current === 'text2') {
			setStage(2);
		} else if (current === 'attack2') {
			setHp(hp - 33);
			setStage(0);
		} else if (current === 'text3') {
			setStage(3);
		} else if (current === 'attack3') {
			setHp(hp - 34);
			setStage(0);
		} else if (current === 'newMonster') {
			setHp(100);
		}
	}, [current]);

	useEffect(() => {
		axios.post('/stage', { stage: stage });
	}, [stage]);

	const handleAnimationEnd = (e) => {
		if (e.animationName == 'dying') {
			currentChange();
		}
	};

	const currentChange = () => {
		setCurrentIndex(currentIndex + 1);
	};

	const Attack = useCallback(() => {
		if (attackAnimation) {
			return (
				<Box
					sx={{
						width: 300,
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 100,
					}}
					component={'img'}
					src={attack}
				/>
			);
		} else {
			return <></>;
		}
	}, [attackAnimation]);

	return (
		<Box
			onClick={currentChange}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
				bgcolor: 'black',
				userSelect: 'none',
			}}
		>
			<Typography>{current}</Typography>
			{timerDisplay && <TimeOut />}

			<Box sx={{ ...AlignCenter, position: 'relative', width: '100%', height: '60%', py: 2, px: 2 }}>
				<GameBg bgAnimation={bgAnimation} />
				<Box
					sx={{
						...AlignCenter,
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						zIndex: 100,
					}}
				>
					<Box sx={{ ...AlignCenter, position: 'relative', flexDirection: 'column', gap: 1 }}>
						{/* モンスター */}
						<Box
							sx={{
								display: monsterDisplay,
								width: 400,
								// height: 10,
								// bgcolor: 'grey',
								animation: monsterAnimation,
							}}
							onAnimationEnd={handleAnimationEnd}
							component={'img'}
							src={Stage1}
						/>

						{/* <Attack /> */}
						<HpCounter />
					</Box>
				</Box>
			</Box>
			<Box sx={{ ...AlignCenter, width: '100%', height: '40%', pb: 2, px: 2, gap: 2 }}>
				<GameLeftText />
				<GameRightText />
			</Box>
			<Sound />
		</Box>
	);
};
