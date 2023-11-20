type GetThisParameterType<F extends (...args: any[]) => any> = F extends (this: infer R, ...args: any[]) => any
  ? R
  : never;

interface IPerson {
  name: string;
  age: number;
}

function test(this: IPerson, a: number) {
  console.log(this);
}

const o: IPerson = {
  name: "abc",
  age: 20,
};

test.call(o);

type T = GetThisParameterType<typeof test>;

export {};
