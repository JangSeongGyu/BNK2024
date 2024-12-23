export const TextData = (stage) => {
	console.log(stage);
	if (stage == 0) {
		return '赤で印をつけたモンスターの名前は？';
	} else if (stage == 1) {
		return '次の４つのうち、MICと同い年のものはどれ？';
	} else if (stage == 2) {
		return 'この写真の中で【クエ】はどれ？';
	} else if (stage == 3) {
		return '完全メシスタンドの売上ランキングを正しく並べたものはどれ？';
	} else if (stage == 4) {
		return 'ドムドムがいた場所はどこ？';
	} else if (stage == 5) {
		return 'ハーゲンダッツはどれ？\n4人の答えを参考に考えてみよ！';
	} else if (stage == 6) {
		return '本物の「みつを」はどれ？\n残り二つは「のりを」の作品だぞ！';
	} else if (stage == 7) {
		return '上質紙の斤量、正しいものはどれ？\nテーブル上の紙を触って考えてみよ！';
	} else return '';
};

export const SelectData = (stage) => {
	if (stage == 0) {
		return { A: 'A:ファンファン', B: 'B:ドムドム', C: 'C:ウォンビン', D: 'D:ルーガン' };
	} else if (stage == 1) {
		return { A: 'A：サザエさん', B: 'B：ビートたけし', C: 'C：西武園ゆうえんち', D: 'D：三ツ矢サイダー' };
	} else if (stage == 2) {
		return { A: '「A」がクエだ！', B: '「B」がクエだ！', C: '「C」がクエだ！', D: '「D」がクエだ！' };
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
		return { A: '「A」がハーゲンダッツだ！', B: '「B」がハーゲンダッツだ！', C: '「C」がハーゲンダッツだ！' };
	} else if (stage == 6) {
		return { A: '「A」がみつをだ！', B: '「B」がみつをだ！', C: '「C」がみつをだ！' };
	} else if (stage == 7) {
		return { A: 'A：菊48.5', B: 'B：菊62.5', C: 'C：菊76.5' };
	} else return {};
};
