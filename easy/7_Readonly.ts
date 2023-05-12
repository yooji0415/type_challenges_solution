import type { Equal, Expect } from "@type-challenges/utils";

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

/* 코드 입력란 */

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

/* 테스트 케이스 */

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
