export enum LivingStatus {
	RESIDENTS,
	FOREIGN_RESIDENTS,
	CHILDREN,
	WORKING_HOLIDAY,
}
export interface IncomeCondition {
	uplimit: number;
	callback(value: number): number;
}

export interface ICalc {
	(amount: number, conditions: ReadonlyArray<IncomeCondition>): number;
}
