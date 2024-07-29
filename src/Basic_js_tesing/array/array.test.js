import { isPostiveArray, mergeArray, sumOfArray } from "./array";

//this is for the merge two array
it("for merge two array", () => {
  let arr = [1, 2, 3, 4];
  let b = "utsav";
  expect(mergeArray(arr, b)).toStrictEqual([1, 2, 3, 4, "utsav"]);
});

test("for find array is possitive", () => {
  let arr = [2, 3, 4, -6, -8, 3, 9];
  expect(isPostiveArray(arr)).toStrictEqual([2, 3, 4, 3, 9]);
});

test("sum of array", () => {
  let arr = [1, 2, 3, 4];
  expect(sumOfArray(arr)).toBe(10);
});
