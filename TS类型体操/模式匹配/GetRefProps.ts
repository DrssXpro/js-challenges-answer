type GetRefProps<O extends Record<string, any>> = O extends { ref: infer R } ? R : never;

interface IPerson {
  ref: number[];
  a: string;
  b: boolean;
}

type T = GetRefProps<IPerson>;

export {};
