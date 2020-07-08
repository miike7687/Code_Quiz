var submitScore = document.getElementById("submit-score");
var clearScores = document.getElementById("clear-highscores");
var scoresList = document.getElementById("list");
var input = document.getElementById("user-input");

// JSON.parse(localStorage.getItem("Initials & Score"));

submitScore.addEventListener("click", function () {
  console.log(input.value);
  var newScore = document.createElement("li");
  var userInput = document.createTextNode(input.value);
  newScore.appendChild(userInput);
  document.getElementById("list").appendChild(newScore);
  //   localStorage.setItem("Initials & Score", JSON.stringify(input.value));
});
