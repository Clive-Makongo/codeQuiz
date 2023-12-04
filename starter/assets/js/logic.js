//Collect Questions
questionsArr.push(q1, q2);
console.log(questionsArr);

//Get HTML Elements
let game = document.getElementById("game");
let gameOptions = document.querySelector('ol')

//Score Elements
let score = 0;

//Track Question
let qCount = 0;


gameOptions.setAttribute('id', 'qList')
let options = [];
let btn = document.getElementById('start')

function startGame() {
    let nextQuestion;
    let selected = [];
    let i = 0;

    do {
        displayQuestion(i);

        for (let i = 0; i < 4; i++) {
            selected[i] = document.getElementById("datastate" + i);

            selected[i].addEventListener('click', checkAnswer);
            // chosenAnswer = selected[i];

            
        }
    } while (i < questionsArr.length && (nextQuestion != undefined));
}


function displayQuestion(i) {

    for (let j = 0; j < questionsArr[i].answers.length; j++) {

        console.log(questionsArr[i].answers[j]);
        options[j] = document.createElement("li");
        options[j].setAttribute('id', 'q' + j)
        options[j].textContent = questionsArr[i].answers[j];

        game.textContent = questionsArr[i].question;
        gameOptions.appendChild(options[j]);

        addButtons();
    }


}

function addButtons() {
    let choose = document.createElement('button')
    choose.textContent = 'Select'

    for (let i = 0; i < options.length; i++) {
        choose.setAttribute('data-state', i);
        choose.setAttribute("id", 'datastate' + i);
        options[i].appendChild(choose)
    }

    btn.remove();
}

function checkAnswer() {
  let dataState = this.getAttribute("data-state");
  if(dataState == questionsArr[qCount].correct) {
    score++;
    console.log(score);
  } else {
    //Decrease Time
  }
  qCount++;
}
btn.addEventListener("click", startGame);