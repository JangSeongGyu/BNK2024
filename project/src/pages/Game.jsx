import { Box, Typography } from '@mui/material';

import { AlignCenter } from '../GeneralBoxOption';
import GameBg from '../components/GameBg';
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
//
import Stage0 from '../../images/slime.png';
import Stage1 from '../../images/stage1.png';
import Stage2 from '../../images/kingslime.png';
import Stage3 from '../../images/ryuou.png';
//
import game_bg0 from '../../images/gamebg0.jpg';
import game_bg1 from '../../images/gamebg1.png';
import game_bg2 from '../../images/gamebg2.png';
import game_bg3 from '../../images/gamebg3.png';
import attack from '../../images/attack.gif';
import attack2 from '../../images/attack2.gif';
import Subject from '../components/Subject';
import Result from '../components/Result';
import Hide from '../components/Hide';
import Prize from '../components/Prize';

const Game = () => {
	const [stage, setStage] = useState(-1);
	const [hp, setHp] = useRecoilState(HpState);
	const [currentIndex, setCurrentIndex] = useRecoilState(CurrentIndexState);
	const [bgImage, setBgImage] = useState(game_bg0);
	const [monsterImage, setMonsterImage] = useState(Stage0);
	const current = useRecoilValue(CurrentState);
	const bgAnimation = useRecoilValue(BgAnimationState);
	const monsterDisplay = useRecoilValue(MonsterDisplayState);
	const timerDisplay = useRecoilValue(TimerDisplayState);
	const monsterAnimation = useRecoilValue(MonsterAnimationState);
	const attackAnimation = useRecoilValue(AttackAnimationState);
	const [showAttack, setShowAttack] = useState(false);

	useEffect(() => {
		if (current === 'text0') {
			setStage(0);
		} else if (current === 'text1') {
			setStage(1);
		} else if (current === 'text2' || current == 'timeout2') {
			setStage(2);
		} else if (current === 'text3' || current == 'timeout3') {
			setStage(3);
			//
		} else if (current === 'text4' || current == 'timeout4') {
			setStage(4);
			//
		} else if (current === 'text5' || current == 'timeout5') {
			setStage(5);
			//
		} else if (current === 'text6' || current == 'timeout6') {
			setStage(6);
			//
		} else if (current == 'timeout7') {
			setStage(7);
			//
		}
		// 1st
		else if (current === 'attack0') {
			setHp(0);
		}
		// 2nd
		else if (current === 'attack1') {
			setHp(67);
		} else if (current === 'attack2') {
			setHp(30);
		} else if (current === 'attack3') {
			setHp(0);
		}
		// Bonus
		else if (current === 'attack4') {
			setHp(0);
		}
		// 3th
		else if (current === 'attack5') {
			setHp(600);
		} else if (current === 'attack6') {
			setHp(300);
		} else if (current === 'attack7') {
			setHp(0);
		} else if (current == 'move1') {
			setBgImage(game_bg1);
		} else if (current == 'move2') {
			setBgImage(game_bg2);
		} else if (current == 'move3') {
			setBgImage(game_bg3);
		} else if (current === 'newMonster1') {
			setHp(100);
			setMonsterImage(Stage1);
		} else if (current === 'newMonster2') {
			setHp(100);
			setMonsterImage(Stage2);
		} else if (current === 'newMonster3') {
			setHp(1000);
			setMonsterImage(Stage3);
		} else if (current.includes('result')) {
			setStage(-1);
		}
	}, [current]);

	useEffect(() => {
		let count = 0;
		if (stage >= 1) count = 4;
		else if (stage >= 4) count = 3;
		axios.post('/stage', { stage: stage, count: count });
	}, [stage]);

	const handleAnimationEnd = (e) => {
		if (e.animationName == 'dying') {
			currentChange();
		}
	};

	const currentChange = () => {
		setCurrentIndex(currentIndex + 1);
	};

	useEffect(() => {
		if (attackAnimation) {
			setShowAttack(true);
			const timer = setTimeout(() => {
				setShowAttack(false);
			}, 800);
			return () => clearTimeout(timer);
		}
	}, [attackAnimation, current]);

	const Attack = useCallback(() => {
		if (showAttack) {
			return (
				<Box
					sx={{
						width: 400,
						height: 400,
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 1000,
					}}
					component={'img'}
					src={attack2}
				/>
			);
		} else {
			return <></>;
		}
	}, [attackAnimation, showAttack]);

	return (
		<Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
			<Box
				onClick={currentChange}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '100%',
					bgcolor: 'white',
					userSelect: 'none',
					bgcolor: 'black',
				}}
			>
				{/* <Typography sx={{ color: 'white' }}>{current}</Typography> */}
				{timerDisplay && <TimeOut setStage={setStage} />}

				<Box sx={{ ...AlignCenter, position: 'relative', width: '100%', height: '70%', py: 2, px: 2 }}>
					<GameBg bgAnimation={bgAnimation} bgImage={bgImage} />
					<Result />
					<Subject stage={stage} type={'game'} />
					<Box
						sx={{
							...AlignCenter,
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							zIndex: 10,
						}}
					>
						<Box
							sx={{ ...AlignCenter, position: 'relative', flexDirection: 'column', gap: 1, zIndex: 100 }}
						>
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
								src={monsterImage}
							/>

							<Hide />
							<Attack />
							<HpCounter />
							<Prize />
						</Box>
					</Box>
				</Box>
				<Box sx={{ ...AlignCenter, width: '100%', height: '30%', pb: 2, px: 2, gap: 2 }}>
					<GameRightText />
					<GameLeftText />
				</Box>
				<Sound />
			</Box>
		</Box>
	);
};
export default Game;
