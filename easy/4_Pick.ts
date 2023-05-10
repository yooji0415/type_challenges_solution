import type { Equal, Expect, ExpectTrue } from "@type-challenges/utils";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* 코드 입력란 */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/* 테스트 케이스 */

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];
