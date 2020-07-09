var submitScore = document.getElementById("submit-score");
var scoresList = document.getElementById("list");
var userName = document.getElementById("user-name");
var score = document.getElementById("user-score");
var displayScores = document.getElementById("display-scores");
// var retrievedScores = JSON.parse(localStorage.getItem("Initials & Score"));
// scoresList.textContent = retrievedScores;

// localStorage.setItem("Names and Scores", JSON.stringify(combo));
// const prevScores = JSON.parse(localStorage.getItem("Names and Scores"));

submitScore.addEventListener("click", function () {
  console.log(userName.value);
  console.log(score.value);
  var fullInfo = {
    userName: userName.value,
    score: score.value,
  };
  var combo = userName.value + ": " + score.value;
  var newScore = document.createElement("li");
  var userInput = document.createTextNode(combo);
  newScore.appendChild(userInput);
  document.getElementById("list").appendChild(newScore);
  console.log(fullInfo);
  localStorage.setItem("User's Full Info", JSON.stringify(fullInfo));

  var prevScores = JSON.parse(localStorage.getItem("User's Full Info"));
  if (prevScores !== null) {
    displayScores.textContent = combo;
    console.log(combo);
  }
});
