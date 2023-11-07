type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

function test1() {
  return "abc";
}

function test2() {
  return 123;
}

type newType1 = MyReturnType<typeof test1>;
type newType2 = MyReturnType<typeof test2>;

export {};
