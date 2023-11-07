type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

interface IPerson {
  name: string;
  age: number;
  a: boolean;
  b: boolean[];
}

type newType1 = Partial<IPerson>;
type newType2 = MyPartial<IPerson>;

export {};
