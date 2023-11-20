type ShiftArr<T extends unknown[]> = T extends [first: unknown, ...args: infer Args] ? Args : never;

type T = ShiftArr<[1, 2, 3]>;

export {};
