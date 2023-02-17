// Element.innerHTML = ;
// Element.SetHTML();
// Node.textContent
var startBtn = document.querySelector(".startBtn");
var scoresBtn = document.querySelector(".scoresBtn");
var questionNumber = document.querySelector("#questionNumber");
var questionEl = document.querySelector(".questionEl");
var timeEl = document.querySelector(".seconds");
var time = Number(timeEl.textContent);
var timeInterval;
var o1 = document.querySelector("#o1");
var o2 = document.querySelector("#o2");
var o3 = document.querySelector("#o3");
var o4 = document.querySelector("#o4");
var index = 0;
var defANewPage = 0;
var questions = [
  {
    Q: "Question 1",
    O: ["Option1", "Option2", "Option3", "Option4"],
    A: "Option1",
  },
  {
    Q: "Question 2",
    O: ["Option1", "Option2", "Option3", "Option4"],
    A: "Option3",
  },
  {
    Q: "Question 3",
    O: ["Option1", "Option2", "Option3", "Option4"],
    A: "Option4",
  },
];

function start() {
  timeInterval = setInterval(function () {
    time--;
    timeEl.textContent = time;
    if (time === 0) {
      endGame();
    }
  }, 1000);

  scoresBtn.style = "visibility:hidden";
  document.querySelector("#startSection").style = "display:none";
  document.querySelector("#questionSection").style = "display:block";

  nextQuestion();
}

function nextQuestion() {
  if (index < questions.length) {
    questionNumber.textContent = 1 + index;
    questionEl.textContent = questions[index].Q;
    o1.textContent = questions[index].O[0];
    o2.textContent = questions[index].O[1];
    o3.textContent = questions[index].O[2];
    o4.textContent = questions[index].O[3];
  } else {
  }
  index++;
}

function endGame() {
  clearInterval(timeInterval);
}

function showScores() {
  if (defANewPage === 0) {
    document.querySelector("#startSection").style = "display:none";
    document.querySelector("#scoresSection").style = "display:block";
    defANewPage++;
  } else {
    document.querySelector("#startSection").style = "display:block";
    document.querySelector("#scoresSection").style = "display:none";
    defANewPage--;
  }
}

startBtn.addEventListener("click", start);
scoresBtn.addEventListener("click", showScores);
