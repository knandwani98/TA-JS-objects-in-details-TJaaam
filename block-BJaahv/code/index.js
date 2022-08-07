// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object

// function createUser (name, id, noOfProjects) {
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;
//     user.getProjects = function () {
//         return noOfProjects;
//     };
//     user.changeName = function (newName) {
//         return user.name = newName;
//     };
//     user.incrementProject = function () {
//         return ++noOfProjects;
//     }
//     user.decrementProject = function () {
//         return --noOfProjects;
//     }
//     return user;
// }


// - [ ] Using Object.create (prototypal pattern)

// let userMethods = {
//     getProjects () {
//         return this.noOfProjects;
//     },
//     changeName (newName) {
//         return this.name = newName;
//     },
//     incrementProject () {
//         return ++ this.noOfProjects;
//     },
//     decrementProject () {
//         return --this.noOfProjects;
//     },
// }

// function createUser (name, id, noOfProjects) {
//     let user = Object.create(userMethods);
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;
//     return user;
// }


// - [ ] Using Pseudoclassical Way

// CreateUser.prototype = {
//     getProjects () {
//         return this.noOfProjects;
//     },
//     changeName (newName) {
//         return this.name = newName;
//     },
//     incrementProject () {
//         return ++ this.noOfProjects;
//     },
//     decrementProject () {
//         return --this.noOfProjects;
//     },
// }

// function CreateUser (name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }



// - [ ] Using Class

class CreateUser {
    constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    }

    getProjects () {
        return this.noOfProjects;
    }
    changeName (newName) {
        return this.name = newName;
    }
    incrementProject () {
        return ++ this.noOfProjects;
    }
    decrementProject () {
        return --this.noOfProjects;
    }

}


// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

let user1 = new CreateUser("Arya", 123, 9);
let user2 = new CreateUser("John", 1234, 13);


console.group(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.getProjects());
console.log(user1.changeName("Westros"));
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.groupEnd();

console.group(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.getProjects());
console.log(user2.changeName("Black"));
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.groupEnd();