type First<T extends unknown[]> = T extends [infer F, ...args: unknown[]] ? F : never;

type T = First<["hello", "world"]>;

export {};
