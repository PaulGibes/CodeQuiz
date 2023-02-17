// Element.innerHTML = ;
// Element.SetHTML();
// Node.textContent
var startBtn = document.querySelector(".startBtn");
var scoresBtn = document.querySelector(".scoresBtn");
var optionBtn = document.querySelector(".optionBtn");
var questionNumber = document.querySelector("#questionNumber");
var questionEl = document.querySelector(".questionEl");
var buttonListEl = document.querySelector("#buttons");
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
    Q: "What is the chance you will get this question correct guessing randomly?",
    O: ["50%", "25%", "0%", "50%"],
    A: "50%",
  },
  {
    Q: "If you clean the vacuum cleaner does that make you the vacuum cleaner?",
    O: ["what!?", "Yes.", "IDK", "no?"],
    A: "Yes.",
  },
  {
    Q: "Do straws have one hole or two?",
    O: ["1", "2"],
    A: "1",
  },
  {
    Q: "What occurs once in a minute, twice in a moment, but never in an hour?",
    O: ["A minute", "50%", "M", "A full circle"],
    A: "M",
  },
  {
    Q: "How long was the 100 Years' War?",
    O: ["100", "116 years", "Still going on", "100 years"],
    A: "116 years",
  },
  {
    Q: "What does the K in K-Mart stand for?",
    O: ["Potassium", "Kyle's", "Kwality", "Nothing"],
    A: "Nothing",
  },
  {
    Q: "What number do you get when you multiply all the numbers on a roulette wheel?",
    O: [">1,000,000", "525,600", "0", "3.154e+7"],
    A: "0",
  },
  {
    Q: "If you divide 30 by a half and add ten, what would be the result?",
    O: ["25", "70", "45", "3.154e+7"],
    A: "70",
  },
  {
    Q: "Is the S or C silent in the word Scent?",
    O: ["S", "C", "Both", "Neither"],
    A: ["S", "C"],
  },
  {
    Q: "One 18 inch pizza is bigger than two 12 inch pizzas",
    O: ["True", "False"],
    A: "True",
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
    if (questions[index].O.length === 4) {
      document.querySelector("#o3").style = "display:inline";
      document.querySelector("#o4").style = "display:inline";
      o1.textContent = questions[index].O[0];
      o2.textContent = questions[index].O[1];
      o3.textContent = questions[index].O[2];
      o4.textContent = questions[index].O[3];
    } else {
      o1.textContent = questions[index].O[0];
      o2.textContent = questions[index].O[1];
      document.querySelector("#o3").style = "display:none";
      document.querySelector("#o4").style = "display:none";
    }
  } else {
    endGame();
  }
  index++;
}

function endGame() {
  document.querySelector("#questionSection").style = "display:none";
  document.querySelector("#resultsSection").style = "display:block";
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
optionBtn.addEventListener("click", nextQuestion);
