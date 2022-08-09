class Square {
    constructor (side) {
        this.width = side;
        this.height = side;
    }

    description () {
        alert(`The square is ${width} x ${height}`);
    }

    calcArea() {
        return this.width * this.height;
    }

    get area () {
        return this.width * this.height;
    }

    set area (value) {
        let newSide = (Math.sqrt(value));
        this.width = newSide;
        this.height = newSide;
    }

    static isEqual (sq1, sq2) {
        return sq1.area === sq2.area;
    }
}

let sq1 = new Square(12);
let sq2 = new Square(12);

(Square.isEqual(sq1, sq2));



// - Create a class named `User` that accepts `firstName` and `lastName` property

// - Create a getter method named `fullName` that will return the full name of the person.

// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)


class User {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName () {
        return this.firstName + " " + this.lastName;
    }

    set fullName (name) {
        let newName = name.split(" ");
        this.firstName = newName[0];
        this.lastName = newName[1];
        if (name.length < 5) {
            alert(`Full name should be more than 5 characters`);
        }
    }

    nameContains (str) {
        return this.fullName.toLowerCase().includes(str.toLowerCase());
    }
}

let user1 = new User ("Arya", "Stark");
let user2 = new User ("John", "Snow");

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

// - Create two instance of the `User` class

// - Check by using the `fullName` setter method with name bigger than 5 characters.

// - Check by using the `fullName` setter method with name less than 5 characters.

// - Check the `fullName` using getter

// - Check the `nameContains` method
