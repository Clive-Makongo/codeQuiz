//Collect Questions
questionsArr.push(q1, q2, q3, q4);
console.log(questionsArr);

//Get HTML Elements
let game = document.getElementById("questions");
let gameOptions = document.getElementById('choices');
let start = document.getElementById("start-screen");
let btn = document.getElementById('start');
let choices = document.getElementById("choices");
let question = document.getElementById("question-title");
let time = document.getElementById("time")

let timer;
let timerCount = 60;

let choose = [];
let qCount = 0;
let score = 0;


function startQuiz() {
    start.setAttribute("class", "hide");
    game.setAttribute("class", "start")
    startTimer();
    displayQuestion(); 



}

function startTimer() {
    timer = setInterval(function () {
      timerCount--;
      time.textContent = timerCount;
    }, 1000);
}

function displayQuestion() {
    question.textContent = questionsArr[qCount].question;
    console.log(question);
    for (let i = 0; i < questionsArr[qCount].answers.length; i++) {
      choose[i] = document.createElement("button");
      choose[i].textContent = questionsArr[qCount].answers[i];
      choose[i].setAttribute("data-state", i);
      choose[i].setAttribute("id", "datastate" + i);
      choose[i].addEventListener('click',nextQuestion);
      choices.appendChild(choose[i]);
    }

}

function nextQuestion() {

    let dataState = this.getAttribute("data-state");
    if (dataState == questionsArr[qCount].correct) {
        score++
    } else {
        timerCount -= 10;
    }

    qCount++;
    question.textContent = questionsArr[qCount].question;
    for (let i = 0; i < questionsArr[qCount].answers.length; i++) {
        console.log(choose[i].textContent);
        choose[i].textContent = questionsArr[qCount].answers[i];
    }
    console.log(score);
}




btn.addEventListener('click', startQuiz)