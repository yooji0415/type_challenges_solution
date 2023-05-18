import type { Equal, Expect } from "@type-challenges/utils";

/* 코드 입력란 */

type MyExclude<T, U> = T extends U ? never : T;

/* 테스트 케이스 */

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
