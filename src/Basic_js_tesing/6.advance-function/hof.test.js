import { createMultipler, filterFunction, mapFunction, repeter } from "./Hof";

describe("Higher Order function testing", () => {
  test("map method testing", () => {
    let arr = [1, 2, 3, 4];
    expect(mapFunction(arr)).toStrictEqual([2, 4, 6, 8]);
  });
  test("filter method testing", () => {
    let arr = [1, 2, 3, 4, 5];
    let callback = jest.fn((item) => {
      return item > 2;
    });
    //assertion-1
    expect(filterFunction(arr, callback)).toStrictEqual([3, 4, 5]);
    //assertion-2
    expect(callback).toHaveBeenCalled();
    //assertion-3 //array size is 5 that is reasion jest.fn() executing 5 times
    expect(callback).toHaveBeenCalledTimes(5);
  });
  test("Return function test", () => {
    let double = createMultipler(2);
    let triple = createMultipler(3);
    expect(double(2)).toBe(4);
    expect(triple(4)).toBe(12);
  });
  test("Repeter Function testing", () => {
    let mockFunc = jest.fn();
    repeter(mockFunc, 3);
    //assertion-1
    expect(mockFunc).toHaveBeenCalledTimes(3);
    //assertion-2
    expect(mockFunc).toHaveBeenCalledWith(1);
  });
});
