// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        return;
    },
    summary() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    },
}

function addAnimal (location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}



// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

let dogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName) {
        this.name = newName;
        return;
    },
    changeColor(newColor) {
        this.color = newColor;
        return;
    },
    summary() {
       console.log( `I am ${this.name} and I am of ${this.color} color. I can also bark`)
    },
}

function addDog (name, color, location, numberOfLegs) {
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    return dog;
}



// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

let catMethods = {
    meow() {
        alert ( `I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName) {
        this.name = newName;
        return;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return;
    },
    summary() {
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    },


}

function addCat (name, colorOfEyes, location, numberOfLegs) {
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}


// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);


let cat = addCat("Zara", "Green", "Kanpur", 4);
let dog = addDog("Stuffy", "Cream", "Kanpur", 4);
