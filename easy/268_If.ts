import type { Equal, Expect } from "@type-challenges/utils";

/* 코드 입력란 */

type If<C extends boolean, T, F> = C extends true ? T : F;

/* 테스트 케이스 */

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
