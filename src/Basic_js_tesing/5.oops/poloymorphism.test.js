import { Circle, Square } from "./polymorphism";

describe("For Polymorphism", () => {
  it("For Circle", () => {
    let radius = 10;
    let circle = new Circle(radius);

    // Expected area calculated with Math.PI and radius squared
    const expectedArea = Math.PI * Math.pow(radius, 2);
    // When
    const actualArea = circle.area();
    expect(actualArea).toBeCloseTo(expectedArea, 2);
  });
  it("For Square", () => {
    let side = 5;
    let square = new Square(side);
    expect(square.area()).toBe(25);
  });
});
