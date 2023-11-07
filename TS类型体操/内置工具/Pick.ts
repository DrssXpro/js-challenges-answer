type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

interface IPerson {
  name: string;
  age: number;
  a: boolean;
  b: boolean[];
}

type newType1 = Pick<IPerson, "a" | "age">;
type newType2 = MyPick<IPerson, "a" | "age">;

export {};
