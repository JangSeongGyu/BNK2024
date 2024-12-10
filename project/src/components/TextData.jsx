export const TextData = (stage) => {
	console.log(stage);
	if (stage == 0) {
		return '赤で印をつけたモンスターの名前は？';
	} else if (stage == 1) {
		return '問題1';
	} else if (stage == 2) {
		return '問題2';
	} else if (stage == 3) {
		return '問題3';
	} else if (stage == 4) {
		return '問題4';
	} else if (stage == 5) {
		return '問題5';
	} else if (stage == 6) {
		return '問題6';
	} else return '問題エラー';
};

export const SelectData = (stage) => {
	console.log(stage);
	if (stage == 0) {
		return { A: 'A:ファンファン', B: 'B:ドムドム', C: 'C:ウォンビン', D: 'D:ルーガン' };
	} else if (stage == 1) {
		return { A: '問題1ーA', B: '問題1ーB', C: '問題1ーC', D: '問題1ーD' };
	} else if (stage == 2) {
		return { A: '問題2ーA', B: '問題2ーB', C: '問題2ーC', D: '問題2ーD' };
	} else if (stage == 3) {
		return { A: '問題3ーA', B: '問題3ーB', C: '問題3ーC', D: '問題3ーD' };
	} else if (stage == 4) {
		return { A: '問題4ーA', B: '問題4ーB', C: '問題4ーC', D: '問題4ーD' };
	} else if (stage == 5) {
		return { A: '問題5ーA', B: '問題5ーB', C: '問題5ーC', D: '問題5ーD' };
	} else if (stage == 6) {
		return { A: '問題6ーA', B: '問題6ーB', C: '問題6ーC', D: '問題6ーD' };
	} else return { A: 'A', B: 'B', C: 'C', D: 'D' };
};
