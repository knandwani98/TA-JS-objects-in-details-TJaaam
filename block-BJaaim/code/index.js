// We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

// 1. Quiz is a collection of Questions.
// 2. Question will need `Title`, `Options` and `Correct Answer`

let quesRoot = document.querySelector(".ques-root");

// ### Make a Question class with these data and methods:

// DATA:

class Question {
  constructor(title, options, correctIndex) {
    this.title = title;
    this.options = options;
    this.correctIndex = correctIndex;
  }

  isCorrect(ans) {
    return ans === this.correctIndex;
  }
  get correctAnswer() {
    return this[this.correctIndex];
  }

  createUI() {
    let h2 = document.createElement("h2");
    h2.innerText = `Q. ${this.title}`;
    let form = document.createElement("form");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    input1.type = "radio";
    input2.type = "radio";
    input3.type = "radio";
    input4.type = "radio";
    input1.id = this.options[0];
    input2.id = this.options[1];
    input3.id = this.options[2];
    input4.id = this.options[3];
    input1.name = "options";
    input2.name = "options";
    input3.name = "options";
    input4.name = "options";
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    let label4 = document.createElement("label");
    label1.setAttribute("for", this.options[0]);
    label2.setAttribute("for", this.options[1]);
    label3.setAttribute("for", this.options[2]);
    label4.setAttribute("for", this.options[3]);
    label1.innerText = this.options[0];
    label2.innerText = this.options[1];
    label3.innerText = this.options[2];
    label4.innerText = this.options[3];
    div1.append(input1, label1);
    div2.append(input2, label2);
    div3.append(input3, label3);
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.type = "submit";
    input5.value = "Check";
    input5.classList.add("submit");

    form.append(div1, div2, div3, div4, input5);
    quesRoot.append(h2, form);
  }
}

let question1 = new Question(
  "Inside which HTML element do we put JavaScript?",
  ["script", "scripting", "js", "link"],
  0
);
// - Title of the question
// - Options of the question
// - Correct answer

// METHODS:

// - isCorrect(answer)

// Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

// - getCorrectAnswer()
//   This method will return the correct answer of the question.

// - createUI (this will create the layout of a single question)

// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

// ### Make quiz class with these data and properties

class Quiz {
  constructor(
    allQues = [],
    collection = [],
    activeIndex,
    activeVisibleQIndex,
    score,
    totalCorrect
  ) {
    this.allQues = allQues;
    this.collection = collection;
    this.activeIndex = activeIndex;
    this.activeVisibleQIndex = activeVisibleQIndex;
    this.score = score;
    this.totalCorrect = totalCorrect;
  }
  nextQuestion() {
    return this[this.activeVisibleQIndex + 1];
  }
  updateScore() {
    return this.score++;
  }

  createUI() {
    this.collection.forEach((question) => {
      let;
    });
  }
}

// DATA:

// - allQuestions
//   Collection of Questions. An array with multiple question.
// - activeIndex
//   Index of the active visible question
// - score
//   Total number of correct answer

// METHOD:

// - nextQuestion()
//   This method should get the next question.
// - createUI
//   This will create the ui of the whole app.
// - updateScore
//   This method will update the score.
