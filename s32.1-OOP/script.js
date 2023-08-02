const users = ["salar", "keyhan", "koroush"];
const person1 = {
  firstname: "alireza",
  lastname: "mohamadi",
  age: 44,
  isMale: true,
  walk: function () {
    console.log("i am walking...");
  },
  talk: function () {
    console.log("i am talking...");
  },
  write: function () {
    console.log("i am writing...");
  },
};
console.log(person1);

const person2 = {
  firstname: "noora",
  lastname: "noorai",
  age: 50,
  isMale: false,
  walk: function () {
    console.log("i am walking...");
  },
  talk: function () {
    console.log("i am talking...");
  },
  write: function () {
    console.log("i am writing...");
  },
};
console.log(person2);

class Person {
  //properties
  firstname;
  lastname;
  age;
  isMale;

  //constructor function
  constructor(firstname, lastname, age, isMale) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isMale = isMale;
  }

  //methods
  walk() {
    console.log("i am walking...");
  }
  talk() {
    console.log("i am talking...");
  }
  write() {
    console.log("i am writing...");
  }
  sayHello() {
    console.log(`hi, i am ${this.firstname} ${this.lastname}`);
  }
}
const person3 = new Person("alireza", "mohamadi", "70", true); //an instance from Person class
const person4 = new Person("mina", "aghayi", "50", false); //an instance from Person class
const person5 = new Person("reza", "mortezaie", "24", true); //an instance from Person class

//properties: brand, model, color
//methods: turn_on, getModel, getColor, getBrand
class Car {
  brand;
  model;
  color;
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
  turn_on() {
    console.log("turning on...");
  }

  //getter methods
  getModel() {
    return this.model;
  }
  predictWeather() {}
  getBrand() {
    return this.brand;
  }
  getColor() {
    return this.color;
  }

  //setter methods
  setModel(model) {
    this.model = model;
  }
  setBrand(brand) {
    this.brand = brand;
  }
  setColor(color) {
    this.color = color;
  }
}
const car1 = new Car("benz", "c200", "blue");
car1.turn_on();
console.log(car1.getBrand());
console.log(car1.getColor());
car1.setColor("red");
console.log(car1.getColor());
class Teacher extends Person {
  //properties
  courses;

  //constructor function
  constructor(firstname, lastname, age, isMale, courses) {
    super(firstname, lastname, age, isMale);
    this.courses = courses;
  }

  //methods
  teach() {
    console.log("i am teaching...");
  }
  walk() {
    console.log("i am a teacher and i am walking...");
  }
}

const teacher1 = new Teacher("reza", "mortezaie", "24", true, [
  "physics",
  "mathematic",
]);

// teacher1.firstname = "ttttt";
// users.forEach = "test";
// Object.prototype.salam = "some value...";
