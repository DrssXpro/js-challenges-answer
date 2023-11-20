type Last<T extends unknown[]> = T extends [...args: unknown[], infer L] ? L : never;

type T = Last<["hello", "world"]>;

export {};
