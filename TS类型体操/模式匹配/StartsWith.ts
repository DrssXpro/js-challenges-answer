type StartsWith<S extends string, Prefix extends string> = S extends `${Prefix}${string}` ? true : false;

type T1 = StartsWith<"abc", "a">;
type T2 = StartsWith<"abc", "b">;

export {};
