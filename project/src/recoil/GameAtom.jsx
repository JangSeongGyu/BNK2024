import { atom } from 'recoil';

export const CurrentIndexState = atom({
	key: 'CurrentIndexState',
	default: 0,
});

export const HpState = atom({
	key: 'HpState',
	default: 100,
});
