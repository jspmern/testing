import { Calculator } from "./class";

describe("Calculator Test", () => {
  let cal = new Calculator();
  test("add two number", () => {
    expect(cal.add(2, 4)).toBe(6);
  });
  test("subtract", () => {
    expect(cal.subtract(3, 4)).toBe(-1);
  });
});
