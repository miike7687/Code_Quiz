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
var instructions = document.getElementById("begin");

// Create an array of questions
var questionsArray = [
  {
    question:
      "1: Which co-worker does Leslie match with when she explores online dating?",
    choices: ["Tom", "Jerry", "Ron", "Andy"],
    answer: "Tom",
  },
  {
    question: "2: What is Andy wearing when he marries April?",
    choices: ["nothing", "a tuxedo", "Colts Jersey", "polo shirt"],
    answer: "Colts Jersey",
  },
  {
    question: "3: What is Jerry reaching for when he falls into the river?",
    choices: ["goldfish", "butterfinger", "burrito", "hotpocket"],
    answer: "burrito",
  },
  {
    question:
      "4: Who is the first human being who will live to be 150 years old?",
    choices: ["Chris", "Tom", "Anne", "Leslie"],
    answer: "Chris",
  },
  {
    question:
      "5: Which Pawnee celebrity makes an appearance at the Harvest Festival?",
    choices: ["Joe Biden", "Michelle Obama", "Lil' Sebastian", "Andrew Luck"],
    answer: "Lil' Sebastian",
  },
  {
    question: "6: What's the name of Tom Haverford's ex-wife?",
    choices: ["April", "Jennifer", "Denise", "Wendy"],
    answer: "Wendy",
  },
];
// Test to make sure questions came up in the console log.
console.log(questionsArray);
var currentQuestion = questionsArray[0];

// Initial Data
var timeLeft = 90;
var userScore = 0;
var currentQuestionIndex = 0;
// When the user clicks the start button, the first question pops up and the timer begins
beginQuiz.addEventListener("click", function () {
  startTimer();
  displayQuestion(currentQuestionIndex);
});
// function for the timer to begin
function startTimer() {
  var timeInterval = setInterval(function () {
    countdownClock.textContent = `Time: ${timeLeft}`;
  }, 1000);
  timeLeft--;
  answerOne.addEventListener("click", function () {
    var answer = this.textContent;
    ScoreQuestion(answer);
  });
  answerTwo.addEventListener("click", function () {
    var answer = this.textContent;
    ScoreQuestion(answer);
  });
  answerThree.addEventListener("click", function () {
    var answer = this.textContent;
    ScoreQuestion(answer);
  });
  answerFour.addEventListener("click", function () {
    var answer = this.textContent;
    ScoreQuestion(answer);
  });
  if (timeLeft === 0) {
    clearInterval(timeInterval);
    endGame();
  }
}
// Create a function that shows each question
// -Display question
// -Display 4 possible answer choices
// -Once the user clicks on an answer choice, they are told whether it was right or wrong
// The user's score is updated
// The function goes on to the next question

function displayQuestion(index) {
  currentQuestion = questionsArray[index];
  question.textContent = "Question " + currentQuestion.question;
  answerOne.textContent = currentQuestion.choices[0];
  answerTwo.textContent = currentQuestion.choices[1];
  answerThree.textContent = currentQuestion.choices[2];
  answerFour.textContent = currentQuestion.choices[3];
}

function nextQuestion() {
  displayQuestion(currentQuestionIndex);
}

function ScoreQuestion(answer) {
  if (answer === currentQuestion.answer) {
    userScore++;
  } else {
    userScore--;
  }
  results.textContent = "Current User Score: " + userScore;
  currentQuestionIndex++;
  // If we get to the end of the array, end the game
  if (currentQuestionIndex > questionsArray.length - 1) {
    console.log("game over");
    endGame();
  } else {
    // If not, go on to the next question
    nextQuestion();
  }
}

function endGame() {
  question.textContent = "Congratulations! You earned a score of: " + userScore;
  answerOne.textContent = "";
  answerTwo.textContent = "";
  answerThree.textContent = "";
  answerFour.textContent = "";
  beginQuiz.textContent = "";
  instructions.textContent = "";
  results.textContent =
    "Click on the 'View Highscores' tab to enter your initials and log your score.";
}

// answerOne.addEventListener("click", function () {
//   console.log("Current Question");
//   console.log(currentQuestion);
//   console.log("Answer");
//   console.log(this.textContent);
//   console.log("Current Question Index");
//   console.log(currentQuestionIndex);
//   if (this.textContent === currentQuestion.answer) {
//     userScore++;
//     results.textContent =
//       "Great job - you got it right! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   } else {
//     userScore--;
//     results.textContent = "Oof you got it wrong! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   }
// });
// answerTwo.addEventListener("click", function () {
//   console.log("Current Question");
//   console.log(currentQuestion);
//   console.log("Answer");
//   console.log(this.textContent);
//   console.log("Current Question Index");
//   console.log(currentQuestionIndex);
//   if (this.textContent === currentQuestion.answer) {
//     userScore++;
//     results.textContent =
//       "Great job - you got it right! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   } else {
//     userScore--;
//     results.textContent = "Oof you got it wrong! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   }
// });
// answerThree.addEventListener("click", function () {
//   console.log("Current Question");
//   console.log(currentQuestion);
//   console.log("Answer");
//   console.log(this.textContent);
//   console.log("Current Question Index");
//   console.log(currentQuestionIndex);
//   if (this.textContent === currentQuestion.answer) {
//     userScore++;
//     results.textContent =
//       "Great job - you got it right! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   } else {
//     userScore--;
//     results.textContent = "Oof you got it wrong! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   }
// });
// answerFour.addEventListener("click", function () {
//   console.log("Current Question");
//   console.log(currentQuestion);
//   console.log("Answer");
//   console.log(this.textContent);
//   console.log("Current Question Index");
//   console.log(currentQuestionIndex);
//   if (this.textContent === currentQuestion.answer) {
//     userScore++;
//     results.textContent =
//       "Great job - you got it right! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   } else {
//     userScore--;
//     results.textContent = "Oof you got it wrong! User Score: " + userScore;
//     console.log(userScore);
//     currentQuestionIndex++;
//     nextQuestion();
//   }
// });
// }
// The function goes on to the next question

// move the event listeners for answers to the startTimer function.

//Those event listeners, should send their answer off to the a function called scoreQuestion.

//Score question, looks at the provided answer, the current question, and compares them.

//if correct, increment score, if incorrect, decrement score

//finally, change currentQuestion to be the next question in line.

//finally finally, you may need to run a function that populated question and answers on the frontend with the next question

//flow
// startTimer -> displayQuestions -> add event listeners
// Event listeners will call scoreQuestion and it will update the score
// score question will change current question to the next question and called displayquestion again.
