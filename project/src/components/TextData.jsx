export const TextData = (stage) => {
	console.log(stage);
	if (stage == 0) {
		return '赤で印をつけたモンスターの名前は？';
	} else if (stage == 1) {
		return 'この写真の中で【クエ】はどれ？';
	} else if (stage == 2) {
		return '次の４つのうち、MICと同い年のものはどれ？';
	} else if (stage == 3) {
		return '完全メシスタンドの売上ランキングを正しく並べたものはどれ？';
	} else if (stage == 4) {
		return 'ドムドムがいた場所はどこ？';
	} else if (stage == 5) {
		return '問題5';
	} else if (stage == 6) {
		return '問題6';
	} else return 'なし';
};

export const SelectData = (stage) => {
	if (stage == 0) {
		return { A: 'A:ファンファン', B: 'B:ドムドム', C: 'C:ウォンビン', D: 'D:ルーガン' };
	} else if (stage == 1) {
		return { A: '「A」がクエだ！', B: '「B」がクエだ！', C: '「C」がクエだ！', D: '「D」がクエだ！' };
	} else if (stage == 2) {
		return { A: 'A：サザエさん', B: 'B：ビートたけし', C: 'C：西武園ゆうえんち', D: 'D：三ツ矢サイダー' };
	} else if (stage == 3) {
		return { A: 'A：①→②→④→③', B: 'B：①→③→②→④', C: 'C：③→②→①→④', D: 'D：③→①→④→②' };
	} else if (stage == 4) {
		return {
			A: 'ドムドムは「A」にいた',
			B: 'ドムドムは「B」にいた',
			C: 'ドムドムは「C」にいた',
			D: 'ドムドムは「D」にいた',
		};
	} else if (stage == 5) {
		return { A: '問題5ーA', B: '問題5ーB', C: '問題5ーC', D: '問題5ーD' };
	} else if (stage == 6) {
		return { A: '問題6ーA', B: '問題6ーB', C: '問題6ーC', D: '問題6ーD' };
	} else return {};
};
