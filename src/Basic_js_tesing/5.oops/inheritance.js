class Car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  detaitls() {
    return `${this.name} ${this.model} ${this.color}`;
  }
}
class Super_Car extends Car {
  constructor(name, model, color, speed) {
    super(name, model, color);
    this.speed = speed;
  }
  detaitls() {
    return `${this.name} ${this.model} ${this.color} ${this.speed}`;
  }
}

// let car = new Car("alto", "lx", "grey");
// console.log(car.detaitls());  //alto lx grey
// let supercar = new Super_Car("bmw", "lx", "grey", 300);
// console.log(supercar.detaitls());   //bmw lx grey 300
export { Car, Super_Car };
