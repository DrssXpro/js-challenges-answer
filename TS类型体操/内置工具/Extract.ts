type MyExtract<T, K> = T extends K ? T : never;

type Type = string | number | boolean;

type newType1 = Extract<Type, string>;
type newType2 = MyExtract<Type, string>;

export {};
