function init() {
  let quesRoot = document.querySelector(".ques-root");
  let footer = document.querySelector("footer");

  let prevBtn = document.createElement("button");
  let nextBtn = document.createElement("button");
  let scoreBtn = document.createElement("button");

  class Question {
    constructor(title, options, correctIndex) {
      this.title = title;
      this.options = options;
      this.correctIndex = correctIndex;
    }

    isCorrect(ans) {
      return ans === this.options[this.correctIndex];
    }

    get correctAnswer() {
      return this.options[this.correctIndex];
    }
  }

  class Quiz {
    constructor(allQues = [], score = 0) {
      this.allQues = allQues;
      this.score = score;
      this.activeIndex = 0;
    }

    addQues(title, options, correctIndex) {
      let ques = new Question(title, options, correctIndex);
      this.allQues.push(ques);
    }

    nextQuestion() {
      this.activeIndex = this.activeIndex + 1;
      this.createUI();
    }

    prevQuestion() {
      this.activeIndex = this.activeIndex - 1;
      this.createUI();
    }

    updateScore() {
      this.score++;
    }

    handlBtn() {
      if (this.activeIndex === this.allQues.length - 1) {
        nextBtn.classList.add("none");
        scoreBtn.classList.remove("none");
      } else if (this.activeIndex === 0) {
        prevBtn.classList.add("none");
        scoreBtn.classList.add("none");
        nextBtn.classList.remove("none");
      } else {
        nextBtn.classList.remove("none");
        prevBtn.classList.remove("none");
        scoreBtn.classList.add("none");
      }
    }

    createUI() {
      quesRoot.innerHTML = "";
      let activeQues = this.allQues[this.activeIndex];
      let form = document.createElement("form");
      // let h2 = document.createElement("h2");
      // h2.innerText = `Total Scores - ${this.score}`;
      let h2 = document.createElement("h2");
      h2.innerText = `Q. ${activeQues.title}`;

      let submit = document.createElement("input");
      submit.type = "submit";
      submit.classList.add("submit");

      activeQues.options.forEach((option, index) => {
        let div = document.createElement("div");
        let input = document.createElement("input");
        input.type = "radio";
        input.id = `option-${index}`;
        input.name = "options";
        input.value = option;
        let label = document.createElement("label");
        label.setAttribute("for", `option-${index}`);
        label.innerText = option;
        div.append(input, label);
        form.append(div, submit);

        form.addEventListener("submit", (event) => {
          event.preventDefault();
          if (input.checked) {
            if (activeQues.isCorrect(input.value)) {
              this.updateScore();
            }
          }
        });
      });

      prevBtn.innerText = "Prev Q.";
      prevBtn.classList.add("prev-btn", "btn");
      nextBtn.innerText = "Next Q.";
      nextBtn.classList.add("next-btn", "btn");
      scoreBtn.innerText = "Total Score";
      scoreBtn.classList.add("score-btn", "btn");
      footer.append(prevBtn, nextBtn, scoreBtn);

      this.handlBtn();

      quesRoot.append(h2, form);
    }
  }

  let quiz = new Quiz();
  allQues.forEach((ques) => {
    quiz.addQues(ques.title, ques.options, ques.correctIndex);
  });

  scoreBtn.addEventListener("click", () => {
    alert(quiz.score);
  });
  nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));
  prevBtn.addEventListener("click", quiz.prevQuestion.bind(quiz));

  quiz.createUI();
}

init();
