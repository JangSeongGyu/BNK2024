export const TextData = (stage) => {
	console.log(stage);
	if (stage == 1) {
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

export const engFullToHalf = (str) => {
	// 全角英数字を半角に変換
	str = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
	});
	return str;
};
