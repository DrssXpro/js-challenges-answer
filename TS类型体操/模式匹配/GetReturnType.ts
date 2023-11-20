type GetReturnType<F extends (...args: any[]) => any> = F extends (...args: any[]) => infer R ? R : never;

type T = GetReturnType<() => number>;

export {};
