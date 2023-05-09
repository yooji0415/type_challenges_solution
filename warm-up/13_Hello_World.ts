import type { Equal, Expect, NotAny } from "@type-challenges/utils";

/* 코드 입력란 */

type HelloWorld = string;

/* 테스트 케이스 */

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
