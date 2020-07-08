// Target specific elements from the DOM
var quiz = document.getElementById("quiz");
var countdownClock = document.querySelector(".timer");
var beginQuiz = document.getElementById("start");
var results = document.getElementById("results");
var userScore = document.getElementById("score");
var question = document.getElementById("question");
var answerOne = document.getElementById("answer-one");
var answerTwo = document.getElementById("answer-two");
var answerThree = document.getElementById("answer-three");
var answerFour = document.getElementById("answer-four");
// Create an array of questions
var questionsArray = [
  {
    question: "1: Which Semantic HTML tag would you use for a side bar?",
    choices: ["aside", "nav", "title", "section"],
    answer: "aside",
  },
  {
    question: "2: Which of the following is not an Event Listener?",
    choices: ["keydown", "change", "confirm", "click"],
    answer: "confirm",
  },
  {
    question:
      "3: Which of the following is NOT one of the main three languages of coding?",
    choices: ["HTML", "Javascript", "DOM", "CSS"],
    answer: "DOM",
  },
];
// Test to make sure questions came up in the console log.
console.log(questionsArray);

// Initial Data
var timeLeft = 90;
var userScore = 0;
var currentQuestionIndex = 0;
// When the user clicks the start button, the first question pops up
beginQuiz.addEventListener("click", function () {
  startTimer();
  displayQuestion(currentQuestionIndex);
});

function startTimer() {
  var timeInterval = setInterval(function () {
    countdownClock.textContent = `Time: ${timeLeft}`;
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}
// Create a function that shows each question
// -Display question
// -Display 3-4 possible answer choices
// -Once the user clicks on an answer choice, they are told whether it was right or wrong
// The user's score is updated
// The function goes on to the next question
function displayQuestion(index) {
  var currentQuestion = questionsArray[index];
  question.textContent = "Question " + currentQuestion.question;
  answerOne.textContent = currentQuestion.choices[0];
  answerTwo.textContent = currentQuestion.choices[1];
  answerThree.textContent = currentQuestion.choices[2];
  answerFour.textContent = currentQuestion.choices[3];

  answerOne.addEventListener("click", function () {
    if (this.textContent === currentQuestion.answer) {
      userScore++;
      results.textContent =
        "Great job - you got it right! User Score: " + userScore;
      console.log(userScore);
      currentQuestionIndex++;
      nextQuestion();
    } else {
      userScore--;
      results.textContent = "Oof you got it wrong! User Score: " + userScore;
      currentQuestionIndex++;
      nextQuestion();
    }
  });
  answerTwo.addEventListener("click", function () {
    if (this.textContent === currentQuestion.answer) {
      userScore++;
      results.textContent =
        "Great job - you got it right! User Score: " + userScore;
      console.log(userScore);
      currentQuestionIndex++;
      nextQuestion();
    } else {
      userScore--;
      results.textContent = "Oof you got it wrong! User Score: " + userScore;
      currentQuestionIndex++;
      nextQuestion();
    }
  });
  answerThree.addEventListener("click", function () {
    if (this.textContent === currentQuestion.answer) {
      userScore++;
      results.textContent =
        "Great job - you got it right! User Score: " + userScore;
      console.log(userScore);
      currentQuestionIndex++;
      nextQuestion();
    } else {
      userScore--;
      results.textContent = "Oof you got it wrong! User Score: " + userScore;
      currentQuestionIndex++;
      nextQuestion();
    }
  });
  answerFour.addEventListener("click", function () {
    if (this.textContent === currentQuestion.answer) {
      userScore++;
      results.textContent =
        "Great job - you got it right! User Score: " + userScore;
      console.log(userScore);
      currentQuestionIndex++;
      nextQuestion();
    } else {
      userScore--;
      results.textContent = "Oof you got it wrong! User Score: " + userScore;
      currentQuestionIndex++;
      nextQuestion();
    }
  });
}
// The function goes on to the next question
function nextQuestion() {
  displayQuestion(currentQuestionIndex);
}
