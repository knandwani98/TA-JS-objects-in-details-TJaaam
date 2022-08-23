class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {}
  sleep() {}
  walk() {}
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {}
}
class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {}
}
class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {}
}
class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {}
}

let sachin = new Cricketer("Sachin", 16, "Male", "Cricket", "India");
let messi = new Player("Messi", 20, "Male", "Football");
let ankit = new Teacher("Ankit", 25, "Male", "AltCampus");
let drake = new Artist("Drake", 25, "Male", "Rapper");
