// Target specific elements from the DOM
var quiz = document.getElementById("quiz");
var countdownClock = document.querySelector(".timer");
var beginQuiz = document.getElementById("start");
var userScore = document.getElementById("score");
// Create an array of questions
var questionsArray = [
  {
    questionOne: "Which Semantic HTML tag would you use for a side bar?",
    choices: ["aside", "nav", "title", "section"],
    answer: "aside",
  },
  {
    questionTwo: "Which of the following is not an Event Listener?",
    choices: ["keydown", "change", "confirm", "click"],
    answer: "confirm",
  },
  {
    questionThree:
      "Which of the following is NOT one of the main three languages of coding?",
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
function startQuiz() {}
// Create a function that shows each question
// -Display question
// -Display 3-4 possible answer choices
// -Once the user clicks on an answer choice, they are told whether it was right or wrong
// The user's score is updated
// The function goes on to the next question
function askQuestions() {
  startTimer();
}

// Create a function that starts the timer

function startTimer() {
  var timeInterval = setInterval(function () {
    countdownClock.textContent = `Time: ${timeLeft}`;
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Create a function that updates the high scores by allowing the user to input their initials
