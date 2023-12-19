//Collect Questions
questionsArr.push(q1, q2, q3, q4, q5, q6, q7, q8);
console.log(questionsArr);

//Get HTML Elements
let game = document.getElementById("questions");
let gameOptions = document.getElementById("choices");
let start = document.getElementById("start-screen");
let btn = document.getElementById("start");
let choices = document.getElementById("choices");
let question = document.getElementById("question-title");
let time = document.getElementById("time");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let initials = document.querySelector("#initials");
let submit = document.getElementById("submit");

//Declare timer elements
let timer;
let timerCount = 60;

//Initialise useful variables
let choose = [];
let qCount = 0;
let score = 0;

//Start the Quiz
function startQuiz() {
  start.setAttribute("class", "hide");
  game.setAttribute("class", "start");
  startTimer();
  displayQuestion();
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    time.textContent = timerCount;
    if (timerCount < 1) {
      timerCount = 0;
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

//Display Question and options
function displayQuestion() {
  question.textContent = questionsArr[qCount].questions;
  console.log(question);
  for (let i = 0; i < questionsArr[qCount].answers.length; i++) {
    choose[i] = document.createElement("button");
    choose[i].textContent = questionsArr[qCount].answers[i];
    choose[i].setAttribute("data-state", i);
    choose[i].setAttribute("id", "datastate" + i);
    choose[i].addEventListener("click", nextQuestion);
    choices.appendChild(choose[i]);
  }
}

//Go to next question
function nextQuestion() {
  if (qCount < questionsArr.length - 1) {
    let dataState = this.getAttribute("data-state");
    if (dataState == questionsArr[qCount].correct) {
      score++;
    } else {
      timerCount -= 10;
    }
    qCount++;
    question.textContent = questionsArr[qCount].questions;
    for (let i = 0; i < questionsArr[qCount].answers.length; i++) {
      console.log(choose[i].textContent);
      choose[i].textContent = questionsArr[qCount].answers[i];
    }
    console.log(score);
  } else {
    endQuiz();
  }
}

//Store the scores
function endQuiz() {
  game.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");

  time.textContent = "Time's Up!";
  finalScore.textContent = score;

  submit.addEventListener("click", saveInit);
}

function saveInit() {
  let highScore = {
    initials: initials.value.trim(),
    score: score,
  };
  localStorage.setItem("highScore", JSON.stringify(highScore));
  initials.textContent = "";
}

btn.addEventListener("click", startQuiz);
