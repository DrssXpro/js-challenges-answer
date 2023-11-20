type GetConstructorParameters<F extends new (...args: any[]) => any> = F extends new (...args: infer R) => any
  ? R
  : never;

interface IPerson {
  name: string;
  age: number;
}

interface TestFunction {
  new (name: string, age: number): IPerson;
}

type T = GetConstructorParameters<TestFunction>;

export {};
