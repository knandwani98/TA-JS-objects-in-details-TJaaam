// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)



// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)


// let questionMethods = {
//     isAnswerCorrect(index) {
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer() {
//         return this.options[this.correctAnswerIndex];
//     }
// }

// function question (title, options, correctAnswerIndex) {
//     let question1 = Object.create(questionMethods);
//     question1.title = title;
//     question1.options = options;
//     question1.correctAnswerIndex = correctAnswerIndex;
//     return question1;
// }

// let firstQuestion = question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );

// let secondQuestion = question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// );



// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

// Question.prototype = {
//     isAnswerCorrect(index) {
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer() {
//         return this.options[this.correctAnswerIndex];
//     }
// }

// function Question (title, options, correctAnswerIndex) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );

// let secondQuestion = new Question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// );




// - Create using class

class Question {

    constructor (title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);

let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);


// - Write test by creating two objects also test both methods.




console.group(firstQuestion.title);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswerIndex);
console.log(firstQuestion.isAnswerCorrect(0));
console.log(firstQuestion.isAnswerCorrect(1));
console.log(firstQuestion.isAnswerCorrect(2));
console.log(firstQuestion.isAnswerCorrect(3));
console.log(firstQuestion.getCorrectAnswer());
console.groupEnd();

console.group(secondQuestion.title);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswerIndex);
console.log(secondQuestion.isAnswerCorrect(0));
console.log(secondQuestion.isAnswerCorrect(1));
console.log(secondQuestion.isAnswerCorrect(2));
console.log(secondQuestion.isAnswerCorrect(3));
console.log(secondQuestion.getCorrectAnswer());
console.groupEnd();