import { isValid } from "../../../../src/usecases/impls/20-valid-parentheses/usecase";

type TestCase = {
  s: string;
  expected: boolean;
};

describe("valid parenthese", () => {
  const testCases: TestCase[] = [
    { s: "()", expected: true },
    { s: "()[]{}", expected: true },
    { s: "(]", expected: false },
  ];

  test.each(testCases)("given %s, returns %s", ({ s, expected }) => {
    expect(isValid(s)).toBe(expected);
  });
});
