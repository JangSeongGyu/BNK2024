import { selector } from 'recoil';
import { CurrentIndexState, HpState } from './GameAtom';
import { SelectData, TextData } from '../components/TextData';

export const CurrentState = selector({
	key: 'CurrentState',
	get: ({ get }) => {
		const currentList = [
			'move0',
			'exp0',
			// 練習
			'in0',
			'text0',
			'timeout0',
			'result0',
			'result0_change',
			'attack0',
			'out0',
			'move1',
			//Stage１
			'exp1',
			'newMonster1',
			'in1',
			'text1',
			'timeout1',
			'result1',
			'result1_change',
			'attack1',
			// 'text2',
			'timeout2',
			'result2',
			'result2_change',
			'onemore2',
			'attack2',
			// 'text3',
			'timeout3',
			'result3',
			'result3_change',
			'attack3',
			'out1',
			'move2',
			'exp2',
			//Bonus Stage
			'newMonster2',
			'in2',
			'text4',
			'timeout4',
			'result4',
			'result4_change',
			'attack4',
			'out2',
			'move3',
			'exp3',
			'newMonster3',
			'in3',

			// 3rd Stage
			'hide',
			'timeout5',
			'result5',
			'result5_change',
			'attack5',
			// 'text6',
			'timeout6',
			'result6',
			'result6_change',
			'attack6',
			'text7',
			'timeout7',
			'result7',
			'result7_change',
			'attack7',
			'out3',
			'prize',
			'prize_animation',
			'prize_paper',
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
		if (current.includes('move')) return 'move';
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
				return 'dying 4s linear';
			}
			case 'attack5': {
				return 'attack 1s linear';
			}
			case 'attack6': {
				return 'attack 1s linear';
			}
			case 'attack7': {
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
			current.includes('result') ||
			current.includes('attack') ||
			current.includes('hide')
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
			case 'move0': {
				return 'どんな冒険が始まるんだろう…';
			}
			case 'in0': {
				return 'スライムが現れた！！';
			}
			case 'exp0': {
				return '始まりの草原';
			}
			case 'text0':
			case 'timeout0': {
				return TextData(0);
			}
			case 'result0':
			case 'result0_change':
			case 'result1':
			case 'result1_change':
			case 'result2':
			case 'result2_change':
			case 'result3':
			case 'result3_change':
			case 'result4':
			case 'result4_change':
			case 'result5':
			case 'result5_change':
			case 'result6':
			case 'result6_change':
			case 'result7':
			case 'result7_change': {
				return '皆さんの回答はこちら！';
			}
			case 'attack0': {
				return '答えは「A」だ！！';
			}
			case 'out0': {
				return `スライムを やっつけた！\nけいけんち ０ポイントをかくとく！`;
			}
			//
			case 'move1': {
				return 'はあビックリした…\n次のモンスターは何だろう？';
			}
			case 'newMonster1': {
				return '忘れられた地';
			}
			case 'in1': {
				return 'ゴーレムが現れた！';
			}
			case 'text1':
			case 'timeout1': {
				return TextData(1);
			}
			case 'attack1': {
				return '答えは「A」だ！\nモンスターの体力が少し減った！';
			}
			//
			case 'text2':
			case 'timeout2': {
				return TextData(2);
			}
			case 'attack2': {
				return '答えは「C」だ！\nモンスターの体力がさらに減った！\nあと少し！';
			}
			case 'text3':
			case 'timeout3': {
				return TextData(3);
			}
			case 'attack3': {
				return '答えは「B」だ！とどめの一撃！';
			}
			case 'out1': {
				return `ゴーレムを やっつけた！\nけいけんち 100ポイントをかくとく！`;
			}
			case 'move2': {
				return 'お！この建物は何だろう…？';
			}
			case 'newMonster2': {
				return '★ボーナスステージ！★';
			}
			case 'in2': {
				return 'メタルスライムが現れた！';
			}
			case 'text4':
			case 'timeout4': {
				return TextData(4);
			}
			case 'attack4': {
				return '答えは「D」だ！';
			}
			case 'out2': {
				return 'メタルスライムを やっつけた！\nけいけんち 500ポイントをかくとく！';
			}
			case 'move3': {
				return '夜になってきた…何だか不気味だな…';
			}
			case 'newMonster3': {
				return '荒れ果てたあきる野';
			}
			case 'in3': {
				return '竜王が現れた！\n「ハッハッハ！私からはとっておきの試練を与えよう！」';
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
			case 'text7':
			{
					return "最後はお前らが絶対に間違えられない問題を答えてもらうぞ！";
			}
			case 'timeout7': {
				return TextData(7);
			}
			case 'attack7': {
				return '答えは「A」だ！';
			}

			case 'out3': {
				return '竜王を やっつけた！\nけいけんち 5000ポイントをかくとく！';
			}

			case 'prize': {
				return '宝箱見せる!';
			}
			case 'prize_animation': {
				return '宝箱アニメーション？';
			}
			case 'prize_paper': {
				return '紙を見せる';
			}
			case 'hide': {
				return '(モクモク…)';
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
				return '';
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
			case 'attack0':
			case 'result0':
			case 'result0_change': {
				return SelectData(0);
			}
			case 'text1':
			case 'timeout1':
			case 'attack1':
			case 'result1':
			case 'result1_change': {
				return SelectData(1);
			}
			case 'text2':
			case 'timeout2':
			case 'attack2':
			case 'result2':
			case 'result2_change': {
				return SelectData(2);
			}
			case 'text3':
			case 'timeout3':
			case 'attack3':
			case 'result3':
			case 'result3_change':
				{
					return SelectData(3);
				}
				ｐ;
			case 'text4':
			case 'timeout4':
			case 'attack4':
			case 'result4':
			case 'result4_change': {
				return SelectData(4);
			}
			case 'text5':
			case 'timeout5':
			case 'attack5':
			case 'result5':
			case 'result5_change': {
				return SelectData(5);
			}
			case 'text6':
			case 'timeout6':
			case 'attack6':
			case 'result6':
			case 'result6_change': {
				return SelectData(6);
			}
			case 'text7':
			case 'timeout7':
			case 'attack7':
			case 'result7':
			case 'result7_change': {
				return SelectData(7);
			}
			default: {
				return { A: 'A', B: 'B', C: 'C', D: 'D' };
			}
		}
	},
	set: ({ reset }) => {},
});
