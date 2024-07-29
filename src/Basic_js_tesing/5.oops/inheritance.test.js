import { Car, Super_Car } from "./inheritance";

//here i am using describe for that one go check first describe
describe("testing for inheritance", () => {
  let normal_car = new Car("polo", "gt", "red");
  let speed_car = new Super_Car("bmw", "s", "white", 300);
  describe("parent class", () => {
    test("for normal car", () => {
      expect(normal_car.detaitls()).toBe("polo gt red");
    });
  });
  describe("child class", () => {
    test("for speedcar", () => {
      expect(speed_car.detaitls()).toBe("bmw s white 300");
    });
  });
});
