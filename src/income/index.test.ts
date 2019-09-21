import { calc } from './index';
import { IncomeCondition } from './types';

describe('calc', () => {
	let conditions: IncomeCondition[];
	beforeEach(() => {
		conditions = [
			{
				uplimit: 18200,
				callback: () => 0,
			},
			{
				uplimit: 37000,
				callback: value => (value - 18200) * 0.19,
			},
			{
				uplimit: 90000,
				callback: value => (value - 37000) * 0.325 + 3572,
			},
			{
				uplimit: 180000,
				callback: value => (value - 90000) * 0.37 + 20797,
			},
			{
				uplimit: Infinity,
				callback: value => (value - 180000) * 0.45 + 54097,
			},
		];
	});
	it('less than 18200', () => {
		expect(calc(18200, conditions)).toBe(0);
	});

	it('less than 37000', () => {
		expect(calc(18201, conditions)).toBe(0.19);
		expect(calc(37000, conditions)).toBe(3572);
	});

	it('less than 90000', () => {
		expect(calc(37001, conditions)).toBe(3572.325);
		expect(calc(90000, conditions)).toBe(20797);
	});

	it('less than 180000', () => {
		expect(calc(90001, conditions)).toBe(20797.37);
		expect(calc(180000, conditions)).toBe(54097);
	});

	it('over 180000', () => {
		expect(calc(180001, conditions)).toBe(54097.45);
	});
});
