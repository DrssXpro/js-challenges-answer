type PopArr<T extends unknown[]> = T extends [...args: infer Args, last: unknown] ? Args : never;

type T = PopArr<[1, 2, 3]>;

export {};
