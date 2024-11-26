import { selector } from 'recoil';
import { CurrentIndexState, HpState } from './GameAtom';
import { TextData } from '../components/TextData';

export const CurrentState = selector({
	key: 'CurrentState',
	get: ({ get }) => {
		const currentList = [
			'exp1',
			// 練習
			'in0',
			'text0',
			'timeout0',
			'attack0',
			'out0',
			'move',
			//Stage１
			'newMonster1',
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
			'move',
			//Stage２
			'newMonster2',
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
		else return 'bgnormal';
	},
	set: ({ reset }) => {},
});

export const MonsterAnimationState = selector({
	key: 'MonsterAnimationState',
	get: ({ get, set }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'in0': {
				return 'bgnormal 1s linear';
			}
			case 'attack0': {
				return 'dying 4s linear';
			}
			case 'attack1': {
				return 'attack 1s linear';
			}
			case 'attack2': {
				return 'attack 1s linear';
			}
			case 'attack3': {
				return 'dying 4s linear';
			}
			case 'attack4': {
				return 'attack 1s linear';
			}
			case 'attack5': {
				return 'attack 1s linear';
			}
			case 'attack6': {
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
		if (
			current.includes('in') ||
			current.includes('text') ||
			current.includes('timeout') ||
			current.includes('attack')
		) {
			return 'block';
		}
		return 'none';
	},
	set: ({ reset }) => {},
});

export const AttackAnimationState = selector({
	key: 'AttackAnimationState',
	get: ({ get, set }) => {
		const current = get(CurrentState);
		if (current.includes('attack')) {
			return true;
		} else return false;
	},
	set: ({ reset }) => {},
});

export const TimerDisplayState = selector({
	key: 'TimerDisplayState',
	get: ({ get }) => {
		const current = get(CurrentState);
		if (current.includes('timeout')) {
			return true;
		}
		return false;
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
			case 'in0': {
				return '練習モンスターが現れた！！';
			}
			case 'exp0': {
				return '練習問題内容！';
			}
			case 'text0':
			case 'timeout0': {
				return TextData(0);
			}
			case 'attack0': {
				return '答えは「B」だ！！';
			}
			case 'out0': {
				return `練習モンスターを やっつけた！\nけいけんち ０ポイントをかくとく！`;
			}
			//
			case 'in1': {
				return '4択モンスターが現れた！';
			}
			case 'text1':
			case 'timeout1': {
				return TextData(1);
			}
			case 'attack1': {
				return '答えは「A」だ！';
			}
			//
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
				return '4択モンスターを倒した！';
			}

			case 'text4':
			case 'timeout4': {
				return TextData(4);
			}
			case 'attack4': {
				return '答えは「A」だ！';
			}
			case 'text5':
			case 'timeout5': {
				return TextData(5);
			}
			case 'attack5': {
				return '答えは「A」だ！';
			}
			case 'text6':
			case 'timeout6': {
				return TextData(6);
			}
			case 'attack6': {
				return '答えは「A」だ！';
			}
			case 'out2': {
				return '格付けモンスターを倒した！';
			}
			default: {
				return '';
			}
		}
	},
	set: ({ reset }) => {},
});

export const GameNameState = selector({
	key: 'GameNameState',
	get: ({ get }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'text0':
			case 'timeout0': {
				return '練習モンスター';
			}
			case 'text1':
			case 'timeout1': {
				return '4択モンスター';
			}
			case 'text2':
			case 'timeout2': {
				return '4択モンスター';
			}
			case 'text3':
			case 'timeout3': {
				return '4択モンスター';
			}
			case 'text4':
			case 'timeout4': {
				return '格付けモンスター';
			}
			case 'text5':
			case 'timeout5': {
				return '格付けモンスター';
			}
			case 'text6':
			case 'timeout6': {
				return '格付けモンスター';
			}
			default: {
				return '';
			}
		}
	},
	set: ({ reset }) => {},
});

export const SelectorTextState = selector({
	key: 'SelectorTextState',
	get: ({ get }) => {
		const current = get(CurrentState);
		switch (current) {
			case 'text0':
			case 'timeout0':
			case 'attack0': {
				return { A: '問題0ーA', B: '問題0ーB', C: '問題0ーC', D: '問題0ーD' };
			}
			case 'text1':
			case 'timeout1':
			case 'attack1': {
				return { A: '問題1ーA', B: '問題1ーB', C: '問題1ーC', D: '問題1ーD' };
			}
			case 'text2':
			case 'timeout2':
			case 'attack2': {
				return { A: '問題2ーA', B: '問題2ーB', C: '問題2ーC', D: '問題2ーD' };
			}
			case 'text3':
			case 'timeout3':
			case 'attack3': {
				return { A: '問題3ーA', B: '問題3ーB', C: '問題3ーC', D: '問題3ーD' };
			}
			case 'text4':
			case 'timeout4':
			case 'attack4': {
				return { A: '問題4ーA', B: '問題4ーB', C: '問題4ーC', D: '問題4ーD' };
			}
			case 'text5':
			case 'timeout5':
			case 'attack5': {
				return { A: '問題5ーA', B: '問題5ーB', C: '問題5ーC', D: '問題5ーD' };
			}
			case 'text6':
			case 'timeout6':
			case 'attack6': {
				return { A: '問題6ーA', B: '問題6ーB', C: '問題6ーC', D: '問題6ーD' };
			}
			default: {
				return { A: 'A', B: 'B', C: 'C', D: 'D' };
			}
		}
	},
	set: ({ reset }) => {},
});
