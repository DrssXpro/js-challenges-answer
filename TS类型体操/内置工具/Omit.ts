type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

interface IPerson {
  name: string;
  age: number;
  a: boolean;
  b: boolean[];
}

type newType1 = Omit<IPerson, "name" | "age">;
type newType2 = MyOmit<IPerson, "name" | "age">;

export {};
