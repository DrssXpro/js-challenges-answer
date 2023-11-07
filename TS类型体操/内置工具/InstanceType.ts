type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

class Person {
  play() {
    console.log("play");
  }
}
class Student {}

const p: Person = new Person();
type newType1 = InstanceType<typeof Person>;

function factory<T extends new (...args: any[]) => any>(constructor: T): MyInstanceType<T> {
  return new constructor();
}

const p1 = factory(Person);
const s = factory(Student);

export {};
