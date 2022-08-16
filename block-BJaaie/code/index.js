// // - Pseudoclassical Pattern

// AddAnimal.prototype = {
//     eat(){
//         console.log(`I live in ${this.location} and I can eat`);
//     },
//     changeLocation(location){
//         this.location = location;
//         return this.location;
//     },
//     summary(){
//         return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
//     },
// }

// function AddAnimal(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
// }

// function AddDog(location, numberOfLegs, name, color) {
//     AddAnimal.apply(this, [location, numberOfLegs]);
//     this.name = name;
//     this.color =  color;
// }

// function AddCat(location, numberOfLegs, name, colorOfEyes) {
//     AddAnimal.apply(this, [location, numberOfLegs]);
//     this.name = name;
//     this.colorOfEyes =  colorOfEyes;
// }

// AddDog.prototype = {
//     bark() {
//         alert(`I am ${this.name} and I can bark 🐶`)
//     },
//     changeName(name) {
//         this.name = name;
//         return this.name;
//     },
//     changeColor(color) {
//         this.color = color;
//         return this.color;
//     },
//     summary() {
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
//     },
// }

// AddCat.prototype = {

//     meow() {
//         alert(`I am ${this.name} and I can do mewo meow 😹`)
//     },
//     changeName(name) {
//         this.name = name;
//         return this.name;
//     },
//     changeColor(colorOfEyes) {
//         this.colorOfEyes = colorOfEyes;
//         return this.colorOfEyes;
//     },
//     summary() {
//         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
//     },
// }

// Object.setPrototypeOf (AddDog.prototype, AddAnimal.prototype);

// Object.setPrototypeOf (AddCat.prototype, AddAnimal.prototype);

// let morris = new AddAnimal("India", 4);
// let zara = new AddCat("India", 4, "Zara", "green");
// let stuffy = new AddDog("India", 4, "Stuffy", "wheat");

// - Class Pattern

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(location) {
    this.location = location;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have $ {this.numberOfLegs} legs`;
  }
}

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changeColor(color) {
    this.color = color;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changeColor(colorOfEyes) {
    this.colorOfEyes = colorOfEyes;
    return this.colorOfEyes;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let morris = new Animal("India", 4);
let zara = new Cat("India", 4, "Zara", "green");
let stuffy = new Dog("India", 4, "Stuffy", "wheat");

console.log(morris);
console.log(morris.summary());
console.log(stuffy);
console.log(stuffy.summary());
console.log(zara);
console.log(zara.summary());
