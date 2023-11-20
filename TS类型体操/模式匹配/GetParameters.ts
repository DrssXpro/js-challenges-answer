type GetParameters<F extends (...args: any[]) => any> = F extends (...args: infer R) => any ? R : never;

type T = GetParameters<(a: number, b: string) => any>;

export {};
