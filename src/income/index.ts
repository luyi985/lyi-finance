import { ICalc } from './types';
export const calc: ICalc = (amount, conditions) => {
	const sorted = [...conditions];
	sorted.sort((a, b) => (a.uplimit < b.uplimit ? -1 : 1));
	return sorted.reduce(
		(prev, condition) => (prev === -1 && amount <= condition.uplimit ? condition.callback(amount) : prev),
		-1,
	);
};
