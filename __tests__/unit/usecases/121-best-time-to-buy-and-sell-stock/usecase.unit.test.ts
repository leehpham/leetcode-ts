import { maxProfit } from "../../../../src/usecases/impls/121-best-time-to-buy-and-sell-stock/usecase";

type TestCase = {
  prices: number[];
  expected: number;
};

describe("best time to buy and sell stock", () => {
  const testCases: TestCase[] = [
    { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
    { prices: [7, 6, 4, 3, 1], expected: 0 },
  ];

  test.each(testCases)(
    "given $prices, expect $expected",
    ({ prices, expected }) => {
      expect(maxProfit(prices)).toBe(expected);
    }
  );
});
