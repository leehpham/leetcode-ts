import { twoSum } from "../../../../src/usecases/impls/1-two-sum/usecase";

describe("Two Sum", () => {
  test.each([
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ])("given $nums, $target; output $expected", ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toEqual(expected);
  });
});
