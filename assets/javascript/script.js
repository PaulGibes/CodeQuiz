// Element.innerHTML = ;
// Element.SetHTML();
// Node.textContent
var timeEl = document.querySelector(".seconds");
var time = Number(timeEl.textContent);
var timeInterval;
var index = 0;
var questions = [
  {
    Q: "Question 1",
    O: ["option1", "Option2", "Option3", "Option4"],
    A: "Option1",
  },
  {
    Q: "Question 2",
    O: ["option1", "Option2", "Option3", "Option4"],
    A: "Option3",
  },
  {
    Q: "Question 3",
    O: ["option1", "Option2", "Option3", "Option4"],
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

  document.querySelector(".scoresBtn").style = "visibility:hidden";
  document.querySelector("#startSection").style = "display:none";
  document.querySelector("#questionSection").style = "display:block";

  nextQuestion();
}

function nextQuestion() {
  if (index < questions.length) {
    document.querySelector(".questionEl").textContent = questions[index].Q;
    document.querySelector("#o1").textContent = questions[index].O[0];
    document.querySelector("#o2").textContent = questions[index].O[1];
    document.querySelector("#o3").textContent = questions[index].O[2];
    document.querySelector("#o4").textContent = questions[index].O[3];
  }
  index++;
}

function endGame() {
  clearInterval(timeInterval);
}

document.querySelector(".startBtn").addEventListener("click", start);
