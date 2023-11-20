type Replace<S extends string, Sub extends string, New extends string> = S extends `${infer Left}${Sub}${infer Right}`
  ? `${Left}${New}${Right}`
  : S;

type T = Replace<"abbc", "c", "xx">;

export {};
