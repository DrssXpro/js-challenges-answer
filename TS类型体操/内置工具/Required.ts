type MyRequired<T> = {
  [key in keyof T]-?: T[key];
};

interface IPerson {
  name?: string;
  age: number;
  a?: boolean;
  b?: boolean[];
}

type newType1 = Required<IPerson>;
type newType2 = MyRequired<IPerson>;

export {};
