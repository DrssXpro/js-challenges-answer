type MyNonNullable<T> = T extends null | undefined ? never : T;

type Type = string | number | boolean | undefined;

type newType1 = NonNullable<Type>;
type newType2 = MyNonNullable<Type>;

export {};
