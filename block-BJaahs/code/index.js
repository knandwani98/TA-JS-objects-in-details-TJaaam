// If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.


// ### For single question we need the following data and methods:

// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)s
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Without Object
// - Organize using object
// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

// let title = 'Where is the capital of Jordan';
// let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex = 1;
// function isAnswerCorrect (index) {
//   return index === correctAnswerIndex;
// };
// function getCorrectAnswer () {
//   return options[correctAnswerIndex];
// };

// let question = {
//   title : 'Where is the capital of Jordan',
//   options : ['Tashkent', 'Amaan', 'Kuwait City',   'Nairobi'],
//   correctAnswerIndex : 1,
//   isAnswerCorrect (index) {
//     return index === question.correctAnswerIndex;
//   },
//   getCorrectAnswer () {
//     return question.options[question.correctAnswerIndex];
//   }
// }

function createQuestion (title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect =  function(index){
    return index === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}

let question1 = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);

let question2 = createQuestion('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2);

console.log(
question1.isAnswerCorrect(1),
question1.isAnswerCorrect(2),
question1.isAnswerCorrect(3),
question2.isAnswerCorrect(1),
question2.isAnswerCorrect(2),
question2.isAnswerCorrect(3),
question1.getCorrectAnswer(),
question2.getCorrectAnswer(),
);

// ### To test use the following data

// ```js
// const testData = {
//   title: 'Where is the capital of Jordan',
//   options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex: 1,
// };
// ```