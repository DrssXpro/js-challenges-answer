type Trim<S extends string> = S extends `${infer Left}${" "}${infer Right}` ? Trim<`${Left}${Right}`> : S;

type LeftTrim<S extends string> = S extends `${" "}${infer Right}` ? LeftTrim<`${Right}`> : S;

type RightTrim<S extends string> = S extends `${infer Left}${" "}` ? RightTrim<`${Left}`> : S;

type BetweenTrim<S extends string> = LeftTrim<RightTrim<S>>;

type T1 = Trim<"     a b c  d     ">;
type T2 = LeftTrim<"     a b c  d     ">;
type T3 = RightTrim<"     a b c  d     ">;
type T4 = BetweenTrim<"     a b c  d     ">;

export {};
