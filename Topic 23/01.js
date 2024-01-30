class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  run() {
    return 'Car Is Running Now';
  }
  stop() {
    return 'Car Is Stopped';
  }
}

let car1 = new Car('lada', 2020, 25000);
let car2 = new Car('bmw', 2024, 1e6);
let car3 = new Car('rangrover', 2020, 2e6);

let { name, model, price } = car1;
console.log(
  `Car One Name Is ${name} And Model Is ${model} And Price Is ${price}`
);
console.log(car1.run())