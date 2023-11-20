type GetInstanceType<F extends new (...args: any[]) => any> = F extends new (...args: any[]) => infer R ? R : never;

interface IPerson {
  name: string;
  age: number;
}

interface TestFunction {
  new (): IPerson;
}

function t(fn: TestFunction) {
  return new fn();
}

type T = GetInstanceType<TestFunction>;

export {};
