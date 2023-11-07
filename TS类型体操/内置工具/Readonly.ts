type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

interface IPerson {
  name?: string;
  age: number;
  a?: boolean;
  b?: boolean[];
}

type newType1 = Readonly<IPerson>;
type newType2 = MyReadonly<IPerson>;

export {};
