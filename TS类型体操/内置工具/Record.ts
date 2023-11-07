type MyRecord<K extends number | string | symbol, T> = {
  [key in K]: T;
};

const o1: Record<"name" | "age", string> = {
  name: "abc",
  age: "123",
};
const o2: MyRecord<"name" | "age", string> = {
  name: "abc",
  age: "123",
};

export {};
