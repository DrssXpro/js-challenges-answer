type MyExclude<T, K> = T extends K ? never : T;

type Type = string | number | boolean;

type newType1 = Exclude<Type, string | number>;
type newType2 = MyExclude<Type, string | number>;

export {};
