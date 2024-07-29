class Shape {
  area() {
    throw new Error('Method "area()" must be implemented');
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
class Square extends Circle {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}
export { Shape, Circle, Square };
