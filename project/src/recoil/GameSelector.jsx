import { selector } from 'recoil';
import { CurrentIndexState, HpState } from './GameAtom';
import { TextData } from '../components/TextData';

export const CurrentState = selector({
	key: 'CurrentState',
	get: ({ get }) => {
		const currentList = [
			'move',
			'in1',
			'text1',
			'timeout1',
			'attack1',
			'text2',
			'timeout2',
			'attack2',
			'text3',
			'timeout3',
			'attack3',
			'out1',
			'newMonster',
			// New
			'move',
			'in2',
			'text4',
			'timeout4',
			'attack4',
			'text5',
			'timeout5',
			'attack5',
			'text6',
			'timeout6',
			'attack6',
			'out',
		];
		const index = get(CurrentIndexState);
		return currentList[index];
	},
	set: ({ reset }) => {},
});

export const BgAnimationState = selector({
	key: 'BgAnimationState',
	get: ({ get }) => {
		const current = get(CurrentState);
		if (current == 'move') return 'move';
		else return '';
	},
	set: ({ reset }) => {},
});

export const MonsterAnimationState = selector({
	key: 'MonsterAnimationState',
	get: ({ get, set }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'attack1': {
				return 'attack 1s linear';
			}
			case 'attack2': {
				return 'attack 1s linear';
			}
			case 'attack3': {
				return 'dying 4s linear';
			}
		}
	},
	set: ({ reset }) => {},
});

export const MonsterDisplayState = selector({
	key: 'MonsterDisplayState',
	get: ({ get }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'out1': {
				return 'none';
			}
			case 'move': {
				return 'none';
			}
			default: {
				return 'block';
			}
		}
	},
	set: ({ reset }) => {},
});

export const AttackAnimationState = selector({
	key: 'AttackAnimationState',
	get: ({ get, set }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'attack1': {
				return true;
			}
			case 'attack2': {
				return true;
			}
			case 'attack3': {
				return true;
			}
			default: {
				return false;
			}
		}
	},
	set: ({ reset }) => {},
});

export const TimerDisplayState = selector({
	key: 'TimerDisplayState',
	get: ({ get }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'timeout1': {
				return true;
			}
			case 'timeout2': {
				return true;
			}
			case 'timeout3': {
				return true;
			}
			default: {
				return false;
			}
		}
	},
	set: ({ reset }) => {},
});

// export const AttackDisplayState = selector({
// 	key: 'MonsterDisplayState',
// 	get: ({ get }) => {
// 		const current = get(CurrentState);
// 		switch (current) {
// 			case 'out1': {
// 				return 'none';
// 			}
// 			case 'move': {
// 				return 'none';
// 			}
// 			default: {
// 				return 'block';
// 			}
// 		}
// 	},
// 	set: ({ reset }) => {},
// });

export const GameTextState = selector({
	key: 'GameTextState',
	get: ({ get }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'in1': {
				return 'モンスター１';
			}
			case 'text1':
			case 'timeout1': {
				return TextData(1);
			}
			case 'attack1': {
				return '答えは「A」だ！';
			}
			case 'text2':
			case 'timeout2': {
				return TextData(2);
			}
			case 'attack2': {
				return '答えは「A」だ！';
			}
			case 'text3':
			case 'timeout3': {
				return TextData(3);
			}
			case 'attack3': {
				return '答えは「A」だ！';
			}
			case 'out1': {
				return 'モンスター１を倒した！';
			}
			default: {
				return '';
			}
		}
	},
	set: ({ reset }) => {},
});
