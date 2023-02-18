// Element.innerHTML = ;
// Element.SetHTML();
// Node.textContent
var startBtn = document.querySelector(".startBtn");
var scoresBtn = document.querySelector(".scoresBtn");
var submitBtn = document.querySelector(".submitBtn");
var optionBtn = document.querySelector(".optionBtn");
var clearScoresBtn = document.querySelector(".clearScoreBtn");
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
var scores = JSON.parse(localStorage.getItem("scores")) || [];
var defANewPage = 0;
var questions = [
  {
    text: "What is the chance you will get this question correct guessing randomly?",
    option: ["50%", "25%", "0%", "50%"],
    answer: ["50%"],
  },
  {
    text: "If you clean the vacuum cleaner does that make you the vacuum cleaner?",
    option: ["what!?", "Yes.", "IDK", "no?"],
    answer: ["Yes."],
  },
  {
    text: "Do straws have one hole or two?",
    option: ["1", "2"],
    answer: ["1"],
  },
  {
    text: "What occurs once in a minute, twice in a moment, but never in an hour?",
    option: ["A minute", "A clock", "M", "A full circle"],
    answer: ["M"],
  },
  {
    text: "How long was the 100 Years' War?",
    option: ["89 years", "116 years", "Still going on", "100 years"],
    answer: ["116 years"],
  },
  {
    text: "What does the K in K-Mart stand for?",
    option: ["Potassium", "Kyle's", "Kwality", "Nothing"],
    answer: ["Nothing"],
  },
  {
    text: "What number do you get when you multiply all the numbers on a roulette wheel?",
    option: ["A lot", "525,600", "0", "3.154e+7"],
    answer: ["0"],
  },
  {
    text: "If you divide 30 by a half and add ten, what would be the result?",
    option: ["25", "70", "45", "3.154e+7"],
    answer: ["70"],
  },
  {
    text: "Is the S or C silent in the word Scent?",
    option: ["S", "C", "Both", "Neither"],
    answer: ["S", "C"],
  },
  {
    text: "One 18 inch pizza is bigger than two 12 inch pizzas.",
    option: ["True", "False"],
    answer: ["True"],
  },
];

function start() {
  timeInterval = setInterval(function () {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);

  scoresBtn.style = "visibility:hidden";
  document.querySelector("#startSection").style = "display:none";
  document.querySelector("#questionSection").style = "display:block";

  displayQuestion();
}

function nextQuestion(event) {
  var choice = event.target.textContent;

  if (!questions[index].answer.includes(choice)) {
    time -= 5;
    timeEl.textContent = time;
    if (time <= 0) {
      endGame();
    }
  }

  index++;

  if (index < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}

function displayQuestion() {
  questionNumber.textContent = index + 1;
  questionEl.textContent = questions[index].text;
  if (questions[index].option.length === 4) {
    document.querySelector("#o3").style = "display:inline";
    document.querySelector("#o4").style = "display:inline";
    o1.textContent = questions[index].option[0];
    o2.textContent = questions[index].option[1];
    o3.textContent = questions[index].option[2];
    o4.textContent = questions[index].option[3];
  } else {
    o1.textContent = questions[index].option[0];
    o2.textContent = questions[index].option[1];
    document.querySelector("#o3").style = "display:none";
    document.querySelector("#o4").style = "display:none";
  }
}

function endGame() {
  document.querySelector("#questionSection").style = "display:none";
  document.querySelector("#resultsSection").style = "display:block";
  document.querySelector("#score").textContent = time;
  clearInterval(timeInterval);
}

function showScores() {
  if (defANewPage === 0) {
    document.querySelector("#startSection").style = "display:none";
    document.querySelector("#scoresSection").style = "display:block";
    clearScoresBtn.addEventListener("click", function () {
      localStorage.clear();
      scores = [];
      document.querySelector("#savedScores").innerHTML = "";
    });

    document.querySelector("#savedScores").innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
      var li = document.createElement("li");
      document.querySelector("#savedScores").appendChild(li);
      li.textContent = scores[i];
    }
    defANewPage++;
  } else {
    document.querySelector("#startSection").style = "display:block";
    document.querySelector("#scoresSection").style = "display:none";
    defANewPage--;
  }
}

function saveScores() {
  scores.push(document.querySelector("#name").value + " : " + time);

  localStorage.setItem("scores", JSON.stringify(scores));
}

startBtn.addEventListener("click", start);
scoresBtn.addEventListener("click", showScores);
submitBtn.addEventListener("click", saveScores);
o1.addEventListener("click", nextQuestion);
o2.addEventListener("click", nextQuestion);
o3.addEventListener("click", nextQuestion);
o4.addEventListener("click", nextQuestion);
